package au.com.pnspvtltd.mcd.web.model;

import java.util.List;

import au.com.pnspvtltd.mcd.domain.Search;

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

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

}
