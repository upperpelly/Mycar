package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.InventoryStatisticsVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;

public interface InventoryService {
	List<InventoryVO> getMinifiedInventoryFor(String modelYear, String modelDisplay, String modelName, String modelTrim);
	List<InventoryVO> getPriceAndVendorStockInventoryFor(String modelYear, String modelDisplay, String modelName);
	InventoryStatisticsVO getStatisticsFor(String modelYear, String modelDisplay, String modelName, String autoscoopTrim);
}
