package au.com.pnspvtltd.mcd.web.controller;

import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.VehQuotExtras;
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
		LOGGER.debug("Received request to create Quotati for Ext Dealer {}", dealerVO);
		
		VehicleQuotation vehicleQuotation = new VehicleQuotation();
		vehicleQuotation.setRegoEndDate(dealerVO.getRegoEndDate());// set Offer Valid Date
		vehicleQuotation.setDriveAwayPrice(dealerVO.getDriveAwayPrice()); // set Drive Away Price
		vehicleQuotation.setOfferPrice2(dealerVO.getOfferPrice2());// set Save Price
		vehicleQuotation.setOfferPrice3(dealerVO.getOfferPrice3());// Actual value of Offer
		// Offer Details select Template Id from Car Templates via list
		vehicleQuotation.setModelYear(vehicleQuotation.getModelYear());
		vehicleQuotation.setModelDisplay(vehicleQuotation.getModelDisplay());
		vehicleQuotation.setModelName(vehicleQuotation.getModelName());
		vehicleQuotation.setModelTrim(vehicleQuotation.getModelTrim());
		
		// Addition of extras
		vehicleQuotation.setVehQuotExtras(vehicleQuotation.getVehQuotExtras());
		vehicleQuotation.setFname(vehicleQuotation.getFname()); // Terms and conditions
		
		vehicleQuotation.setDealerId(vehicleQuotation.getDealerId()); // Dealer Lead Id
		vehicleQuotation.setUserId(vehicleQuotation.getUserId());
		vehicleQuotation.setUserCreationDate(vehicleQuotation.getUserCreationDate());
		Calendar calendar = Calendar.getInstance();
	    java.sql.Date ourJavaDateObject = new java.sql.Date(calendar.getTime().getTime());
		vehicleQuotation.setCreationDate(ourJavaDateObject);
		vehicleQuotation.setStatus(true);
		vehicleQuotation.setDealSearchId(vehicleQuotation.getDealSearchId());
		vehicleQuotation.setCarSearchId(vehicleQuotation.getCarSearchId()); // user Ebid Id
		
		//vehicleQuotation.setRefId(vehicleQuotation.getRefId());
		vehicleQuotation.setAutoBid(vehicleQuotation.isAutoBid());
		
		//vehicleQuotation.setDealerStockNo(vehicleQuotation.getDealerStockNo());
		
		// Ebid Request
		vehicleQuotation.setNewer(vehicleQuotation.isNewer());
		vehicleQuotation.setUsed(vehicleQuotation.isUsed());
		vehicleQuotation.setPostCode(vehicleQuotation.getPostCode());
		vehicleQuotation.setColor(vehicleQuotation.getColor());// color 1
		vehicleQuotation.setTransmission(vehicleQuotation.getTransmission()); // color2
		vehicleQuotation.setDriveType(vehicleQuotation.getDriveType());// more about more requirement
		
		vehicleQuotationRepository.save(vehicleQuotation);
		vehicleQuotationRepository.flush();
		return vehicleQuotation;
	}
}
