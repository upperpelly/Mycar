package au.com.pnspvtltd.mcd.web.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
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
}
