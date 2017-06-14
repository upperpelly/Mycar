package au.com.pnspvtltd.mcd.scheduler;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.time.temporal.ChronoUnit;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.joda.time.Duration;
import org.joda.time.LocalDate;
import org.joda.time.Period;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.MyVehicle;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.UserNotification;
import au.com.pnspvtltd.mcd.domain.VehicleDealerAreaOfOperPostCode;
import au.com.pnspvtltd.mcd.domain.VehicleDealerAreaOfOperRegion;
import au.com.pnspvtltd.mcd.domain.VehicleDealerMakeList;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;
import au.com.pnspvtltd.mcd.repository.CountyRegPostSubRepository;
import au.com.pnspvtltd.mcd.repository.DealerRepository;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.MyVehicleRepository;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.UserSearchLeadRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.impl.UserServiceImpl;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.SearchVO;

@Service
public class SimulateUserEBidSchedulerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserSearchLeadRepository userSearchLeadRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private DealerRepository dealerRepository;
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private VehicleQuotationRepository vehicleQuotationRepository;
	@Autowired
	private FinanceQuotationRepository financeQuotationRepository;
	@Autowired
	private CountyRegPostSubRepository countyRegPostSubRepository;
	@Autowired
	private InsuranceQuotationRepository insuranceQuotationRepository;
	@Autowired
	private DomainModelUtil domainModelUtil;
	@Autowired
	private MyVehicleRepository myVehicleRepository;

	//@Scheduled(fixedDelay=10800000)
	@Scheduled(fixedDelay=50000)
	@Transactional
	public void simulateUserEBid(){
		
		//Get Search Leads which are initiated by USER
		//List<Search> searchLeads = userSearchLeadRepository.findByLeadInitiatedBy(LeadInitiatedBy.USER);
		List<User> users = userRepository.getAllUser();
		for (User user : users) {
		//dsfsddfdsds
		//List<Search> searchs = userSearchLeadRepository.findByLeadInitiatedBy(LeadInitiatedBy.USER);
		List<Search> searchs = getSearchInitiatedByUser(user);
		for (Search search : searchs) {
		
		// 
				// Checking for following conditions to create Leads and Quotations for Dealers
				//  1. {year, make, model, autoscooptrim} perfect match
				// 2. Region, 3. Postcode
				// 
				
				List<Inventory> inventories = inventoryRepository.getInventoryForTrim(search.getModelYear(),search.getModelDisplay(), search.getModelTrim());
				for (Inventory inventory : inventories) {
					System.out.println("details for Dealer and Quotations Creation"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelTrim());
					Dealer dealer = inventory.getDealer();

					DealerSearch dealerSearch = null;
					
					// Create Dealer Vehicle Lead if 
					// he is a Dealer and dealer not created Lead for this userId
					// check for region, postCode
					// TODO: Rename isDealer to reflect whether the Dealer is eligible
					// for Vehicle Lead
					if (dealer.isDealer() && checkForAlreadyCreatedDealerLead(dealer,user.getUserId()) && (checkDealerRegion(dealer, search.getPostCode()) || checkDealerPostCode(dealer, search.getPostCode()))) {
						System.out.println("isDealer"+dealer.isDealer()+"region and postcode is matching");
						SearchVO searchVO = domainModelUtil.toBatchSearchVO(search);
						dealerSearch = domainModelUtil.toDealerSearch(searchVO);
						dealerSearch.setUserId(user.getUserId());
						if (dealer.getDealSearch() != null) {
							dealer.getDealSearch().add(dealerSearch);
						} else {
							List<DealerSearch> dealerVehicleLeads = new ArrayList<>();
							dealerVehicleLeads.add(dealerSearch);
							dealer.setDealSearch(dealerVehicleLeads);
						}
						// Create Quotation for Dealer matching Region and postCode
						System.out.println("create quotation when region and postcode is matching"+dealer.isDealer());
						inventoryRepository.flush();
						createVehicleQuotation(user, dealer, search, dealerSearch, inventory);
					}
					
					
					
					
					

				}

				
				// Create Dealer Leads from "Inventory make"
				// Checking for following conditions to create Leads for Dealers from "inventory make"
						// 1.isDealer and dealer have not created lead for this userId
						// 2. Region, Postcode 
				List<Inventory> inventorieMakes = inventoryRepository.getInventoryForMake(
						search.getModelDisplay());
				for (Inventory inventory : inventorieMakes) {
					System.out.println("details for matching Make from inventory repo"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelTrim());
					Dealer dealer = inventory.getDealer();

					DealerSearch dealerSearch = null;
					
					// Create Dealer Vehicle Lead if he is a Dealer
					// check for region, postCode and IsDealer
					// TODO: Rename isDealer to reflect whether the Dealer is eligible
					// for Vehicle Lead
					if (dealer.isDealer() && checkForAlreadyCreatedDealerLead(dealer,user.getUserId()) && (checkDealerRegion(dealer, search.getPostCode()) || checkDealerPostCode(dealer, search.getPostCode()))) {
						SearchVO searchVO = domainModelUtil.toBatchSearchVO(search);
						dealerSearch = domainModelUtil.toDealerSearch(searchVO);
						dealerSearch.setUserId(user.getUserId());
						if (dealer.getDealSearch() != null) {
							dealer.getDealSearch().add(dealerSearch);
						} else {
							List<DealerSearch> dealerVehicleLeads = new ArrayList<>();
							dealerVehicleLeads.add(dealerSearch);
							dealer.setDealSearch(dealerVehicleLeads);
						}
						inventoryRepository.flush();
					}
					
					
					

				}
		
				// Create Dealer Leads from "Dealer's make"
				// Checking for following conditions to create Leads for Dealers from "Dealer's make"
						// 1. isDealer and dealer not created lead for this userId
						// 2. Region, Postcode  
				List<Dealer> dealerMakes = dealerRepository.getDealerForMake();
				//boolean present12 = false;
				for (Dealer dealer : dealerMakes) {
					//present12 = true;
					
					List<VehicleDealerMakeList> makeLists = dealer.getVehicleDealerMakeList();
					for (VehicleDealerMakeList dealMake : makeLists) {
						if(dealMake.getMake().equals(search.getModelDisplay()) && checkForAlreadyCreatedDealerLead(dealer,user.getUserId()) && dealer.isDealer() && (checkDealerRegion(dealer, search.getPostCode()) || checkDealerPostCode(dealer, search.getPostCode()))){
					DealerSearch dealerSearch = null;
					System.out.println("details for matching make from dealer's repo"+dealer.getDealerId()+dealMake.getMake());
					// Create Dealer Vehicle Lead if he is a Dealer
					// check for region, postCode and IsDealer
					// TODO: Rename isDealer to reflect whether the Dealer is eligible
					// for Vehicle Lead
						SearchVO searchVO = domainModelUtil.toBatchSearchVO(search);
						dealerSearch = domainModelUtil.toDealerSearch(searchVO);
						
						dealerSearch.setUserId(user.getUserId());
						if (dealer.getDealSearch() != null) {
							dealer.getDealSearch().add(dealerSearch);
						} else {
							List<DealerSearch> dealerVehicleLeads = new ArrayList<>();
							dealerVehicleLeads.add(dealerSearch);
							dealer.setDealSearch(dealerVehicleLeads);
						}
						dealerRepository.flush();
					}
					
					
					}
					

				}
				// completed
				search.setLeadInitiatedBy(LeadInitiatedBy.SCHEDULER);
		}
	}
		
	}
	
	
	
	
	
	@Scheduled(fixedDelay=5000)
	@Transactional
	public void notificationVehGarage(){
		
		//Get all the users
		List<User> users = userRepository.getAllUser();
		for (User user : users) {
		//List of MyVehicles for each user
		List<MyVehicle> searchs = user.getMyVehicle();
		for (MyVehicle search : searchs) {
			if(search.getRegExpDate() != null){
				// check if vehicle Identity Reminder set
			if(search.isVehIdentRego()){
				
				LocalDate event = LocalDate.fromDateFields(search.getRegExpDate());
				LocalDate today = new LocalDate();
				LocalDate weekToday = today.plusWeeks(1);
				LocalDate fortnightToday = weekToday.plusWeeks(2);
				LocalDate weekTodayMonth = today.plusWeeks(4);
				// check if date is in this week
				if (today.compareTo(event) <= 0 && event.compareTo(weekToday) < 0)
				{
				    // It's within the next 7 days
					UserNotification insNotification = new UserNotification();
					// check if already notification is created for one week
					if(!search.isVehIdentRegoOne()){
					insNotification.setCode("ReGo Due Date"); // reminder Type
					insNotification.setTypeOfReq("My Car");// vehicle Type
					insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
					insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
					insNotification.setComment("ReGo due for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getRegExpDate()+", which is in this week (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
					insNotification.setFlex11(search.getRegExpDate());
					if (user.getUserNotification() != null) {
						user.getUserNotification().add(insNotification);
					} else {
						List<UserNotification> insNotifications = new ArrayList<UserNotification>();
						insNotifications.add(insNotification);
						user.setUserNotification(insNotifications);
					}
					userRepository.flush();
					search.setVehIdentRegoOne(true);
					myVehicleRepository.flush();
					}
				}
				else if (weekToday.compareTo(event) <= 0 && event.compareTo(fortnightToday) < 0)
				{
				    // It's next week
					UserNotification insNotification = new UserNotification();
					// check if already notification is created for two weeks
					if(!search.isVehIdentRegoRemTwo()){
					insNotification.setCode("ReGo Due Date"); // reminder Type
					insNotification.setTypeOfReq("My Car");// vehicle Type
					insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
					insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
					insNotification.setComment("ReGo due for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getRegExpDate()+", which is in next week (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
					insNotification.setFlex11(search.getRegExpDate());
					if (user.getUserNotification() != null) {
						user.getUserNotification().add(insNotification);
					} else {
						List<UserNotification> insNotifications = new ArrayList<UserNotification>();
						insNotifications.add(insNotification);
						user.setUserNotification(insNotifications);
					}
					userRepository.flush();
					search.setVehIdentRegoRemTwo(true);
					myVehicleRepository.flush();
					}
				}
				else if (weekToday.compareTo(event) <= 0 && event.compareTo(weekTodayMonth) < 0)
				{
				    // It's next month
					UserNotification insNotification = new UserNotification();
					// check if already notification is created for one month
					if(!search.isVehIdentRegoRemMon()){
						insNotification.setCode("ReGo Due Date"); // reminder Type
						insNotification.setTypeOfReq("My Car");// vehicle Type
						insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
						insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
						insNotification.setComment("ReGo due for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getRegExpDate()+", which is in next month (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
						insNotification.setFlex11(search.getRegExpDate());
					if (user.getUserNotification() != null) {
						user.getUserNotification().add(insNotification);
					} else {
						List<UserNotification> insNotifications = new ArrayList<UserNotification>();
						insNotifications.add(insNotification);
						user.setUserNotification(insNotifications);
					}
					userRepository.flush();
					search.setVehIdentRegoRemMon(true);
					myVehicleRepository.flush();
					}
				}
				
			}	
			}
			// check if vehicle Insurance Reminder set
				if(search.isInsRemind()){
					if(search.getInsExpiry() != null){
					LocalDate event = LocalDate.fromDateFields(search.getInsExpiry());
					LocalDate today = new LocalDate();
					LocalDate weekToday = today.plusWeeks(1);
					LocalDate fortnightToday = weekToday.plusWeeks(2);
					LocalDate weekTodayMonth = today.plusWeeks(4);
					
					if (today.compareTo(event) <= 0 && event.compareTo(weekToday) < 0)
					{
					    // It's within the next 7 days
						UserNotification insNotification = new UserNotification();
						if(!search.isVehInsRemOne()){
							insNotification.setCode("Insurance Due Date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Insurance Due Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getInsExpiry()+", which is in this week (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getInsExpiry());
						
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehInsRemOne(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(fortnightToday) < 0)
					{
					    // It's next two week
						UserNotification insNotification = new UserNotification();
						if(!search.isVehInsRemTwo()){
							insNotification.setCode("Insurance Due Date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Insurance Due Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getInsExpiry()+", which is in next two weeks (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getInsExpiry());
						
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehInsRemTwo(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(weekTodayMonth) < 0)
					{
					    // It's next month
						UserNotification insNotification = new UserNotification();
						if(!search.isVehInsRemMon()){
							insNotification.setCode("Insurance Due Date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Insurance Due Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getInsExpiry()+", which is in next month (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getInsExpiry());
						
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehInsRemMon(true);
						myVehicleRepository.flush();
						}
					}
					
				}	
				}
				// check if Fin Reminder is set
				if(search.isFinRemind()){
					if(search.getLoanTakenDt() != null){
					LocalDate event = LocalDate.fromDateFields(search.getLoanTakenDt());
					LocalDate today = new LocalDate();
					LocalDate weekToday = today.plusWeeks(1);
					LocalDate fortnightToday = weekToday.plusWeeks(2);
					LocalDate weekTodayMonth = today.plusWeeks(4);

					if (today.compareTo(event) <= 0 && event.compareTo(weekToday) < 0)
					{
					    // It's within the next 7 days
						UserNotification insNotification = new UserNotification();
						if(!search.isVehFinRemOne()){
							insNotification.setCode("Finance EMI due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Finance EMI for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in this week (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehFinRemOne(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(fortnightToday) < 0)
					{
					    // It's next week
						UserNotification insNotification = new UserNotification();
						if(!search.isVehFinRemTwo()){
							insNotification.setCode("Finance EMI due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Finance EMI for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in next two weeks (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehFinRemTwo(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(weekTodayMonth) < 0)
					{
					    // It's next week
						UserNotification insNotification = new UserNotification();
						if(!search.isVehFinRemMon()){
							insNotification.setCode("Finance EMI due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Finance EMI for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in this month (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehFinRemMon(true);
						myVehicleRepository.flush();
						}
					}
				}	
				}
				// check if Serv maint Reminder is set
				if(search.isMaiRemind()){
					if(search.getNextServiceDt() != null){
					LocalDate event = LocalDate.fromDateFields(search.getNextServiceDt());
					LocalDate today = new LocalDate();
					LocalDate weekToday = today.plusWeeks(1);
					LocalDate fortnightToday = weekToday.plusWeeks(2);
					LocalDate weekTodayMonth = today.plusWeeks(4);

					if (today.compareTo(event) <= 0 && event.compareTo(weekToday) < 0)
					{
					    // It's within the next 7 days
						UserNotification insNotification = new UserNotification();
						if(!search.isVehServRemOne()){
							insNotification.setCode("S&M Next due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Service and Maintenance Next Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in this week (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehServRemOne(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(fortnightToday) < 0)
					{
					    // It's next week
						UserNotification insNotification = new UserNotification();
						if(!search.isVehServRemTwo()){
							insNotification.setCode("S&M Next due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Service and Maintenance Next Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in next two weeks (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehServRemTwo(true);
						myVehicleRepository.flush();
						}
					}
					else if (weekToday.compareTo(event) <= 0 && event.compareTo(weekTodayMonth) < 0)
					{
					    // It's next week
						UserNotification insNotification = new UserNotification();
						if(!search.isVehServRemMon()){
							insNotification.setCode("S&M Next due date"); // reminder Type
							insNotification.setTypeOfReq("My Car");// vehicle Type
							insNotification.setMyVehicleId(search.getMyVehicleId()); // set MyVehicleId
							insNotification.setMakeDescription(search.getRegNum() +"/"+search.getVin());//RegoNo/Vin Number
							insNotification.setComment("Service and Maintenance Next Date for "+"Car"+" with Registration No "+search.getRegNum()+" is on Date & Time "+search.getLoanTakenDt()+", which is in next month (i.e) No. of " +getDaysBetween(event,weekToday)+" days left");
							insNotification.setFlex11(search.getLoanTakenDt());
						if (user.getUserNotification() != null) {
							user.getUserNotification().add(insNotification);
						} else {
							List<UserNotification> insNotifications = new ArrayList<UserNotification>();
							insNotifications.add(insNotification);
							user.setUserNotification(insNotifications);
						}
						userRepository.flush();
						search.setVehServRemMon(true);
						myVehicleRepository.flush();
						}
					}
				}
				}
				
		}
	}
		
	}
	
	public long getDaysBetween(LocalDate earlier, LocalDate later)
	  {
		long datePositive =0;
	 /*// Put latest date 1st and old date 2nd in 'between' method to get -ve date difference
        long daysNegative = ChronoUnit.DAYS.between(date2, today);
        System.out.println("Days : "+daysNegative);*/

        // Put old date 1st and new date 2nd in 'between' method to get +ve date difference
		datePositive = Days.daysBetween(earlier, later).getDays();
        
        return datePositive;
        
	  }

	public boolean checkForAlreadyCreatedDealerLead(Dealer dealer, Long userId){
		List<DealerSearch> dealerSearchs =dealer.getDealSearch();
		boolean eligibled = true;
		for (DealerSearch dealerSearch : dealerSearchs) {
			if(dealerSearch.getUserId() == userId){
				eligibled=false;
			}
		}
		return eligibled;
		
	}
	
	
	public List<Search> getSearchInitiatedByUser(User user){
		List<Search> searchs = new ArrayList<Search>();
		List<Search> interSearchs=user.getSearch();
		for (Search interSearch : interSearchs) {
			if(interSearch.getLeadInitiatedBy().equals(LeadInitiatedBy.USER)){
				searchs.add(interSearch);
			}
		}
		
		return searchs;
		
	}
	
	public boolean checkDealerPostCode(Dealer dealer, int postCode){
		List<VehicleDealerAreaOfOperPostCode> dealerPostCodes =dealer.getVehicleDealerPostCode();
		boolean eligibled = false;
		for (VehicleDealerAreaOfOperPostCode dealerPostCode : dealerPostCodes) {
			if(dealerPostCode.getPostCode() == String.valueOf(postCode)){
				eligibled=true;
			}
		}
		return eligibled;
		
	}
	
	public boolean checkDealerRegion(Dealer dealer, int postCode){
		// to do
		List<String> region =countyRegPostSubRepository.getRegionForGivenPostCode(postCode);
		List<VehicleDealerAreaOfOperRegion> dealerRegions =dealer.getVehicleDealerRegion();
		boolean eligibled = false;
		for (VehicleDealerAreaOfOperRegion dealerRegion : dealerRegions) {
			if(region.contains(dealerRegion.getRegion())){
				eligibled=true;
			}
		}
		return eligibled;
	}
	
	private void createVehicleQuotation(User user, Dealer dealer, Search search, DealerSearch dealerSearch,
			Inventory inventory) {
		System.out.println("create quotation when dealer ID"+dealer.getDealerId());
		VehicleQuotation vehicleQuotation = new VehicleQuotation();
		vehicleQuotation.setDealerId(dealer.getDealerId());
		vehicleQuotation.setUserId(user.getUserId());
		vehicleQuotation.setDealSearchId(dealerSearch.getDealerSearchId());
		vehicleQuotation.setCarSearchId(search.getCarSearchId());
		vehicleQuotation.setRefId(inventory.getRepoId());
		vehicleQuotation.setAutoBid(inventory.isStockItem());
		vehicleQuotation.setDealerStockNo(inventory.getVendorStockNo());
		vehicleQuotation.setDriveAwayPrice(inventory.getPrice());
		vehicleQuotation.setModelYear(inventory.getModelYear());
		vehicleQuotation.setModelDisplay(inventory.getModelDisplay());
		vehicleQuotation.setModelName(inventory.getModelName());
		vehicleQuotation.setModelTrim(inventory.getModelTrim());
		vehicleQuotationRepository.save(vehicleQuotation);

	}
}
