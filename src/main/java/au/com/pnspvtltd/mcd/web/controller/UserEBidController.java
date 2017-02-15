package au.com.pnspvtltd.mcd.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.service.UserEBidService;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;

@RestController

public class UserEBidController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserEBidController.class);

	@Autowired
	UserEBidService userEBidService;

	@PostMapping("eBid/car")
	public String eBidForCar(@RequestBody UserEBidVO userEBidVO) {
		return userEBidService.whenUserEBidForCar(userEBidVO);
	}
	@PostMapping("eBid/myVehicle")
	public String addMyVehicle(@RequestBody UserMyVehicleVO userEBidVO) {
		return userEBidService.createMyVehicle(userEBidVO);
	}
}
