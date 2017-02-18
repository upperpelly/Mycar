package au.com.pnspvtltd.mcd.service;

import au.com.pnspvtltd.mcd.web.model.UserEBidFinanceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;

public interface UserEBidService {

	String whenUserEBidForCar(UserEBidVO userEBidVO);
	String whenUserEBidForInsurance(UserEBidInsuranceVO userEBidVO);
	String createMyVehicle(UserMyVehicleVO userEBidVO);
	String whenUserEBidForFinance(UserEBidFinanceVO userEBidVO);
}
