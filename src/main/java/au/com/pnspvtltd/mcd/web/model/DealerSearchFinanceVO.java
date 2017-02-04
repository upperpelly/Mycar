package au.com.pnspvtltd.mcd.web.model;

import java.sql.Date;

public class DealerSearchFinanceVO {

	private boolean isNew;
	private Long dealerSearchFinanceId;
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
	private Long userId;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getVariant() {
		return variant;
	}

	public void setVariant(String variant) {
		this.variant = variant;
	}

	public Long getDealerSearchFinanceId() {
		return dealerSearchFinanceId;
	}

	public void setDealerSearchFinanceId(Long dealerSearchFinanceId) {
		this.dealerSearchFinanceId = dealerSearchFinanceId;
	}

	public double getVehValue() {
		return vehValue;
	}

	public void setVehValue(double vehValue) {
		this.vehValue = vehValue;
	}

	public double getBalloonPay() {
		return balloonPay;
	}

	public void setBalloonPay(double balloonPay) {
		this.balloonPay = balloonPay;
	}

	public double getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(double loanAmount) {
		this.loanAmount = loanAmount;
	}

	public int getLoanPeriod() {
		return loanPeriod;
	}

	public void setLoanPeriod(int loanPeriod) {
		this.loanPeriod = loanPeriod;
	}

	public double getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(double annualIncome) {
		this.annualIncome = annualIncome;
	}

	public String getIncomeType() {
		return incomeType;
	}

	public void setIncomeType(String incomeType) {
		this.incomeType = incomeType;
	}

	public String getCreditRating() {
		return creditRating;
	}

	public void setCreditRating(String creditRating) {
		this.creditRating = creditRating;
	}

}
