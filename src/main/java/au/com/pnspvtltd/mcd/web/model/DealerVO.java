package au.com.pnspvtltd.mcd.web.model;

import java.util.List;

public class DealerVO {

	private Long dealerId;
	private String password;
	private String email;
	private boolean isAdmin;
	private boolean isDealer;
	private boolean isInsurer;
	private boolean isFinancer;
	private String ABNNumber;
	private String dealername;
	private String ACNNumber;
	private String website;
	private int delmobile;
	private int landLine1;
	private int landLine2;
	private String streetNumber;
	private String streetName;
	private String areaName;
	private String suborb;
	private String state;
	private int postcode;

	List<InventoryVO> inventory;

	public Long getDealerId() {
		return dealerId;
	}

	public void setDealerId(Long dealerId) {
		this.dealerId = dealerId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public boolean isDealer() {
		return isDealer;
	}

	public void setDealer(boolean isDealer) {
		this.isDealer = isDealer;
	}

	public boolean isInsurer() {
		return isInsurer;
	}

	public void setInsurer(boolean isInsurer) {
		this.isInsurer = isInsurer;
	}

	public boolean isFinancer() {
		return isFinancer;
	}

	public void setFinancer(boolean isFinancer) {
		this.isFinancer = isFinancer;
	}

	public String getABNNumber() {
		return ABNNumber;
	}

	public void setABNNumber(String aBNNumber) {
		ABNNumber = aBNNumber;
	}

	public String getDealername() {
		return dealername;
	}

	public void setDealername(String dealername) {
		this.dealername = dealername;
	}

	public String getACNNumber() {
		return ACNNumber;
	}

	public void setACNNumber(String aCNNumber) {
		ACNNumber = aCNNumber;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public int getDelmobile() {
		return delmobile;
	}

	public void setDelmobile(int delmobile) {
		this.delmobile = delmobile;
	}

	public int getLandLine1() {
		return landLine1;
	}

	public void setLandLine1(int landLine1) {
		this.landLine1 = landLine1;
	}

	public int getLandLine2() {
		return landLine2;
	}

	public void setLandLine2(int landLine2) {
		this.landLine2 = landLine2;
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

	public String getSuborb() {
		return suborb;
	}

	public void setSuborb(String suborb) {
		this.suborb = suborb;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPostcode() {
		return postcode;
	}

	public void setPostcode(int postcode) {
		this.postcode = postcode;
	}

	public List<InventoryVO> getInventory() {
		return inventory;
	}

	public void setInventory(List<InventoryVO> inventory) {
		this.inventory = inventory;
	}

}
