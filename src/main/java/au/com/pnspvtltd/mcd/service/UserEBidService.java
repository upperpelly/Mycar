package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.domain.ReferencedPoints;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.UserReferPoints;
import au.com.pnspvtltd.mcd.web.model.BlogPointsVO;
import au.com.pnspvtltd.mcd.web.model.CurrentOffersVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.LoyalityProgAdminVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleVO;
import au.com.pnspvtltd.mcd.web.model.ReferencedPointsVO;
import au.com.pnspvtltd.mcd.web.model.ReviewPointsVO;
import au.com.pnspvtltd.mcd.web.model.SearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.SearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.SearchServMaintVO;
import au.com.pnspvtltd.mcd.web.model.SearchTranspVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.ServiceMaintQuotationVO;
import au.com.pnspvtltd.mcd.web.model.TranspServiceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidFinanceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidServMaintVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidTransServVO;
import au.com.pnspvtltd.mcd.web.model.UserEBidVO;
import au.com.pnspvtltd.mcd.web.model.UserMyVehicleVO;
import au.com.pnspvtltd.mcd.web.model.UserNotificationVO;
import au.com.pnspvtltd.mcd.web.model.UserReferPointsVO;
import au.com.pnspvtltd.mcd.web.model.ValTransPointsVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

public interface UserEBidService {

	UserReferPoints whenUserReferUserId(UserReferPointsVO userid);
	ReferencedPoints whenReferedUserId(ReferencedPointsVO userid);
	String whenUserEBidForCar(UserEBidVO userEBidVO);
	String whenUserEBidForInsurance(UserEBidInsuranceVO userEBidVO);
	String createMyVehicle(UserMyVehicleVO userEBidVO);
	String whenUserEBidForFinance(UserEBidFinanceVO userEBidVO);
	String whenUserEBidForServMaint(UserEBidServMaintVO userEBidVO);
	String whenUserEBidForTransServ(UserEBidTransServVO userEBidVO);
	List<SearchVO> getSearchByUserId(Long userid);
	List<InventoryVO> getSellMyVehByUserId(Long userid);
	List<UserReferPointsVO> getReferUserId(Long userid);
	List<ReferencedPointsVO> getReferencedUserId(Long userid);
	List<BlogPointsVO> getBlogUserId(Long userid);
	List<ReviewPointsVO> getReviewUserId(Long userid);
	List<ValTransPointsVO> getValTransUserId(Long userid);
	List<LoyalityProgAdminVO> getLoayalityProgram();
	List<SearchFinanceVO> getFinanceByUserId(Long userid);
	List<SearchInsuranceVO> getInsuranceByUserId(Long userid);
	List<SearchServMaintVO> getServMaintByUserId(Long userid);
	List<SearchTranspVO> getTranspByUserId(Long userid);
	List<UserNotificationVO> getUserNotiByUserId(Long userid);
	List<CurrentOffersVO> getCurrentOffers();
	List<VehicleQuotationVO> getUserQuotByUserId(Long userid);
	List<InsuranceQuotationVO> getInsQuotByUserId(Long userid);
	List<FinanceQuotationVO> getFinQuotByUserId(Long userid);
	List<ServiceMaintQuotationVO> getServMQuotByUserId(Long userid);
	List<TranspServiceQuotationVO> getTranspQuotByUserId(Long userid);
	List<MyVehicleVO> getMyVehicleByUserId(Long userid);
}
