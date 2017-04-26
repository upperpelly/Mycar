package au.com.pnspvtltd.mcd.web.model;

import java.sql.Date;

public class TranspServiceQuotationVO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2795828321233759004L;

	/**
	 * 
	 */
	// Unique Quotation id for Transp
	private Long TranspServQuotId;
	// dealer id
	private Long dealerId;
	// user id
	private Long userId;
	// dealer Transp Serv lead id
	private Long dealTranspServId;
	// user Transp Serv lead id
	private Long userTranspServId;
	// inventory repo id
	private Long refId;
	private boolean autoBid;
	private boolean moveToUser;
	
	
	private String fromPostCodeAddr;
	private String toPostCodeAddr;
	private String transTypeReq;
	private Date pickUpDateTime;
	private int noOfCars;
	private boolean transpInsReq;
	private String howMay;
	private String fromStreetNo;
	private String toStreetName;
	private String toStreetNo;
	private String fromStreetName;
	private String kindOfTransport;
	private boolean flexWithDateDefault;
	

	private String modelYear;
	private String modelDisplay;
	private String modelName;
	private String modelTrim;

	private String dealerName;
	private String dealerABN;
	private String quotHeaderFreeText;
	private boolean isNew;
	
	private String uploadPhotos;
	
	private int dealerStockNo;
	private double driveAwayPrice;
	private boolean negotiable;
	private Date offerValidDate;
	private boolean firstCumServe;
	private boolean delPrefLocation;
	private String freeText;
	private double offerPrice2;
	private double offerPrice3;
	private String adhoc1;
	private String adhoc2;
	private String adhoc3;
	private String adhoc4;
	
	// Flex start
		private String flex1;	
		private String flex2;	
		private String flex3;	
		private String flex4;
		private int flex5;	
		private int flex6;	
		private double flex7;	
		private double flex8;
		private double flex9;	
		private double flex10;
		private Date flex11;
		private Date flex12;
		private boolean isFlex13;
		private boolean isFlex14;
		
		
		public Long getTranspServQuotId() {
			return TranspServQuotId;
		}

		public void setTranspServQuotId(Long transpServQuotId) {
			TranspServQuotId = transpServQuotId;
		}
		
		public Long getDealTranspServId() {
			return dealTranspServId;
		}

		public void setDealTranspServId(Long dealTranspServId) {
			this.dealTranspServId = dealTranspServId;
		}
		
		public Long getUserTranspServId() {
			return userTranspServId;
		}

		public void setUserTranspServId(Long userTranspServId) {
			this.userTranspServId = userTranspServId;
		}
		
		public String getFromPostCodeAddr() {
			return fromPostCodeAddr;
		}
		
		public void setFromPostCodeAddr(String fromPostCodeAddr) {
			this.fromPostCodeAddr = fromPostCodeAddr;
		}
		
		public String getToPostCodeAddr() {
			return toPostCodeAddr;
		}

		public void setToPostCodeAddr(String toPostCodeAddr) {
			this.toPostCodeAddr = toPostCodeAddr;
		}
		
		public String getTransTypeReq() {
			return transTypeReq;
		}

		public void setTransTypeReq(String transTypeReq) {
			this.transTypeReq = transTypeReq;
		}
		
		public Date getPickUpDateTime() {
			return pickUpDateTime;
		}

		public void setPickUpDateTime(Date pickUpDateTime) {
			this.pickUpDateTime = pickUpDateTime;
		}
		
		public int getNoOfCars() {
			return noOfCars;
		}

		public void setNoOfCars(int noOfCars) {
			this.noOfCars = noOfCars;
		}
		
		public boolean isTranspInsReq() {
			return transpInsReq;
		}

		public void setTranspInsReq(boolean transpInsReq) {
			this.transpInsReq = transpInsReq;
		}
		
		public String getHowMay() {
			return howMay;
		}

		public void setHowMay(String howMay) {
			this.howMay = howMay;
		}
		
		public String getFromStreetNo() {
			return fromStreetNo;
		}

		public void setFromStreetNo(String fromStreetNo) {
			this.fromStreetNo = fromStreetNo;
		}
		
		public String getToStreetName() {
			return toStreetName;
		}

		public void setToStreetName(String toStreetName) {
			this.toStreetName = toStreetName;
		}
		
		public String getToStreetNo() {
			return toStreetNo;
		}

		public void setToStreetNo(String toStreetNo) {
			this.toStreetNo = toStreetNo;
		}
		
		public String getFromStreetName() {
			return fromStreetName;
		}

		public void setFromStreetName(String fromStreetName) {
			this.fromStreetName = fromStreetName;
		}
		
		public String getKindOfTransport() {
			return kindOfTransport;
		}

		public void setKindOfTransport(String kindOfTransport) {
			this.kindOfTransport = kindOfTransport;
		}
		
		public boolean isFlexWithDateDefault() {
			return flexWithDateDefault;
		}

		public void setFlexWithDateDefault(boolean flexWithDateDefault) {
			this.flexWithDateDefault = flexWithDateDefault;
		}

		
		public String getUploadPhotos() {
			return uploadPhotos;
		}

		public void setUploadPhotos(String uploadPhotos) {
			this.uploadPhotos = uploadPhotos;
		}
	
		public boolean isAutoBid() {
			return autoBid;
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

		


		public String getFlex1() {
			return flex1;
		}

		
		public boolean isFlex13() {
			return isFlex13;
		}

		public void setFlex13(boolean isFlex13) {
			this.isFlex13 = isFlex13;
		}

		public boolean isFlex14() {
			return isFlex14;
		}

		public void setFlex14(boolean isFlex14) {
			this.isFlex14 = isFlex14;
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

		public int getFlex5() {
			return flex5;
		}

		public void setFlex5(int flex5) {
			this.flex5 = flex5;
		}

		public int getFlex6() {
			return flex6;
		}

		public void setFlex6(int flex6) {
			this.flex6 = flex6;
		}

		public double getFlex7() {
			return flex7;
		}

		public void setFlex7(double flex7) {
			this.flex7 = flex7;
		}

		public double getFlex8() {
			return flex8;
		}

		public void setFlex8(double flex8) {
			this.flex8 = flex8;
		}

		public double getFlex9() {
			return flex9;
		}

		public void setFlex9(double flex9) {
			this.flex9 = flex9;
		}

		public double getFlex10() {
			return flex10;
		}

		public void setFlex10(double flex10) {
			this.flex10 = flex10;
		}

		public Date getFlex11() {
			return flex11;
		}

		public void setFlex11(Date flex11) {
			this.flex11 = flex11;
		}

		public Date getFlex12() {
			return flex12;
		}

		public void setFlex12(Date flex12) {
			this.flex12 = flex12;
		}
	// End of flex
			

	
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

	

	
	public int getDealerStockNo() {
		return dealerStockNo;
	}

	public void setDealerStockNo(int dealerStockNo) {
		this.dealerStockNo = dealerStockNo;
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