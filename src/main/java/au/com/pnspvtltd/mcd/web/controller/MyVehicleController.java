package au.com.pnspvtltd.mcd.web.controller;

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
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.MyVehicleLogBook;
import au.com.pnspvtltd.mcd.service.DealerService;
import au.com.pnspvtltd.mcd.service.MyVehicleService;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleLogBookStoreVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleLogBookVO;
import au.com.pnspvtltd.mcd.web.model.UserVO;

@RestController
public class MyVehicleController {

	private static final Logger LOGGER = LoggerFactory.getLogger(MyVehicleController.class);
	
	@Autowired
	MyVehicleService myVehicleService;
	
	
	
	
	
	@PostMapping("myvehicle/addMyVehicleLogBook")
	public String addMyVehicleLogBook(@RequestBody MyVehicleLogBookStoreVO inventoryVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add myvehicle log book by the myvehicle with Id {}"+inventoryVO.getMyVehicleId());
		response.setStatus(HttpStatus.CREATED.value());
		return myVehicleService.addMyVehicleLogBook(inventoryVO);
	}

	@PostMapping("myvehicle/addMyVehicleFuelExpenses")
	public String addMyVehicleFuelExpenses(@RequestBody MyVehicleLogBookStoreVO inventoryVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add myvehicle fuel Expenses by the myvehicle with Id {}"+inventoryVO.getMyVehicleId());
		response.setStatus(HttpStatus.CREATED.value());
		return myVehicleService.addMyVehicleFuelExpenses(inventoryVO);
	}

	
	@PostMapping("myvehicle/addMyVehicleServMaint")
	public String addMyVehicleServMaint(@RequestBody MyVehicleLogBookStoreVO inventoryVO, HttpServletResponse response) {
		LOGGER.debug("Received request to add myvehicle serv maint by the myvehicle with Id {}"+inventoryVO.getMyVehicleId());
		response.setStatus(HttpStatus.CREATED.value());
		return myVehicleService.addMyVehicleServMaint(inventoryVO);
	}
	
}
