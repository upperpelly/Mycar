package au.com.pnspvtltd.mcd.web.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.service.UserEBidService;
import au.com.pnspvtltd.mcd.web.model.UserEBidFinanceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;
import au.com.pnspvtltd.mcd.repository.UserRepository;

@RestController

public class UserEBidController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserEBidController.class);

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	UserEBidService userEBidService;

	@PostMapping("eBid/car")
	public String eBidForCar(@RequestBody UserEBidVO userEBidVO) {
		return userEBidService.whenUserEBidForCar(userEBidVO);
	}
	
	@PostMapping("eBid/insurance")
	public String eBidForInsurance(@RequestBody UserEBidInsuranceVO userEBidVO) {
		return userEBidService.whenUserEBidForInsurance(userEBidVO);
	}
	@PostMapping("eBid/finance")
	public String eBidForFinance(@RequestBody UserEBidFinanceVO userEBidVO) {
		return userEBidService.whenUserEBidForFinance(userEBidVO);
	}
	@PostMapping("eBid/myVehicle")
	public String addMyVehicle(@RequestBody UserMyVehicleVO userEBidVO) {
		return userEBidService.createMyVehicle(userEBidVO);
	}
	
	@PutMapping("eBid/updatePhoto")
	@Transactional
	public UserMyVehicleVO updatePhoto(@RequestBody UserMyVehicleVO userMyVehicleVO,
			HttpServletResponse response) {
		LOGGER.debug("Received request to update photo {}", userMyVehicleVO.getUserId());
	    //TODO: create a service for VehicleQutotation to update quotation details
		if(userMyVehicleVO != null){
			User user = userRepository.findOne(userMyVehicleVO.getUserId());
			user.setSubOrb(userMyVehicleVO.getPhoto());
			//vehicleQuotation.setMoveToUser(vehicleQuotationVO.isMoveToUser());
		}
		return userMyVehicleVO;
	}
}
