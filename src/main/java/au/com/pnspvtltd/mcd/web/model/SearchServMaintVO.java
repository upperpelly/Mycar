package au.com.pnspvtltd.mcd.web.model;

public class SearchServMaintVO {

	private Long searchServMaintId;
	private String postCode;
	private int year;
	private String regNo;
	private String regoState;
	private String make;
	private String model;
	private String variant;
	private String feulType;
	private String servMaintL1;
	private String servMaintL2;
	private String uploadPhotos;
	private boolean coveredUnderIns;
	private String curInsProv;
	private String freeText;

	public Long getSearchServMaintId() {
		return searchServMaintId;
	}

	public void setSearchServMaintId(Long searchServMaintId) {
		this.searchServMaintId = searchServMaintId;
	}

	public String getFeulType() {
		return feulType;
	}

	public void setFeulType(String feulType) {
		this.feulType = feulType;
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

	public String getFreeText() {
		return freeText;
	}

	public void setFreeText(String freeText) {
		this.freeText = freeText;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getRegNo() {
		return regNo;
	}

	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}

	public String getRegoState() {
		return regoState;
	}

	public void setRegoState(String regoState) {
		this.regoState = regoState;
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

	public String getCurInsProv() {
		return curInsProv;
	}

	public void setCurInsProv(String curInsProv) {
		this.curInsProv = curInsProv;
	}

}
