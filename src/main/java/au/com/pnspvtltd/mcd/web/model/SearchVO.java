package au.com.pnspvtltd.mcd.web.model;

import javax.persistence.Column;

public class SearchVO {

	/* Mapping 
	 * "carColor" : $("carColor").val(),
																			 "postCode":$('#postCode').val(),
																			"make":$('#seats').val(),
																			"bodyType":$('#driveType').val(),
																			"state":$('#fuelType').val(),
																			"region":$('#freetext').val(),
																			"ausCapTer":$('#vehiclePurpose').val(),
																			"region":$('#transmission').val(),
																			"sMake":$('#extraExternal1').val(),
	 * */
	
	private Long carSearchId;
	private String modelYear;
	private String modelDisplay;
	private String modelName;
	private String modelTrim;
	private boolean finance;
	private boolean insurance;
	private boolean dealer;
	private String make;
	private String bodyType;
	private String carColor;
	private String state;
	private String region;
	private int postCode;
	private double finAmountMin;
	private double finAmountMax;
	private boolean support247;
	private boolean roadSideAssistance;
	private boolean guaranteeReplacement;
	private boolean hiringCar;
	private boolean comprehensiveCover;
	private boolean thirdPartyCover;
	private String ausCapTer;

	private String sMake;
	private String extraExter2;
	private String extraExter3;	
	private String extraExter4;	
	private String extraExter5;	
	private String extraIntern1;	
	private String extraIntern2;	
	private String extraIntern3;	
	private String extraIntern4;	
	private String extraIntern5;

	
	
	public Long getCarSearchId() {
		return this.carSearchId;
	}

	public void setCarSearchId(long carMakeId) {
		this.carSearchId = carMakeId;
	}

	public String getModelYear() {
		return modelYear;
	}

	public void setModelYear(String modelYear) {
		this.modelYear = modelYear;
	}

	public String getModelDisplay() {
		return modelDisplay;
	}

	public void setModelDisplay(String modelDisplay) {
		this.modelDisplay = modelDisplay;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getModelTrim() {
		return modelTrim;
	}

	public void setModelTrim(String modelTrim) {
		this.modelTrim = modelTrim;
	}

	public boolean isFinance() {
		return finance;
	}

	public void setFinance(boolean finance) {
		this.finance = finance;
	}

	public boolean isInsurance() {
		return insurance;
	}

	public void setInsurance(boolean insurance) {
		this.insurance = insurance;
	}

	public boolean isDealer() {
		return dealer;
	}

	public void setDealer(boolean dealer) {
		this.dealer = dealer;
	}

	public String getBodyType() {
		return bodyType;
	}

	public void setBodyType(String sBodyType) {
		this.bodyType = sBodyType;
	}

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String sCarColor) {
		this.carColor = sCarColor;
	}

	public String getState() {
		return state;
	}

	public void setState(String sState) {
		this.state = sState;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String sRegion) {
		this.region = sRegion;
	}

	public int getPostCode() {
		return postCode;
	}

	public void setPostCode(int sPostCode) {
		this.postCode = sPostCode;
	}

	public double getFinAmountMin() {
		return finAmountMin;
	}

	public void setFinAmountMin(double finAmountMin) {
		this.finAmountMin = finAmountMin;
	}

	public double getFinAmountMax() {
		return finAmountMax;
	}

	public void setFinAmountMax(double finAmountMax) {
		this.finAmountMax = finAmountMax;
	}

	public boolean isSupport247() {
		return support247;
	}

	public void setSupport247(boolean support247) {
		this.support247 = support247;
	}

	public boolean isRoadSideAssistance() {
		return roadSideAssistance;
	}

	public void setRoadSideAssistance(boolean raodSideAssitance) {
		this.roadSideAssistance = raodSideAssitance;
	}

	public boolean isGuaranteeReplacement() {
		return guaranteeReplacement;
	}

	public void setGuaranteeReplacement(boolean guaranteeReplacement) {
		this.guaranteeReplacement = guaranteeReplacement;
	}

	public boolean isHiringCar() {
		return hiringCar;
	}

	public void setHiringCar(boolean hiringCar) {
		this.hiringCar = hiringCar;
	}

	public boolean isComprehensiveCover() {
		return comprehensiveCover;
	}

	public void setComprehensiveCover(boolean comprehensiveCover) {
		this.comprehensiveCover = comprehensiveCover;
	}

	public boolean isThirdPartyCover() {
		return thirdPartyCover;
	}

	public void setThirdPartyCover(boolean thirdPartyCover) {
		this.thirdPartyCover = thirdPartyCover;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String sMake) {
		this.make = sMake;
	}

	public String getAusCapTer() {
		return ausCapTer;
	}

	public void setAusCapTer(String sAusCapTer) {
		this.ausCapTer = sAusCapTer;
	}

	public String getExtraExter2() {
		return extraExter2;
	}

	public void setExtraExter2(String extraExter2) {
		this.extraExter2 = extraExter2;
	}

	public String getExtraExter3() {
		return extraExter3;
	}

	public void setExtraExter3(String extraExter3) {
		this.extraExter3 = extraExter3;
	}

	public String getExtraExter4() {
		return extraExter4;
	}

	public void setExtraExter4(String extraExter4) {
		this.extraExter4 = extraExter4;
	}

	public String getExtraExter5() {
		return extraExter5;
	}

	public void setExtraExter5(String extraExter5) {
		this.extraExter5 = extraExter5;
	}

	public String getExtraIntern1() {
		return extraIntern1;
	}

	public void setExtraIntern1(String extraIntern1) {
		this.extraIntern1 = extraIntern1;
	}

	public String getExtraIntern2() {
		return extraIntern2;
	}

	public void setExtraIntern2(String extraIntern2) {
		this.extraIntern2 = extraIntern2;
	}

	public String getExtraIntern3() {
		return extraIntern3;
	}

	public void setExtraIntern3(String extraIntern3) {
		this.extraIntern3 = extraIntern3;
	}

	public String getExtraIntern4() {
		return extraIntern4;
	}

	public void setExtraIntern4(String extraIntern4) {
		this.extraIntern4 = extraIntern4;
	}

	public String getExtraIntern5() {
		return extraIntern5;
	}

	public void setExtraIntern5(String extraIntern5) {
		this.extraIntern5 = extraIntern5;
	}
	@Column(name = "SMAKE") public String getsMake() {
 		return sMake;
 	}
 	public void setsMake(String sMake) {
 		this.sMake = sMake;
 	}
}
