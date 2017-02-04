package au.com.pnspvtltd.mcd.web.model;

import java.sql.Date;

public class SearchTranspVO {

	private Long searchTranspId;
	private String fromPostCodeAddr;
	private String toPostCodeAddr;
	private String transTypeReq;
	private Date pickUpDateTime;
	private int noOfCars;
	private int year;
	private String make;
	private String model;
	private String variant;
	private String freeText;
	private boolean transpInsReq;
	private String uploadPhotos;

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

	public Long getSearchTranspId() {
		return searchTranspId;
	}

	public void setSearchTranspId(Long searchTranspId) {
		this.searchTranspId = searchTranspId;
	}

	public String getUploadPhotos() {
		return uploadPhotos;
	}

	public void setUploadPhotos(String uploadPhotos) {
		this.uploadPhotos = uploadPhotos;
	}

	public String getFreeText() {
		return freeText;
	}

	public void setFreeText(String freeText) {
		this.freeText = freeText;
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

}
