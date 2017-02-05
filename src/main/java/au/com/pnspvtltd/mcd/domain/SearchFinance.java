package au.com.pnspvtltd.mcd.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "searchfinance")
public class SearchFinance implements Serializable {

	
	private boolean isNew;
	private Long searchFinanceId;
	private String postCode;
	
	private int year;
	
	private String make;
	private String model;
	private String variant;
	private double vehValue;
	private double balloonPay;
	private double loanAmount;
	private int loanPeriod;
	private double annualIncome;
	private String incomeType;
	private String creditRating;
	private Date dateOfBirth;
	
	private int yearEmploymentBusiness;
	private String incomeBeforeSuperTax;
	private String incomeAfterSuperTax;
	private String ifBusinessProvideABN;
	
	
	public int getYearEmploymentBusiness() {
		return yearEmploymentBusiness;
	}

	public void setYearEmploymentBusiness(int yearEmploymentBusiness) {
		this.yearEmploymentBusiness = yearEmploymentBusiness;
	}

	public String getIncomeBeforeSuperTax() {
		return incomeBeforeSuperTax;
	}

	public void setIncomeBeforeSuperTax(String incomeBeforeSuperTax) {
		this.incomeBeforeSuperTax = incomeBeforeSuperTax;
	}

	public String getIncomeAfterSuperTax() {
		return incomeAfterSuperTax;
	}

	public void setIncomeAfterSuperTax(String incomeAfterSuperTax) {
		this.incomeAfterSuperTax = incomeAfterSuperTax;
	}

	public String getIfBusinessProvideABN() {
		return ifBusinessProvideABN;
	}

	public void setIfBusinessProvideABN(String ifBusinessProvideABN) {
		this.ifBusinessProvideABN = ifBusinessProvideABN;
	}

	@Column(name = "ISNEW")
	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}
	@Column(name = "DATEOFBIRTH")
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
	@Column(name = "POSTCODE")
	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	
	@Column(name = "YEAR")
	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	@Column(name = "MAKE")
	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}
	@Column(name = "MODEL")
	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
	@Column(name = "VARIANT")
	public String getVariant() {
		return variant;
	}

	public void setVariant(String variant) {
		this.variant = variant;
	}
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SEARCHFINANCEID")
	public Long getSearchFinanceId() {
		return searchFinanceId;
	}

	public void setSearchFinanceId(Long searchInsuranceId) {
		this.searchFinanceId = searchInsuranceId;
	}
	@Column(name = "VEHVALUE")
	public double getVehValue() {
		return vehValue;
	}

	public void setVehValue(double vehValue) {
		this.vehValue = vehValue;
	}
	@Column(name = "BALLOONPAY")
	public double getBalloonPay() {
		return balloonPay;
	}

	public void setBalloonPay(double balloonPay) {
		this.balloonPay = balloonPay;
	}
	@Column(name = "LOANAMOUNT")
	public double getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}
	@Column(name = "LOANPERIOD")
	public int getLoanPeriod() {
		return loanPeriod;
	}

	public void setLoanPeriod(int loanPeriod) {
		this.loanPeriod = loanPeriod;
	}
	@Column(name = "ANNUALINCOME")
	public double getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(double annualIncome) {
		this.annualIncome = annualIncome;
	}
	@Column(name = "INCOMETYPE")
	public String getIncomeType() {
		return incomeType;
	}

	public void setIncomeType(String incomeType) {
		this.incomeType = incomeType;
	}
	@Column(name = "CREDITRATING")
	public String getCreditRating() {
		return creditRating;
	}

	public void setCreditRating(String creditRating) {
		this.creditRating = creditRating;
	}
	


}
