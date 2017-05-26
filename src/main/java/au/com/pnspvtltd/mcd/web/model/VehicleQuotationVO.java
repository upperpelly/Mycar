package au.com.pnspvtltd.mcd.web.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import au.com.pnspvtltd.mcd.domain.DealerQuotationHistory;
import au.com.pnspvtltd.mcd.domain.UserQuotationHistory;

public class VehicleQuotationVO {

	// Unique Quotation id
	private Long quotId;
	// dealer id
	private Long dealerId;
	// user id
	private Long userId;
	// dealer search lead id
	private Long dealSearchId;
	// user search lead id
	private Long carSearchId;
	// inventory reference id
	private Long refId;
	private boolean autoBid;
	private boolean moveToUser;
	private String modelYear;
	private String modelDisplay;
	private String modelName;

	// Start of Quotation action
	private String postCode;
	private String title;
	private String fname;
	private String lname;
	private String address;
	private String mobileNum;
	private Date prefDate;
	private boolean makeOffer;
	private boolean makeDeposit;
	private boolean chat;
	private boolean rejectIt;
	private boolean shortList;
	
	List<UserQuotationHistoryVO> userQuotationHistoryVO;
	
	public List<UserQuotationHistoryVO> getUserQuotationHistoryVO() {
		return userQuotationHistoryVO;
	}


	public void setUserQuotationHistoryVO(
			List<UserQuotationHistoryVO> userQuotationHistoryVO) {
		this.userQuotationHistoryVO = userQuotationHistoryVO;
	}
	
List<DealerQuotationHistoryVO> dealerQuotationHistoryVO;
	
	
	public List<DealerQuotationHistoryVO> getDealerQuotationHistoryVO() {
		return dealerQuotationHistoryVO;
	}


	public void setDealerQuotationHistoryVO(
			List<DealerQuotationHistoryVO> dealerQuotationHistoryVO) {
		this.dealerQuotationHistoryVO = dealerQuotationHistoryVO;
	}
	// end of Quotation action
	
	
	public boolean isAutoBid() {
		return autoBid;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
	}

	public Date getPrefDate() {
		return prefDate;
	}

	public void setPrefDate(Date prefDate) {
		this.prefDate = prefDate;
	}

	public boolean isMakeOffer() {
		return makeOffer;
	}

	public void setMakeOffer(boolean makeOffer) {
		this.makeOffer = makeOffer;
	}

	public boolean isMakeDeposit() {
		return makeDeposit;
	}

	public void setMakeDeposit(boolean makeDeposit) {
		this.makeDeposit = makeDeposit;
	}

	public boolean isChat() {
		return chat;
	}

	public void setChat(boolean chat) {
		this.chat = chat;
	}

	public boolean isRejectIt() {
		return rejectIt;
	}

	public void setRejectIt(boolean rejectIt) {
		this.rejectIt = rejectIt;
	}

	public boolean isShortList() {
		return shortList;
	}

	public void setShortList(boolean shortList) {
		this.shortList = shortList;
	}

	public void setAutoBid(boolean autoBid) {
		this.autoBid = autoBid;
	}

	public boolean isMoveToUser() {
		return moveToUser;
	}

	public void setMoveToUser(boolean moveToUser) {
		this.moveToUser = moveToUser;
	}

	private String modelTrim;

	private String dealerName;
	private String dealerABN;
	private String quotHeaderFreeText;
	private boolean isNew;
	private String vinNumber;
	private String regoNo;
	private Date regoEndDate;
	private String regoStat;
	private int dealerStockNo;
	private int noOfKms;
	private double driveAwayPrice;
	private boolean negotiable;
	private Date offerValidDate;
	private boolean firstCumServe;
	private String color;
	private String transmission;
	private String driveType;
	private String fuelType;
	private int noOfSeats;
	private int noOfDoors;
	private boolean delPrefLocation;
	private String freeText;
	private double offerPrice2;
	private double offerPrice3;
	private String adhoc1;
	private String adhoc2;
	private String adhoc3;
	private String adhoc4;

	public Long getDealSearchId() {
		return dealSearchId;
	}

	public void setDealSearchId(Long dealSearchId) {
		this.dealSearchId = dealSearchId;
	}

	public Long getCarSearchId() {
		return carSearchId;
	}

	public void setCarSearchId(Long carSearchId) {
		this.carSearchId = carSearchId;
	}

	public Long getRefId() {
		return refId;
	}

	public void setRefId(Long refId) {
		this.refId = refId;
	}

	public String getDealerName() {
		return dealerName;
	}

	public void setDealerName(String dealerName) {
		this.dealerName = dealerName;
	}

	public String getDealerABN() {
		return dealerABN;
	}

	public void setDealerABN(String dealerABN) {
		this.dealerABN = dealerABN;
	}

	public String getQuotHeaderFreeText() {
		return quotHeaderFreeText;
	}

	public void setQuotHeaderFreeText(String quotHeaderFreeText) {
		this.quotHeaderFreeText = quotHeaderFreeText;
	}

	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}

	public String getVinNumber() {
		return vinNumber;
	}

	public void setVinNumber(String vinNumber) {
		this.vinNumber = vinNumber;
	}

	public String getRegoNo() {
		return regoNo;
	}

	public void setRegoNo(String regoNo) {
		this.regoNo = regoNo;
	}

	public Date getRegoEndDate() {
		return regoEndDate;
	}

	public void setRegoEndDate(Date regoEndDate) {
		this.regoEndDate = regoEndDate;
	}

	public String getRegoStat() {
		return regoStat;
	}

	public void setRegoStat(String regoStat) {
		this.regoStat = regoStat;
	}

	public int getDealerStockNo() {
		return dealerStockNo;
	}

	public void setDealerStockNo(int dealerStockNo) {
		this.dealerStockNo = dealerStockNo;
	}

	public int getNoOfKms() {
		return noOfKms;
	}

	public void setNoOfKms(int noOfKms) {
		this.noOfKms = noOfKms;
	}

	public double getDriveAwayPrice() {
		return driveAwayPrice;
	}

	public void setDriveAwayPrice(double driveAwayPrice) {
		this.driveAwayPrice = driveAwayPrice;
	}

	public boolean isNegotiable() {
		return negotiable;
	}

	public void setNegotiable(boolean negotiable) {
		this.negotiable = negotiable;
	}

	public Date getOfferValidDate() {
		return offerValidDate;
	}

	public void setOfferValidDate(Date offerValidDate) {
		this.offerValidDate = offerValidDate;
	}

	public boolean isFirstCumServe() {
		return firstCumServe;
	}

	public void setFirstCumServe(boolean firstCumServe) {
		this.firstCumServe = firstCumServe;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public String getDriveType() {
		return driveType;
	}

	public void setDriveType(String driveType) {
		this.driveType = driveType;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public int getNoOfDoors() {
		return noOfDoors;
	}

	public void setNoOfDoors(int noOfDoors) {
		this.noOfDoors = noOfDoors;
	}

	public boolean isDelPrefLocation() {
		return delPrefLocation;
	}

	public void setDelPrefLocation(boolean delPrefLocation) {
		this.delPrefLocation = delPrefLocation;
	}

	public String getFreeText() {
		return freeText;
	}

	public void setFreeText(String freeText) {
		this.freeText = freeText;
	}

	public double getOfferPrice2() {
		return offerPrice2;
	}

	public void setOfferPrice2(double offerPrice2) {
		this.offerPrice2 = offerPrice2;
	}

	public double getOfferPrice3() {
		return offerPrice3;
	}

	public void setOfferPrice3(double offerPrice3) {
		this.offerPrice3 = offerPrice3;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getDealerId() {
		return dealerId;
	}

	public void setDealerId(Long dealerId) {
		this.dealerId = dealerId;
	}

	public String getAdhoc1() {
		return adhoc1;
	}

	public void setAdhoc1(String adhoc1) {
		this.adhoc1 = adhoc1;
	}

	public String getAdhoc2() {
		return adhoc2;
	}

	public void setAdhoc2(String adhoc2) {
		this.adhoc2 = adhoc2;
	}

	public String getAdhoc3() {
		return adhoc3;
	}

	public void setAdhoc3(String adhoc3) {
		this.adhoc3 = adhoc3;
	}

	public String getAdhoc4() {
		return adhoc4;
	}

	public void setAdhoc4(String adhoc4) {
		this.adhoc4 = adhoc4;
	}

	public String getFlex1() {
		return flex1;
	}

	public void setFlex1(String flex1) {
		this.flex1 = flex1;
	}

	public String getFlex2() {
		return flex2;
	}

	public void setFlex2(String flex2) {
		this.flex2 = flex2;
	}

	public String getFlex3() {
		return flex3;
	}

	public void setFlex3(String flex3) {
		this.flex3 = flex3;
	}

	public String getFlex4() {
		return flex4;
	}

	public void setFlex4(String flex4) {
		this.flex4 = flex4;
	}

	private String flex1;
	private String flex2;
	private String flex3;
	private String flex4;

	public Long getQuotId() {
		return this.quotId;
	}

	public void setQuotId(Long carMakeId) {
		this.quotId = carMakeId;
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

}
