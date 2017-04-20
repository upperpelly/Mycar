package au.com.pnspvtltd.mcd.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.DealerSearchFinance;
import au.com.pnspvtltd.mcd.domain.DealerSearchInsurance;
import au.com.pnspvtltd.mcd.domain.DealerSearchServMaint;
import au.com.pnspvtltd.mcd.domain.DealerSearchTransp;
import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.MyVehicle;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.SearchServMaint;
import au.com.pnspvtltd.mcd.domain.SearchTransp;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.UserEBidService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.UserEBidFinanceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidServMaintVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidTransServVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;

@Service
public class UserEBidServiceImpl implements UserEBidService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private VehicleQuotationRepository vehicleQuotationRepository;
	@Autowired
	private FinanceQuotationRepository financeQuotationRepository;
	@Autowired
	private InsuranceQuotationRepository insuranceQuotationRepository;
	@Autowired
	private DomainModelUtil domainModelUtil;

	@Override
	@Transactional
	public String whenUserEBidForCar(UserEBidVO userEBidVO) {

		// Find the User
		User user = userRepository.findOne(userEBidVO.getUserId());

		// Create User Search Lead (Vehicle Lead)
		Search search = domainModelUtil.toSearch(userEBidVO.getSearchLead());
		search.setLeadInitiatedBy(LeadInitiatedBy.USER);
		if (user.getSearch() != null) {
			user.getSearch().add(search);
		} else {
			List<Search> userVehicleLeads = new ArrayList<>();
			userVehicleLeads.add(search);
			user.setSearch(userVehicleLeads);
		}

		// Create User Finance Lead
		SearchFinance searchFinance = domainModelUtil.toSearchFinance(userEBidVO.getFinanceLead());
		if (user.getSearchFinance() != null) {
			user.getSearchFinance().add(searchFinance);
		} else {
			List<SearchFinance> userFinanceLeads = new ArrayList<>();
			userFinanceLeads.add(searchFinance);
			user.setSearchFinance(userFinanceLeads);
		}

		// Create User Insurance Lead
		SearchInsurance searchInsurance = domainModelUtil.toSearchInsurance(userEBidVO.getInsuranceLead());
		if (user.getSearchInsurance() != null) {
			user.getSearchInsurance().add(searchInsurance);
		} else {
			List<SearchInsurance> userInsuranceLeads = new ArrayList<>();
			userInsuranceLeads.add(searchInsurance);
			user.setSearchInsurance(userInsuranceLeads);
		}

		userRepository.flush();

		// Get Inventory matching the User EBid for Car
		// (Model, Make, Year, Trim)
		
		
		List<Inventory> inventories = inventoryRepository.getInventoryFor(search.getModelYear(),
				search.getModelDisplay(), search.getModelName(), search.getModelTrim());
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelName()+inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();

			DealerSearch dealerSearch = null;
			DealerSearchFinance dealerSearchFinance = null;
			DealerSearchInsurance dealerSearchInsurance = null;

			// Create Dealer Vehicle Lead if he is a Dealer
			// TODO: Rename isDealer to reflect whether the Dealer is eligible
			// for Vehicle Lead
			if (dealer.isDealer()) {
				dealerSearch = domainModelUtil.toDealerSearch(userEBidVO.getSearchLead());
				dealerSearch.setUserId(user.getUserId());
				if (dealer.getDealSearch() != null) {
					dealer.getDealSearch().add(dealerSearch);
				} else {
					List<DealerSearch> dealerVehicleLeads = new ArrayList<>();
					dealerVehicleLeads.add(dealerSearch);
					dealer.setDealSearch(dealerVehicleLeads);
				}
			}
			// Create Dealer Finance Lead if he provides finance
			if (dealer.isFinancer()) {
				dealerSearchFinance = domainModelUtil.toDealerSearchFinance(userEBidVO.getFinanceLead());
				dealerSearchFinance.setUserId(user.getUserId());
				if (dealer.getDealSearchFinance() != null) {
					dealer.getDealSearchFinance().add(dealerSearchFinance);
				} else {
					List<DealerSearchFinance> dealerFinanceLeads = new ArrayList<>();
					dealerFinanceLeads.add(dealerSearchFinance);
					dealer.setDealSearchFinance(dealerFinanceLeads);
				}
			}
			// Create Dealer Insurance Lead if he provides insurance
			if (dealer.isInsurer()) {
				dealerSearchInsurance = domainModelUtil.toDealerSearchInsurance(userEBidVO.getInsuranceLead());
				dealerSearchInsurance.setUserId(user.getUserId());
				if (dealer.getDealSearchInsurance() != null) {
					dealer.getDealSearchInsurance().add(dealerSearchInsurance);
				} else {
					List<DealerSearchInsurance> dealerInsuranceLeads = new ArrayList<>();
					dealerInsuranceLeads.add(dealerSearchInsurance);
					dealer.setDealSearchInsurance(dealerInsuranceLeads);
				}
			}

			inventoryRepository.flush();
			System.out.println("isDealer"+dealer.isDealer());
			if (dealer.isDealer()) {
				System.out.println("create quotation when"+dealer.isDealer());
				createVehicleQuotation(user, dealer, search, dealerSearch, inventory);
			}
			if (dealer.isFinancer()) {
				createFinanceQuotation(user, dealer, searchFinance, dealerSearchFinance, inventory);
			}
			if (dealer.isInsurer()) {
				createInsuranceQuotation(user, dealer, searchInsurance, dealerSearchInsurance, inventory);
			}

		}
System.out.println("present value"+present);
		if(!present){
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId() + ",\"searchId\":" + search.getCarSearchId() + "}";

	}
	@Override
	@Transactional
	public String whenUserEBidForFinance(UserEBidFinanceVO userEBidVO) {

		// Find the User
		User user = userRepository.findOne(userEBidVO.getUserId());

		
		// Create User Finance Lead
		SearchFinance searchFinance = domainModelUtil.toSearchFinance(userEBidVO.getFinanceLead());
		if (user.getSearchFinance() != null) {
			user.getSearchFinance().add(searchFinance);
		} else {
			List<SearchFinance> userFinanceLeads = new ArrayList<>();
			userFinanceLeads.add(searchFinance);
			user.setSearchFinance(userFinanceLeads);
		}

		

		userRepository.flush();

		// Get Inventory matching the User EBid for Car
		// (Model, Make, Year, Trim)
		
		String withOutSpace = searchFinance.getVariant().replaceAll("%20", " ");
		System.out.println("without"+withOutSpace);
		System.out.println("with"+searchFinance.getVariant());
		
		List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchFinance.getYear()),
				searchFinance.getMake(), searchFinance.getModel(), withOutSpace);
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelName()+inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();

			
			DealerSearchFinance dealerSearchFinance = null;
			

			
			// Create Dealer Finance Lead if he provides finance
			if (dealer.isFinancer()) {
				dealerSearchFinance = domainModelUtil.toDealerSearchFinance(userEBidVO.getFinanceLead());
				dealerSearchFinance.setUserId(user.getUserId());
				if (dealer.getDealSearchFinance() != null) {
					dealer.getDealSearchFinance().add(dealerSearchFinance);
				} else {
					List<DealerSearchFinance> dealerFinanceLeads = new ArrayList<>();
					dealerFinanceLeads.add(dealerSearchFinance);
					dealer.setDealSearchFinance(dealerFinanceLeads);
				}
			}
			
			
			inventoryRepository.flush();
			System.out.println("isDealer"+dealer.isDealer());
			
			if (dealer.isFinancer()) {
				createFinanceQuotation(user, dealer, searchFinance, dealerSearchFinance, inventory);
			}
			

		}
System.out.println("present value"+present);
		if(!present){
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId() +  "}";

	}
	
	// start
		@Override
		@Transactional
		public String whenUserEBidForTransServ(UserEBidTransServVO userEBidVO) {

			// Find the User
			User user = userRepository.findOne(userEBidVO.getUserId());

			
			// Create User Insurance Lead
			SearchTransp searchInsurance = domainModelUtil.toSearchTrans(userEBidVO.getSearchTranspLead());
			if (user.getSearchTransp() != null) {
				user.getSearchTransp().add(searchInsurance);
			} else {
				List<SearchTransp> userInsuranceLeads = new ArrayList<>();
				userInsuranceLeads.add(searchInsurance);
				user.setSearchTransp(userInsuranceLeads);
			}

			userRepository.flush();

			// Get Inventory matching the User EBid for Car
			// (Model, Make, Year, Trim)
			
			String withOutSpace = searchInsurance.getVariant().replaceAll("%20", " ");
			System.out.println("without"+withOutSpace);
			System.out.println("with"+searchInsurance.getVariant());
			
			
			
			List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchInsurance.getYear()),
					searchInsurance.getMake(), searchInsurance.getModel(), withOutSpace);
			boolean present = false;
			for (Inventory inventory : inventories) {
				present = true;
				System.out.println("details"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelName()+inventory.getModelTrim());
				Dealer dealer = inventory.getDealer();


				DealerSearchTransp dealerSearchInsurance = null;

				// Create Dealer Insurance Lead if he provides insurance
				if (dealer.isSparesAccess()) {
					dealerSearchInsurance = domainModelUtil.toDealerSearchTransp(userEBidVO.getSearchTranspLead());
					dealerSearchInsurance.setUserId(user.getUserId());
					if (dealer.getDealSearchTransp() != null) {
						dealer.getDealSearchTransp().add(dealerSearchInsurance);
					} else {
						List<DealerSearchTransp> dealerInsuranceLeads = new ArrayList<>();
						dealerInsuranceLeads.add(dealerSearchInsurance);
						dealer.setDealSearchTransp(dealerInsuranceLeads);
					}
				}

				inventoryRepository.flush();
				System.out.println("isServMaint"+dealer.isServMaint());
				if (dealer.isServMaint()) {
					//createInsuranceQuotation(user, dealer, searchInsurance, dealerSearchInsurance, inventory);
				}

			}
	System.out.println("present value"+present);
			if(!present){
				System.out.println("inventory not present");
			}
			return "{\"userId\":" + userEBidVO.getUserId()+  "}";

		}
		// end
	// start
	@Override
	@Transactional
	public String whenUserEBidForServMaint(UserEBidServMaintVO userEBidVO) {

		// Find the User
		User user = userRepository.findOne(userEBidVO.getUserId());

		
		// Create User Insurance Lead
		SearchServMaint searchInsurance = domainModelUtil.toSearchServMaint(userEBidVO.getServMaintLead());
		if (user.getSearchServMaint() != null) {
			user.getSearchServMaint().add(searchInsurance);
		} else {
			List<SearchServMaint> userInsuranceLeads = new ArrayList<>();
			userInsuranceLeads.add(searchInsurance);
			user.setSearchServMaint(userInsuranceLeads);
		}

		userRepository.flush();

		// Get Inventory matching the User EBid for Car
		// (Model, Make, Year, Trim)
		
		String withOutSpace = searchInsurance.getVariant().replaceAll("%20", " ");
		System.out.println("without"+withOutSpace);
		System.out.println("with"+searchInsurance.getVariant());
		
		
		
		List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchInsurance.getYear()),
				searchInsurance.getMake(), searchInsurance.getModel(), withOutSpace);
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelName()+inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();


			DealerSearchServMaint dealerSearchInsurance = null;

			// Create Dealer Insurance Lead if he provides insurance
			if (dealer.isServMaint()) {
				dealerSearchInsurance = domainModelUtil.toDealerSearchServMaint(userEBidVO.getServMaintLead());
				dealerSearchInsurance.setUserId(user.getUserId());
				if (dealer.getDealSearchServMaint() != null) {
					dealer.getDealSearchServMaint().add(dealerSearchInsurance);
				} else {
					List<DealerSearchServMaint> dealerInsuranceLeads = new ArrayList<>();
					dealerInsuranceLeads.add(dealerSearchInsurance);
					dealer.setDealSearchServMaint(dealerInsuranceLeads);
				}
			}

			inventoryRepository.flush();
			System.out.println("isServMaint"+dealer.isServMaint());
			if (dealer.isServMaint()) {
				//createInsuranceQuotation(user, dealer, searchInsurance, dealerSearchInsurance, inventory);
			}

		}
System.out.println("present value"+present);
		if(!present){
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId()+  "}";

	}
	// end
	
	
	@Override
	@Transactional
	public String whenUserEBidForInsurance(UserEBidInsuranceVO userEBidVO) {

		// Find the User
		User user = userRepository.findOne(userEBidVO.getUserId());

		
		// Create User Insurance Lead
		SearchInsurance searchInsurance = domainModelUtil.toSearchInsurance(userEBidVO.getInsuranceLead());
		if (user.getSearchInsurance() != null) {
			user.getSearchInsurance().add(searchInsurance);
		} else {
			List<SearchInsurance> userInsuranceLeads = new ArrayList<>();
			userInsuranceLeads.add(searchInsurance);
			user.setSearchInsurance(userInsuranceLeads);
		}

		userRepository.flush();

		// Get Inventory matching the User EBid for Car
		// (Model, Make, Year, Trim)
		
		String withOutSpace = searchInsurance.getVariant().replaceAll("%20", " ");
		System.out.println("without"+withOutSpace);
		System.out.println("with"+searchInsurance.getVariant());
		
		
		
		List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchInsurance.getYear()),
				searchInsurance.getMake(), searchInsurance.getModel(), withOutSpace);
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details"+inventory.getRepoId()+inventory.getModelYear()+inventory.getModelDisplay()+inventory.getModelName()+inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();


			DealerSearchInsurance dealerSearchInsurance = null;

			// Create Dealer Insurance Lead if he provides insurance
			if (dealer.isInsurer()) {
				dealerSearchInsurance = domainModelUtil.toDealerSearchInsurance(userEBidVO.getInsuranceLead());
				dealerSearchInsurance.setUserId(user.getUserId());
				if (dealer.getDealSearchInsurance() != null) {
					dealer.getDealSearchInsurance().add(dealerSearchInsurance);
				} else {
					List<DealerSearchInsurance> dealerInsuranceLeads = new ArrayList<>();
					dealerInsuranceLeads.add(dealerSearchInsurance);
					dealer.setDealSearchInsurance(dealerInsuranceLeads);
				}
			}

			inventoryRepository.flush();
			System.out.println("isDealer"+dealer.isDealer());
			if (dealer.isInsurer()) {
				createInsuranceQuotation(user, dealer, searchInsurance, dealerSearchInsurance, inventory);
			}

		}
System.out.println("present value"+present);
		if(!present){
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId()+  "}";

	}
	

	
	
	@Override
	@Transactional
	public String createMyVehicle(UserMyVehicleVO userEBidVO) {

		// Find the User
		User user = userRepository.findOne(userEBidVO.getUserId());

		// Create User MyVehicle Details (MyVehicle details)
		MyVehicle search = domainModelUtil.toMyVehicle(userEBidVO.getMyVehicleVO());
		if (user.getMyVehicle() != null) {
			user.getMyVehicle().add(search);
		} else {
			List<MyVehicle> userVehicleLeads = new ArrayList<>();
			userVehicleLeads.add(search);
			user.setMyVehicle(userVehicleLeads);
		}

		

		userRepository.flush();

				return "{\"userId\":" + userEBidVO.getUserId() + ",\"myVehicleId\":" + search.getMyVehicleId() + "}";

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

	private void createFinanceQuotation(User user, Dealer dealer, SearchFinance userSearchFinance,
			DealerSearchFinance dealerSearchFinance, Inventory inventory) {

		FinanceQuotation financeQuotation = new FinanceQuotation();
		financeQuotation.setDealerId(dealer.getDealerId());
		financeQuotation.setUserId(user.getUserId());
		financeQuotation.setDealSearchId(dealerSearchFinance.getDealerSearchFinanceId());
		financeQuotation.setCarSearchId(userSearchFinance.getSearchFinanceId());
		financeQuotation.setRefId(inventory.getRepoId());
		financeQuotation.setAutoBid(inventory.isStockItem());
		financeQuotationRepository.save(financeQuotation);

	}

	private void createInsuranceQuotation(User user, Dealer dealer, SearchInsurance userSearchInsurance,
			DealerSearchInsurance dealerSearchInsurance, Inventory inventory) {

		InsuranceQuotation insuranceQuotation = new InsuranceQuotation();
		insuranceQuotation.setDealerId(dealer.getDealerId());
		insuranceQuotation.setUserId(user.getUserId());
		insuranceQuotation.setDealSearchId(dealerSearchInsurance.getDealerSearchInsuranceId());
		insuranceQuotation.setCarSearchId(userSearchInsurance.getSearchInsuranceId());
		insuranceQuotation.setRefId(inventory.getRepoId());
		insuranceQuotation.setAutoBid(inventory.isStockItem());
		insuranceQuotationRepository.save(insuranceQuotation);

	}
	
	private void createServMaintQuotation(User user, Dealer dealer, SearchServMaint userSearchInsurance,
			DealerSearchServMaint dealerSearchInsurance, Inventory inventory) {

		/*InsuranceQuotation insuranceQuotation = new InsuranceQuotation();
		insuranceQuotation.setDealerId(dealer.getDealerId());
		insuranceQuotation.setUserId(user.getUserId());
		insuranceQuotation.setDealSearchId(dealerSearchInsurance.getDealerSearchInsuranceId());
		insuranceQuotation.setCarSearchId(userSearchInsurance.getSearchInsuranceId());
		insuranceQuotation.setRefId(inventory.getRepoId());
		insuranceQuotation.setAutoBid(inventory.isStockItem());
		insuranceQuotationRepository.save(insuranceQuotation);*/

	}

}
