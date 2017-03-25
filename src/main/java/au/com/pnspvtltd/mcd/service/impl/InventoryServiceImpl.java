package au.com.pnspvtltd.mcd.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.TempCarModelTemplateRepository;
import au.com.pnspvtltd.mcd.service.InventoryService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.InventoryStatisticsVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.TempCarModelHeaderVO;

@Service
public class InventoryServiceImpl implements InventoryService{

	private static final Logger LOGGER = LoggerFactory.getLogger(InventoryServiceImpl.class);
	
	@Autowired
	private InventoryRepository inventoryRepository;
	
	@Autowired
	private TempCarModelTemplateServiceImpl tempCarModelTemplateServiceImpl; 

	//@Autowired
	//private TempCarModelTemplateRepository tempCarModelTemplateRepository;
	
	@Autowired
	private DomainModelUtil domainModelUtil;
	
	@Override
	public List<InventoryVO> getMinifiedInventoryFor(String modelYear, String modelDisplay, String modelName, String modelTrim) {
		
		List<InventoryVO> inventoryVOs = new ArrayList<>();
		for(Inventory inventory : inventoryRepository.getInventoryFor(modelYear, modelDisplay, modelName, modelTrim)){
			inventoryVOs.add(domainModelUtil.fromInventory(inventory, true));
		}
		return inventoryVOs;
	}

	@Override
	public List<InventoryVO> getPriceAndVendorStockInventoryFor(String modelYear, String modelDisplay, String modelName,
			String modelTrim) {
		return inventoryRepository.getPriceAndVendorStockInventoryFor(modelYear, modelDisplay, modelName, modelTrim);
	}

	@Override
	public InventoryStatisticsVO getStatisticsFor(String modelYear, String modelDisplay, String modelName,
			String modelTrim, String autoscoopTrim) {
		
		InventoryStatisticsVO inventoryStatisticsVO = new InventoryStatisticsVO();
		List<InventoryVO> inventoryVOsSortedByPrice = getPriceAndVendorStockInventoryFor(modelYear, modelDisplay, modelName, modelTrim.trim());
		// retrieve from tempcarModelHeader
		TempCarModelHeaderVO tempCarHeaderVO = tempCarModelTemplateServiceImpl.getCarModelTemplateForAutoTrim(autoscoopTrim);
		
		inventoryStatisticsVO.setTempCarModelHeaderVO(tempCarHeaderVO);
		int vendorStockCount = 0;
		
		for(InventoryVO inventoryVO : inventoryVOsSortedByPrice){
			vendorStockCount += inventoryVO.getVendorStockNo(); 
		}
		
		if(inventoryVOsSortedByPrice.size() > 0){
			inventoryStatisticsVO.setPriceMin(inventoryVOsSortedByPrice.get(0).getPrice());
			inventoryStatisticsVO.setPriceMax(inventoryVOsSortedByPrice.get(inventoryVOsSortedByPrice.size() - 1).getPrice());
			inventoryStatisticsVO.setNoStock(vendorStockCount);
			inventoryStatisticsVO.setNoDealers(inventoryVOsSortedByPrice.size());
		}
		
		
				
		return inventoryStatisticsVO;
	}
	
	

	
}
