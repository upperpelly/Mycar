package au.com.pnspvtltd.mcd.web.model;

import java.sql.Date;


public class ServiceMaintQuotationVO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2795828321233759004L;

	/**
	 * 
	 */
	// Unique Quotation id
	private Long servMaintQuotId;
	// dealer id
	private Long dealerId;
	// user id
	private Long userId;
	// dealer Serv Maint lead id
	private Long dealServMaintId;
	// user Serv Maint lead id
	private Long carServMaintId;
	// inventory repo id
	private Long refId;
	private boolean autoBid;
	private boolean moveToUser;
	
	

	private String modelYear;
	private String modelDisplay;
	private String modelName;
	private String modelTrim;

	private String dealerName;
	private String dealerABN;
	private String quotHeaderFreeText;
	private boolean isNew;
	private String postCode;
	
	private String servMaintL1;
	private String servMaintL2;
	private String uploadPhotos;
	private boolean coveredUnderIns;
	private String curInsProv;
	
	
	private String regoNo;
	private String regoStat;
	private int dealerStockNo;
	private int noOfKms;
	private double driveAwayPrice;
	private boolean negotiable;
	private Date offerValidDate;
	private boolean firstCumServe;
	private String fuelType;
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
			
		
		public Long getServMaintQuotId() {
			return servMaintQuotId;
		}

		public void setServMaintQuotId(Long servMaintQuotId) {
			this.servMaintQuotId = servMaintQuotId;
		}
		
		public Long getDealServMaintId() {
			return dealServMaintId;
		}

		public void setDealServMaintId(Long dealServMaintId) {
			this.dealServMaintId = dealServMaintId;
		}
		
		public Long getCarServMaintId() {
			return carServMaintId;
		}

		public void setCarServMaintId(Long carServMaintId) {
			this.carServMaintId = carServMaintId;
		}
		
		public String getPostCode() {
			return postCode;
		}

		public void setPostCode(String postCode) {
			this.postCode = postCode;
		}
		
		public String getServMaintL1() {
			return servMaintL1;
		}

		public void setServMaintL1(String servMaintL1) {
			this.servMaintL1 = servMaintL1;
		}
		
		public String getServMaintL2() {
			return servMaintL2;
		}

		public void setServMaintL2(String servMaintL2) {
			this.servMaintL2 = servMaintL2;
		}
		
		public String getUploadPhotos() {
			return uploadPhotos;
		}

		public void setUploadPhotos(String uploadPhotos) {
			this.uploadPhotos = uploadPhotos;
		}
		
		public boolean isCoveredUnderIns() {
			return coveredUnderIns;
		}

		public void setCoveredUnderIns(boolean coveredUnderIns) {
			this.coveredUnderIns = coveredUnderIns;
		}
		
		public String getCurInsProv() {
			return curInsProv;
		}

		public void setCurInsProv(String curInsProv) {
			this.curInsProv = curInsProv;
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

	

	public String getRegoNo() {
		return regoNo;
	}

	public void setRegoNo(String regoNo) {
		this.regoNo = regoNo;
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

	
		public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
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
