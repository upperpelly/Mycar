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
import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.UserEBidService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;

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

		for (Inventory inventory : inventories) {

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

			if (dealer.isDealer()) {
				createVehicleQuotation(user, dealer, search, dealerSearch, inventory);
			}
			if (dealer.isFinancer()) {
				createFinanceQuotation(user, dealer, searchFinance, dealerSearchFinance, inventory);
			}
			if (dealer.isInsurer()) {
				createInsuranceQuotation(user, dealer, searchInsurance, dealerSearchInsurance, inventory);
			}

		}

		
		return "{\"userId\":" + userEBidVO.getUserId() + ",\"searchId\":" + search.getCarSearchId() + "}";

	}

	private void createVehicleQuotation(User user, Dealer dealer, Search search, DealerSearch dealerSearch,
			Inventory inventory) {

		VehicleQuotation vehicleQuotation = new VehicleQuotation();
		vehicleQuotation.setDealerId(dealer.getDealerId());
		vehicleQuotation.setUserId(user.getUserId());
		vehicleQuotation.setDealSearchId(dealerSearch.getDealerSearchId());
		vehicleQuotation.setCarSearchId(search.getCarSearchId());
		vehicleQuotation.setRefId(inventory.getRepoId());
		vehicleQuotation.setAutoBid(inventory.isStockItem());

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

}