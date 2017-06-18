package au.com.pnspvtltd.mcd.web.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.web.model.DealerSearchAdminVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

@RestController
public class VehicleQuotationController {

	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleQuotationController.class);

	@Autowired
	VehicleQuotationRepository vehicleQuotationRepository;
	
	@PutMapping("vehicleQuotation")
	@Transactional
	public VehicleQuotationVO updateVehicleQuotation(@RequestBody VehicleQuotationVO vehicleQuotationVO,
			HttpServletResponse response) {
		LOGGER.debug("Received request to update VehicleQuotation {}", vehicleQuotationVO.getQuotId());
	    //TODO: create a service for VehicleQutotation to update quotation details
		if(vehicleQuotationVO != null){
			VehicleQuotation vehicleQuotation = vehicleQuotationRepository.findOne(vehicleQuotationVO.getQuotId());
			vehicleQuotation.setMoveToUser(vehicleQuotationVO.isMoveToUser());
		}
		return vehicleQuotationVO;
	}
	
	@PutMapping("dealerQuotCreation")
	public VehicleQuotation dealerQuotCreation(@RequestBody VehicleQuotationVO dealerVO, HttpServletResponse response) {
		LOGGER.debug("Received request to update Dealer {}", dealerVO);
		
		VehicleQuotation vehicleQuotation = new VehicleQuotation();
		vehicleQuotation.setDealerId(vehicleQuotation.getDealerId());
		vehicleQuotation.setUserId(vehicleQuotation.getUserId());
		vehicleQuotation.setDealSearchId(vehicleQuotation.getDealSearchId());
		vehicleQuotation.setCarSearchId(vehicleQuotation.getCarSearchId());
		vehicleQuotation.setRefId(vehicleQuotation.getRefId());
		vehicleQuotation.setAutoBid(vehicleQuotation.isAutoBid());
		vehicleQuotation.setDealerStockNo(vehicleQuotation.getDealerStockNo());
		vehicleQuotation.setDriveAwayPrice(vehicleQuotation.getDriveAwayPrice());
		vehicleQuotation.setModelYear(vehicleQuotation.getModelYear());
		vehicleQuotation.setModelDisplay(vehicleQuotation.getModelDisplay());
		vehicleQuotation.setModelName(vehicleQuotation.getModelName());
		vehicleQuotation.setModelTrim(vehicleQuotation.getModelTrim());
		vehicleQuotationRepository.save(vehicleQuotation);
		vehicleQuotationRepository.flush();
		return vehicleQuotation;
	}
}
