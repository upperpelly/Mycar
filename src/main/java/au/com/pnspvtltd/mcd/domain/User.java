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
@Table(name = "userrepo")
public class User implements Serializable {

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

	List<Search> search;
	List<SearchInsurance> searchInsurance;
	List<SearchFinance> searchFinance;
	List<SearchServMaint> searchServMaint;
	List<SearchTransp> searchTransp;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USERID")
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

	@Column(name = "ABNNUMBER")
	public String getAbnNumber() {
		return abnNumber;
	}

	public void setAbnNumber(String abnNumber) {
		this.abnNumber = abnNumber;
	}

	@Column(name = "FIRSTNAME")
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String fName) {
		this.firstName = fName;
	}

	@Column(name = "LASTNAME")
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lName) {
		this.lastName = lName;
	}

	@Column(name = "EMAIL")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "UMOBILE")
	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	@Column(name = "ULANDLINE")
	public int getLandLine() {
		return landLine;
	}

	public void setLandLine(int landLine) {
		this.landLine = landLine;
	}

	@Column(name = "USTREETNUMBER")
	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	@Column(name = "USTREETNAME")
	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	@Column(name = "UAREANAME")
	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	@Column(name = "USUBORB")
	public String getSubOrb() {
		return subOrb;
	}

	public void setSubOrb(String subOrb) {
		this.subOrb = subOrb;
	}

	@Column(name = "USTATE")
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Column(name = "UPOSTCODE")
	public int getPostCode() {
		return postCode;
	}

	public void setPostCode(int postCode) {
		this.postCode = postCode;
	}

	@Column(name = "DRIINGLICENSE")
	public String getDrivingLicense() {
		return drivingLicense;
	}

	public void setDrivingLicense(String drivingLicense) {
		this.drivingLicense = drivingLicense;
	}

	@Column(name = "ISSUESTATE")
	public String getIssueState() {
		return issueState;
	}

	public void setIssueState(String issueState) {
		this.issueState = issueState;
	}

	@Column(name = "ISFACEBOOK")
	public boolean isFacebook() {
		return facebook;
	}

	public void setFacebook(boolean facebook) {
		this.facebook = facebook;
	}

	@Column(name = "ISPAYDEPOSIT")
	public boolean isPayDeposit() {
		return payDeposit;
	}

	public void setPayDeposit(boolean payDeposit) {
		this.payDeposit = payDeposit;
	}

	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<Search> getSearch() {
		return search;
	}

	public void setSearch(List<Search> search) {
		this.search = search;
	}
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<SearchInsurance> getSearchInsurance() {
		return searchInsurance;
	}

	public void setSearchInsurance(List<SearchInsurance> search) {
		this.searchInsurance = search;
	}
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<SearchFinance> getSearchFinance() {
		return searchFinance;
	}

	public void setSearchFinance(List<SearchFinance> search) {
		this.searchFinance = search;
	}
	
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<SearchServMaint> getSearchServMaint() {
		return searchServMaint;
	}

	public void setSearchServMaint(List<SearchServMaint> search) {
		this.searchServMaint = search;
	}
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinColumn(name = "userId")
	public List<SearchTransp> getSearchTransp() {
		return searchTransp;
	}

	public void setSearchTransp(List<SearchTransp> search) {
		this.searchTransp = search;
	}


}
