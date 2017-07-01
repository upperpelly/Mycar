package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.web.model.SearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidFinanceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidServMaintVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidTransServVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;

public interface UserEBidService {

	String whenUserEBidForCar(UserEBidVO userEBidVO);
	String whenUserEBidForInsurance(UserEBidInsuranceVO userEBidVO);
	String createMyVehicle(UserMyVehicleVO userEBidVO);
	String whenUserEBidForFinance(UserEBidFinanceVO userEBidVO);
	String whenUserEBidForServMaint(UserEBidServMaintVO userEBidVO);
	String whenUserEBidForTransServ(UserEBidTransServVO userEBidVO);
	List<SearchVO> getSearchByUserId(Long userid);
	List<SearchFinanceVO> getFinanceByUserId(Long userid);
}
