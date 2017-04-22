package au.com.pnspvtltd.mcd.web.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import au.com.pnspvtltd.mcd.domain.MyVehicle;
import au.com.pnspvtltd.mcd.domain.UserNotification;

public class UserVO {

	private Long userId;
	private String password;
	private String abnNumber;
	private String firstName;
	private String lastName;
	private String email;
	private int mobile;
	private int landLine;
	private String streetNumber;
	private String streetName;
	private String areaName;
	private String subOrb;
	private String state;
	private int postCode;
	private String drivingLicense;
	private String issueState;
	private boolean facebook;
	private boolean payDeposit;
	List<SearchVO> search;
	List<SearchInsuranceVO> searchInsurance;
	List<SearchFinanceVO> searchFinance;
	List<SearchServMaintVO> searchServMaint;
	List<SearchTranspVO> searchTransp;
	List<MyVehicleVO> myVehicle;
	List<VehicleQuotationVO> vehicleQuotation;
	List<InsuranceQuotationVO> insuranceQuotation;
	List<FinanceQuotationVO> financeQuotation;
	List<UserNotificationVO> userNotification;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<UserNotificationVO> getUserNotification() {
		return userNotification;
	}

	public void setUserNotification(List<UserNotificationVO> userNotification) {
		this.userNotification = userNotification;
	}


	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public List<MyVehicleVO> getMyVehicle() {
		return myVehicle;
	}

	public void setMyVehicle(List<MyVehicleVO> myVehicle) {
		this.myVehicle = myVehicle;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAbnNumber() {
		return abnNumber;
	}

	public void setAbnNumber(String abnNumber) {
		this.abnNumber = abnNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	public int getLandLine() {
		return landLine;
	}

	public void setLandLine(int landLine) {
		this.landLine = landLine;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public String getSubOrb() {
		return subOrb;
	}

	public void setSubOrb(String subOrb) {
		this.subOrb = subOrb;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPostCode() {
		return postCode;
	}

	public void setPostCode(int postCode) {
		this.postCode = postCode;
	}

	public String getDrivingLicense() {
		return drivingLicense;
	}

	public void setDrivingLicense(String drivingLicense) {
		this.drivingLicense = drivingLicense;
	}

	public String getIssueState() {
		return issueState;
	}

	public void setIssueState(String issueState) {
		this.issueState = issueState;
	}

	public boolean isFacebook() {
		return facebook;
	}

	public void setFacebook(boolean facebook) {
		this.facebook = facebook;
	}

	public boolean isPayDeposit() {
		return payDeposit;
	}

	public void setPayDeposit(boolean payDeposit) {
		this.payDeposit = payDeposit;
	}

	public List<SearchVO> getSearch() {
		return search;
	}

	public void setSearch(List<SearchVO> search) {
		this.search = search;
	}

	public List<SearchInsuranceVO> getSearchInsurance() {
		return searchInsurance;
	}

	public void setSearchInsurance(List<SearchInsuranceVO> searchInsurance) {
		this.searchInsurance = searchInsurance;
	}

	public List<SearchFinanceVO> getSearchFinance() {
		return searchFinance;
	}

	public void setSearchFinance(List<SearchFinanceVO> searchFinance) {
		this.searchFinance = searchFinance;
	}

	public List<SearchServMaintVO> getSearchServMaint() {
		return searchServMaint;
	}

	public void setSearchServMaint(List<SearchServMaintVO> searchServMaint) {
		this.searchServMaint = searchServMaint;
	}

	public List<SearchTranspVO> getSearchTransp() {
		return searchTransp;
	}

	public void setSearchTransp(List<SearchTranspVO> searchTransp) {
		this.searchTransp = searchTransp;
	}

	public List<VehicleQuotationVO> getVehicleQuotation() {
		return vehicleQuotation;
	}

	public void setVehicleQuotation(List<VehicleQuotationVO> vehicleQuotation) {
		this.vehicleQuotation = vehicleQuotation;
	}

	public List<InsuranceQuotationVO> getInsuranceQuotation() {
		return insuranceQuotation;
	}

	public void setInsuranceQuotation(List<InsuranceQuotationVO> insuranceQuotation) {
		this.insuranceQuotation = insuranceQuotation;
	}

	public List<FinanceQuotationVO> getFinanceQuotation() {
		return financeQuotation;
	}

	public void setFinanceQuotation(List<FinanceQuotationVO> financeQuotation) {
		this.financeQuotation = financeQuotation;
	}

}
