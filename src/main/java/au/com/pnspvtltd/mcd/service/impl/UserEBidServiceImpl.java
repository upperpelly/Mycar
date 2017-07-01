package au.com.pnspvtltd.mcd.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
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
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.UserSearchLeadRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.UserEBidService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
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
	private UserSearchLeadRepository userSearclLeadRepository;
	
	
	
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private DealerRepository dealerRepository;
	@Autowired
	private VehicleQuotationRepository vehicleQuotationRepository;
	@Autowired
	private FinanceQuotationRepository financeQuotationRepository;
	@Autowired
	private InsuranceQuotationRepository insuranceQuotationRepository;
	@Autowired
	private CountyRegPostSubRepository countyRegPostSubRepository;
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
		// (2) create a java sql date object we want to insert
	    Calendar calendar = Calendar.getInstance();
	    java.sql.Date ourJavaDateObject = new java.sql.Date(calendar.getTime().getTime());
	    search.setCreationDate(ourJavaDateObject);
	    search.setUserid(user.getUserId());
		if (user.getSearch() != null) {
			user.getSearch().add(search);
		} else {
			List<Search> userVehicleLeads = new ArrayList<>();
			userVehicleLeads.add(search);
			user.setSearch(userVehicleLeads);
		}

		SearchFinance searchFinance = null;
		searchFinance = domainModelUtil.toSearchFinance(userEBidVO.getFinanceLead());
		// (2) create a java sql date object we want to insert
	    Calendar calendar12 = Calendar.getInstance();
	    java.sql.Date ourJavaDateObject1 = new java.sql.Date(calendar12.getTime().getTime());
	    searchFinance.setCreationDate(ourJavaDateObject1);
		// Create User Finance Lead when isfinance and searchFinance != null
		if (userEBidVO.isFinance() && searchFinance != null) {

			/*
			 * searchFinance =
			 * domainModelUtil.toSearchFinance(userEBidVO.getFinanceLead());
			 */
			if (user.getSearchFinance() != null) {
				user.getSearchFinance().add(searchFinance);
			} else {
				List<SearchFinance> userFinanceLeads = new ArrayList<>();
				userFinanceLeads.add(searchFinance);
				user.setSearchFinance(userFinanceLeads);
			}
		}
		SearchInsurance searchInsurance = null;
		searchInsurance = domainModelUtil.toSearchInsurance(userEBidVO.getInsuranceLead());
		Calendar calendar14 = Calendar.getInstance();
	    java.sql.Date ourJavaDateObject12 = new java.sql.Date(calendar14.getTime().getTime());
	    searchInsurance.setCreationDate(ourJavaDateObject12);
		// Create User Insurance Lead when isinsurer and searchInsurance != null
		if (userEBidVO.isInsurance() && searchInsurance != null) {

			/*
			 * searchInsurance =
			 * domainModelUtil.toSearchInsurance(userEBidVO.getInsuranceLead());
			 */
			if (user.getSearchInsurance() != null) {
				user.getSearchInsurance().add(searchInsurance);
			} else {
				List<SearchInsurance> userInsuranceLeads = new ArrayList<>();
				userInsuranceLeads.add(searchInsurance);
				user.setSearchInsurance(userInsuranceLeads);
			}
		}
		userRepository.flush();
/*
		//
		// Checking for following conditions to create Leads and Quotations for
		// Dealers
		// 1. {year, make, model, autoscooptrim} perfect match
		// 2. Region, 3. Postcode
		//

		List<Inventory> inventories = inventoryRepository.getInventoryForTrim(search.getModelYear(),
				search.getModelDisplay(), search.getModelTrim());

		for (Inventory inventory : inventories) {

			System.out.println("details for Dealer and Quotations Creation" + inventory.getRepoId()
					+ inventory.getModelYear() + inventory.getModelDisplay() + inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();

			DealerSearch dealerSearch = null;

			// Create Dealer Vehicle Lead if
			// he is a Dealer and
			// check for region, postCode
			// TODO: Rename isDealer to reflect whether the Dealer is eligible
			// for Vehicle Lead
			if (dealer.isDealer() && (checkDealerRegion(dealer, search.getPostCode())
					|| checkDealerPostCode(dealer, search.getPostCode()))) {
				System.out.println("isDealer" + dealer.isDealer() + "region and postcode is matching");
				dealerSearch = domainModelUtil.toDealerSearch(userEBidVO.getSearchLead());
				dealerSearch.setUserId(user.getUserId());
				if (dealer.getDealSearch() != null) {
					dealer.getDealSearch().add(dealerSearch);
				} else {
					List<DealerSearch> dealerVehicleLeads = new ArrayList<>();
					dealerVehicleLeads.add(dealerSearch);
					dealer.setDealSearch(dealerVehicleLeads);
				}
				inventoryRepository.flush();
				// Create Quotation for Dealer matching Region and postCode
				System.out.println("create quotation when region and postcode is matching" + dealer.isDealer());
				createVehicleQuotation(user, dealer, search, dealerSearch, inventory);
			}

		}

		// Create Dealer Leads from "Inventory make"
		// Checking for following conditions to create Leads for Dealers from
		// "inventory make"
		// 1. IsDealer and
		// 2. Region, Postcode
		List<Inventory> inventorieMakes = inventoryRepository.getInventoryForMake(search.getModelDisplay());
		for (Inventory inventory : inventorieMakes) {
			System.out.println("details for matching Make from inventory repo" + inventory.getRepoId()
					+ inventory.getModelYear() + inventory.getModelDisplay() + inventory.getModelTrim());
			Dealer dealer = inventory.getDealer();

			DealerSearch dealerSearch = null;

			// Create Dealer Vehicle Lead if he is a Dealer
			// check for region, postCode and IsDealer
			// TODO: Rename isDealer to reflect whether the Dealer is eligible
			// for Vehicle Lead
			if (dealer.isDealer() && (checkDealerRegion(dealer, search.getPostCode())
					|| checkDealerPostCode(dealer, search.getPostCode()))) {
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

			inventoryRepository.flush();

		}

		// Create Dealer Leads from "Dealer's make"
		// Checking for following conditions to create Leads for Dealers from
		// "Dealer's make"
		// 1. Dealer make and
		// 2. Region, Postcode
		List<Dealer> dealerMakes = dealerRepository.getDealerForMake();
		// boolean present12 = false;
		for (Dealer dealer : dealerMakes) {
			// present12 = true;

			List<VehicleDealerMakeList> makeLists = dealer.getVehicleDealerMakeList();
			for (VehicleDealerMakeList dealMake : makeLists) {
				if (dealMake.getMake().equals(search.getModelDisplay())
						&& (checkDealerRegion(dealer, search.getPostCode())
								|| checkDealerPostCode(dealer, search.getPostCode()))) {
					DealerSearch dealerSearch = null;
					System.out.println(
							"details for matching make from dealer's repo" + dealer.getDealerId() + dealMake.getMake());
					// Create Dealer Vehicle Lead if he is a Dealer
					// check for region, postCode and IsDealer
					// TODO: Rename isDealer to reflect whether the Dealer is
					// eligible
					// for Vehicle Lead
					if (dealer.isDealer() && (checkDealerRegion(dealer, search.getPostCode())
							|| checkDealerPostCode(dealer, search.getPostCode()))) {
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

					dealerRepository.flush();
				}
			}

		}

		// Create Finance Leads when
		// dealer isFinancer
		List<Dealer> financeDealers = dealerRepository.getDealerForFinance(true);
		for (Dealer dealer : financeDealers) {
			DealerSearchFinance dealerSearchFinance = null;

			if (userEBidVO.isFinance() && searchFinance != null) {
				// Create Dealer Finance Lead if he provides finance

				dealerSearchFinance = domainModelUtil.toDealerSearchFinance(userEBidVO.getFinanceLead());
				dealerSearchFinance.setUserId(user.getUserId());
				if (dealer.getDealSearchFinance() != null) {
					dealer.getDealSearchFinance().add(dealerSearchFinance);
				} else {
					List<DealerSearchFinance> dealerFinanceLeads = new ArrayList<>();
					dealerFinanceLeads.add(dealerSearchFinance);
					dealer.setDealSearchFinance(dealerFinanceLeads);
				}
				dealerRepository.flush();
			}

			
			 * if (dealer.isFinancer() && searchFinance != null &&
			 * userEBidVO.isFinance()) { createFinanceQuotation(user, dealer,
			 * searchFinance, dealerSearchFinance, inventory); } if
			 * (dealer.isInsurer() && searchInsurance != null &&
			 * userEBidVO.isInsurance()) { createInsuranceQuotation(user,
			 * dealer, searchInsurance, dealerSearchInsurance, inventory); }
			 
		}

		// Create insurance Leads
		// when dealer isInsurer
		List<Dealer> insuranceDealers = dealerRepository.getDealerForInsurance(true);
		for (Dealer dealer : insuranceDealers) {
			DealerSearchInsurance dealerSearchInsurance = null;

			if (userEBidVO.isInsurance() && searchInsurance != null) {
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
			}

			
			 * if (dealer.isFinancer() && searchFinance != null &&
			 * userEBidVO.isFinance()) { createFinanceQuotation(user, dealer,
			 * searchFinance, dealerSearchFinance, inventory); } if
			 * (dealer.isInsurer() && searchInsurance != null &&
			 * userEBidVO.isInsurance()) { createInsuranceQuotation(user,
			 * dealer, searchInsurance, dealerSearchInsurance, inventory); }
			 
			dealerRepository.flush();
		}*/

		return "{\"userId\":" + userEBidVO.getUserId() + ",\"searchId\":" + search.getCarSearchId() + "}";

	}

	public boolean checkDealerPostCode(Dealer dealer, int postCode) {
		List<VehicleDealerAreaOfOperPostCode> dealerPostCodes = dealer.getVehicleDealerPostCode();
		boolean eligibled = false;
		for (VehicleDealerAreaOfOperPostCode dealerPostCode : dealerPostCodes) {
			if (dealerPostCode.getPostCode() == String.valueOf(postCode)) {
				eligibled = true;
			}
		}
		return eligibled;

	}

	public boolean checkDealerRegion(Dealer dealer, int postCode) {
		// to do
		List<String> region = countyRegPostSubRepository.getRegionForGivenPostCode(postCode);
		List<VehicleDealerAreaOfOperRegion> dealerRegions = dealer.getVehicleDealerRegion();
		boolean eligibled = false;
		for (VehicleDealerAreaOfOperRegion dealerRegion : dealerRegions) {
			if (region.contains(dealerRegion.getRegion())) {
				eligibled = true;
			}
		}
		return eligibled;
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

		// Create Finance Leads when
		// dealer isFinancer
		List<Dealer> financeDealers = dealerRepository.getDealerForFinance(true);
		for (Dealer dealer : financeDealers) {
			DealerSearchFinance dealerSearchFinance = null;

			if (searchFinance != null) {
				// Create Dealer Finance Lead if he provides finance

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

			dealerRepository.flush();

			/*
			 * if (dealer.isFinancer() && searchFinance != null &&
			 * userEBidVO.isFinance()) { createFinanceQuotation(user, dealer,
			 * searchFinance, dealerSearchFinance, inventory); } if
			 * (dealer.isInsurer() && searchInsurance != null &&
			 * userEBidVO.isInsurance()) { createInsuranceQuotation(user,
			 * dealer, searchInsurance, dealerSearchInsurance, inventory); }
			 */
		}

		return "{\"userId\":" + userEBidVO.getUserId() + "}";

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

		/*
		 * String withOutSpace = searchInsurance.getVariant().replaceAll("%20",
		 * " "); System.out.println("without"+withOutSpace);
		 * System.out.println("with"+searchInsurance.getVariant());
		 */

		List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchInsurance.getYear()),
				searchInsurance.getMake(), searchInsurance.getModel(), searchInsurance.getVariant());
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details" + inventory.getRepoId() + inventory.getModelYear()
					+ inventory.getModelDisplay() + inventory.getModelName() + inventory.getModelTrim());
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
			System.out.println("isServMaint" + dealer.isServMaint());
			if (dealer.isServMaint()) {
				// createInsuranceQuotation(user, dealer, searchInsurance,
				// dealerSearchInsurance, inventory);
			}

		}
		System.out.println("present value" + present);
		if (!present) {
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId() + "}";

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
		 Calendar calendar = Calendar.getInstance();
		    java.sql.Date ourJavaDateObject = new java.sql.Date(calendar.getTime().getTime());
		    searchInsurance.setCreationDate(ourJavaDateObject);
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

		/*
		 * String withOutSpace = searchInsurance.getVariant().replaceAll("%20",
		 * " "); System.out.println("without"+withOutSpace);
		 * System.out.println("with"+searchInsurance.getVariant());
		 */

		List<Inventory> inventories = inventoryRepository.getInventoryFor(String.valueOf(searchInsurance.getYear()),
				searchInsurance.getMake(), searchInsurance.getModel(), searchInsurance.getVariant());
		boolean present = false;
		for (Inventory inventory : inventories) {
			present = true;
			System.out.println("details" + inventory.getRepoId() + inventory.getModelYear()
					+ inventory.getModelDisplay() + inventory.getModelName() + inventory.getModelTrim());
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
			System.out.println("isServMaint" + dealer.isServMaint());
			if (dealer.isServMaint()) {
				// createInsuranceQuotation(user, dealer, searchInsurance,
				// dealerSearchInsurance, inventory);
			}

		}
		System.out.println("present value" + present);
		if (!present) {
			System.out.println("inventory not present");
		}
		return "{\"userId\":" + userEBidVO.getUserId() + "}";

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

		// Create insurance Leads
		// when dealer isInsurer
		List<Dealer> insuranceDealers = dealerRepository.getDealerForInsurance(true);
		for (Dealer dealer : insuranceDealers) {
			DealerSearchInsurance dealerSearchInsurance = null;

			if (searchInsurance != null) {
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
			}

			/*
			 * if (dealer.isFinancer() && searchFinance != null &&
			 * userEBidVO.isFinance()) { createFinanceQuotation(user, dealer,
			 * searchFinance, dealerSearchFinance, inventory); } if
			 * (dealer.isInsurer() && searchInsurance != null &&
			 * userEBidVO.isInsurance()) { createInsuranceQuotation(user,
			 * dealer, searchInsurance, dealerSearchInsurance, inventory); }
			 */
			dealerRepository.flush();
		}

		return "{\"userId\":" + userEBidVO.getUserId() + "}";

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
		System.out.println("create quotation when dealer ID" + dealer.getDealerId());
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

		/*
		 * InsuranceQuotation insuranceQuotation = new InsuranceQuotation();
		 * insuranceQuotation.setDealerId(dealer.getDealerId());
		 * insuranceQuotation.setUserId(user.getUserId());
		 * insuranceQuotation.setDealSearchId(dealerSearchInsurance.
		 * getDealerSearchInsuranceId());
		 * insuranceQuotation.setCarSearchId(userSearchInsurance.
		 * getSearchInsuranceId());
		 * insuranceQuotation.setRefId(inventory.getRepoId());
		 * insuranceQuotation.setAutoBid(inventory.isStockItem());
		 * insuranceQuotationRepository.save(insuranceQuotation);
		 */

	}
 
	@Override
	public List<SearchVO> getSearchByUserId(Long userid) {
		// TODO Auto-generated method stub
		List<SearchVO> searchVOs = new ArrayList<SearchVO>();
		List<Search> searchs = userSearclLeadRepository.getSearchByUserId(userid);
		SearchVO searchVO;
		for(Search search :searchs){
			searchVO = domainModelUtil.toBatchSearchVO( search);
			//BeanUtils.copyProperties(searchVO, search);
			searchVOs.add(searchVO);
		}
		return searchVOs;
	}

}
