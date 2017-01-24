package au.com.pnspvtltd.mcd.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "inventorydealer")
public class Dealer implements Serializable {

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
	List<Inventory> inventory;

	public @Column(name = "ISADMIN") boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DEALERID")
	public Long getDealerId() {
		return this.dealerId;
	}

	public void setDealerId(Long carId) {
		this.dealerId = carId;
	}

	@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.ALL })
	@JoinColumn(name = "dealerId")
	public List<Inventory> getInventory() {
		return inventory;
	}

	public void setInventory(List<Inventory> inventory) {
		this.inventory = inventory;
	}

	@Column(name = "ISDEALER")
	public boolean isDealer() {
		return isDealer;
	}

	public void setDealer(boolean isDealer) {
		this.isDealer = isDealer;
	}

	@Column(name = "ISINSURER")
	public boolean isInsurer() {
		return isInsurer;
	}

	public void setInsurer(boolean isInsurer) {
		this.isInsurer = isInsurer;
	}

	@Column(name = "ISFINANCER")
	public boolean isFinancer() {
		return isFinancer;
	}

	public void setFinancer(boolean isFinancer) {
		this.isFinancer = isFinancer;
	}

	@Column(name = "ABNNUMBER")
	public String getABNNumber() {
		return ABNNumber;
	}

	public void setABNNumber(String aBNNumber) {
		ABNNumber = aBNNumber;
	}

	@Column(name = "DEALERNAME")
	public String getDealername() {
		return dealername;
	}

	public void setDealername(String dealername) {
		this.dealername = dealername;
	}

	@Column(name = "ACNNUMBER")
	public String getACNNumber() {
		return ACNNumber;
	}

	public void setACNNumber(String aCNNumber) {
		ACNNumber = aCNNumber;
	}

	@Column(name = "WEBSITE")
	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	@Column(name = "DELMOBILE")
	public int getDelmobile() {
		return delmobile;
	}

	public void setDelmobile(int delmobile) {
		this.delmobile = delmobile;
	}

	@Column(name = "LANDLINE1")
	public int getLandLine1() {
		return landLine1;
	}

	public void setLandLine1(int landLine1) {
		this.landLine1 = landLine1;
	}

	@Column(name = "LANDLINE2")
	public int getLandLine2() {
		return landLine2;
	}

	public void setLandLine2(int landLine2) {
		this.landLine2 = landLine2;
	}

	@Column(name = "STREETNUMBER")
	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	@Column(name = "STREETNAME")
	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	@Column(name = "AREANAME")
	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	@Column(name = "SUBORB")
	public String getSuborb() {
		return suborb;
	}

	public void setSuborb(String suborb) {
		this.suborb = suborb;
	}

	@Column(name = "STATE")
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Column(name = "POSTCODE")
	public int getPostcode() {
		return postcode;
	}

	public void setPostcode(int postcode) {
		this.postcode = postcode;
	}

}
