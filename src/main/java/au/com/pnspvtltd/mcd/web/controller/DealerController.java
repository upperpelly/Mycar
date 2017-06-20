package au.com.pnspvtltd.mcd.web.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerEBidVO;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.repository.DealerSearchRepository;
import au.com.pnspvtltd.mcd.service.DealerService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.DealerSearchAdminVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchListAdminVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.FinanceEntityListVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryListVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserSearchAdminVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

@RestController
public class DealerController {

	private static final Logger LOGGER = LoggerFactory.getLogger(DealerController.class);
	
	@Autowired
	DealerService dealerService;
	
	@Autowired
	DealerSearchRepository dealerSearchRepository;
	@Autowired
	DomainModelUtil domainModelUtil;
	
	@GetMapping(value = "dealer/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public DealerVO getDealer(@PathVariable Long id, HttpServletResponse response) {
		LOGGER.debug("Received request to get Dealer with id {} ", id);
		DealerVO dealer = dealerService.findById(id);
		if (dealer == null) {
			response.setStatus(HttpStatus.NO_CONTENT.value());
		}
		return dealer;
	}
	
	
	@PostMapping("eBid/dealercar")
	public String eBidForCar(@RequestBody DealerEBidVO dealerEBidVO) {
		return dealerService.whenDealerEBidForCar(dealerEBidVO);
	}
	
	@PostMapping("dealer")
	public DealerVO createDealer(@RequestBody DealerVO dealerVO, HttpServletResponse response) {
		LOGGER.debug("Received request to create Dealer with email {}", dealerVO.getEmail());
		DealerVO createdDealer = dealerService.createDealer(dealerVO);
		response.setStatus(HttpStatus.CREATED.value());
		return createdDealer;
	}
	
	@PutMapping("dealer")
	public DealerVO updateDealer(@RequestBody DealerVO dealerVO, HttpServletResponse response) {
		LOGGER.debug("Received request to update Dealer {}", dealerVO);
		DealerVO updatedDealer = dealerService.updateDealer(dealerVO);
		// Dealer does not exist
		if (updatedDealer == null) {
			response.setStatus(HttpStatus.NO_CONTENT.value());
		}
		return updatedDealer;
	}
	
	@GetMapping(value = "dealer", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<DealerVO> getAllDealers(HttpServletResponse response) {
		LOGGER.debug("Received request to get all Dealers");
		List<DealerVO> delares = dealerService.findAllDealers();
		if (delares.isEmpty()) {
			response.setStatus(HttpStatus.NO_CONTENT.value());
		}
		return delares;
	}
	
	@PostMapping(value = "dealer/login", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<DealerVO> login(@RequestBody DealerVO dealerVO, HttpServletResponse response) {
		LOGGER.debug("Dealer with email {} tries to login", dealerVO.getEmail());
		DealerVO dealer = dealerService.findDealerByEmail(dealerVO.getEmail());
		HttpStatus status = HttpStatus.OK;
		if (dealer == null) {
			status = HttpStatus.NO_CONTENT;
		} else if (!dealer.getPassword().equals(dealerVO.getPassword())) {
			status = HttpStatus.UNAUTHORIZED;
			dealer = null;
		} else {
			dealer.setPassword(null);
		}
		return new ResponseEntity<>(dealer, status);
	}
	
	@PostMapping("dealer/addInventory")
	public String addInventory(@RequestBody InventoryVO inventoryVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add inventory by the Dealer with Id {}", inventoryVO.getRefId());
		response.setStatus(HttpStatus.CREATED.value());
		return dealerService.addInventory(inventoryVO);
	}
	
	@PostMapping("dealer/addInventoryList")
	public String addInventoryList(@RequestBody InventoryListVO inventoryVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add inventory List by the Dealer with Id {}");
		response.setStatus(HttpStatus.CREATED.value());
		return dealerService.addInventoryList(inventoryVO);
	}
	
	@PostMapping("dealer/addProductList")
	public String addProductList(@RequestBody FinanceEntityListVO financeEntityVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add financeEntity List by the Dealer with Id {}");
		response.setStatus(HttpStatus.CREATED.value());
		return dealerService.addFinanceEntityList(financeEntityVO);
	}
	
	@GetMapping(value = "dealer/{id}/inventory", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<InventoryVO> getInventory(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Inventory with id {} ", id);
		return dealerService.getInventory(id);
	}

	@GetMapping(value = "dealer/{id}/search", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<DealerSearchVO> getDealerSearch(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Search with id {} ", id);
		return dealerService.getDealerSearch(id);
	}
	
	@GetMapping(value = "dealer/{id}/searchInsurance", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<DealerSearchInsuranceVO> getDealerSearchInsurance(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Search Insurance with id {} ", id);
		return dealerService.getDealerSearchInsurance(id);
	}
	
	@GetMapping(value = "dealer/{id}/searchFinance", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<DealerSearchFinanceVO> getDealerSearchFinance(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Search Finance with id {} ", id);
		return dealerService.getDealerSearchFinance(id);
	}
	
	@GetMapping(value = "dealer/{id}/vehicleQuotation", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<VehicleQuotationVO> getDealerVehicleQuotation(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Vehicle Quotation with id {} ", id);
		return dealerService.getDealerVehicleQuotation(id);
	}
	
	@GetMapping(value = "dealer/{id}/insuranceQuotation", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<InsuranceQuotationVO> getDealerInsuranceQuotation(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Insurance Quotation with id {} ", id);
		return dealerService.getDealerInsuranceQuotation(id);
	}
	
	@GetMapping(value = "dealer/{id}/financeQuotation", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<FinanceQuotationVO> getDealerFinanceQuotation(@PathVariable Long id) {
		LOGGER.debug("Received request to get Dealer Finance Quotation with id {} ", id);
		return dealerService.getDealerFinanceQuotation(id);
	}
	
	@PutMapping("dealerLeadCreation")
	public DealerSearch dealerLeadCreation(@RequestBody DealerSearchAdminVO dealerVO, HttpServletResponse response) {
		LOGGER.debug("Received request to update Dealer {}", dealerVO);
		
		DealerSearch updatedDealer = dealerService.dealerAdminLead(dealerVO);
		// Dealer does not exist
		if (updatedDealer == null) {
			response.setStatus(HttpStatus.NO_CONTENT.value());
		}
		return updatedDealer;
	}
	
	
	@GetMapping(value = "dealerIDs", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<Long> getDealerIDs(){
		
		LOGGER.info("Received request to get All Dealer Ids");
		return dealerService.getDealerIDs();
		
	}
	
	
	@GetMapping(value = "dealerInfoforID", produces = { MediaType.APPLICATION_JSON_VALUE })
	public DealerVO getDealerForID(@RequestParam("dealerID") Long dealerID) {
		LOGGER.info("Received request to get Dealer info for Dealer Id");
		return dealerService.getDealerForID(dealerID);
	}
	
	@GetMapping(value = "getDealSearchInfoId", produces = { MediaType.APPLICATION_JSON_VALUE })
	public DealerSearchListAdminVO getSearchInfor(@RequestParam("carSearchId") Long carSearchId) {
		LOGGER.debug("Received request to get Dealer car Search id {} ", carSearchId);
		DealerSearchListAdminVO userAdminSearchVO12 = new DealerSearchListAdminVO();

		List<DealerSearch> users = dealerSearchRepository.getDealerSearchForID(carSearchId);
		List<DealerSearchVO> searchVOs = new ArrayList<DealerSearchVO>();
		for (DealerSearch search : users) {
		DealerSearchVO dealVO= domainModelUtil.toDealerSearchVO(search);
		searchVOs.add(dealVO);
		}
		userAdminSearchVO12.setDealerSearchVO(searchVOs);
	
		return userAdminSearchVO12;
	}
}
