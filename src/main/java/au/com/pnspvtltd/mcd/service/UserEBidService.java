package au.com.pnspvtltd.mcd.service;

import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;

public interface UserEBidService {

	String whenUserEBidForCar(UserEBidVO userEBidVO);
	String createMyVehicle(UserMyVehicleVO userEBidVO);
}
