package au.com.pnspvtltd.mcd.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.service.InventoryService;
import au.com.pnspvtltd.mcd.web.model.InventoryStatisticsVO;

@RestController
public class InventoryController {

	private static final Logger LOGGER = LoggerFactory.getLogger(InventoryController.class);
	@Autowired
	InventoryService inventoryService;

	@GetMapping(value = "inventory/getStatisticsFor", produces = { MediaType.APPLICATION_JSON_VALUE })
	public InventoryStatisticsVO getStatisticsFor(@RequestParam("modelYear") String modelYear,
			@RequestParam("modelDisplay") String modelDisplay, @RequestParam("modelName") String modelName,
			@RequestParam("autoscoopTrim") String autoscoopTrim) {

		return inventoryService.getStatisticsFor(modelYear, modelDisplay, modelName, autoscoopTrim);

	}

}
