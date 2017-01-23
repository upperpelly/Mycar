package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;

public interface DealerService {

	DealerVO findById(Long id);

	DealerVO createDealer(DealerVO dealer);

	DealerVO updateDealer(DealerVO dealer);

	List<DealerVO> findAllDealers();

	DealerVO findDealerByEmail(String email);
	
	String addInventory(InventoryVO inventoryVO);
}
