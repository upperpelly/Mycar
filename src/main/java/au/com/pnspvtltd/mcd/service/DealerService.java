package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.DealerSearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

public interface DealerService {

	DealerVO findById(Long id);

	DealerVO createDealer(DealerVO dealer);

	DealerVO updateDealer(DealerVO dealer);

	List<DealerVO> findAllDealers();

	DealerVO findDealerByEmail(String email);
	
	String addInventory(InventoryVO inventoryVO);
	
	List<InventoryVO> getInventory(Long dealerId);
	
	List<DealerSearchVO> getDealerSearch(Long dealerId);
	
	List<DealerSearchInsuranceVO> getDealerSearchInsurance(Long dealerId);
	
	List<DealerSearchFinanceVO> getDealerSearchFinance(Long dealerId);
	
	List<VehicleQuotationVO> getDealerVehicleQuotation(Long dealerId);
	
	List<InsuranceQuotationVO> getDealerInsuranceQuotation(Long dealerId);
	
	List<FinanceQuotationVO> getDealerFinanceQuotation(Long dealerId);
}
