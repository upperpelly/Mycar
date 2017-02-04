package au.com.pnspvtltd.mcd.web.model;

import java.util.List;

public class CarModelTemplateVO {

	private Long tempModelId;
	private String modelYear;
	private String modelDisplay;
	private String modelName;
	private String modelTrim;
	private double mrlp;
	private double extraCost;
	private double onRoadCost;
	private double avgPrice;

	List<PhotosTemplateVO> photosTemplate;
	List<CountryTemplateVO> countryTemplate;
	List<YoutubeTemplateVO> youtubeTemplate;
	List<BlogTemplateVO> blogTemplate;
	List<UserReviewTemplateVO> userReviewTemplate;
	SpecificationTemplateVO specificationTemplate;

	public Long getTempModelId() {
		return tempModelId;
	}

	public void setTempModelId(Long tempModelId) {
		this.tempModelId = tempModelId;
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

	public double getMrlp() {
		return mrlp;
	}

	public void setMrlp(double mrlp) {
		this.mrlp = mrlp;
	}

	public double getExtraCost() {
		return extraCost;
	}

	public void setExtraCost(double extraCost) {
		this.extraCost = extraCost;
	}

	public double getOnRoadCost() {
		return onRoadCost;
	}

	public void setOnRoadCost(double onRoadCost) {
		this.onRoadCost = onRoadCost;
	}

	public double getAvgPrice() {
		return avgPrice;
	}

	public void setAvgPrice(double avgPrice) {
		this.avgPrice = avgPrice;
	}

	public List<PhotosTemplateVO> getPhotosTemplate() {
		return photosTemplate;
	}

	public void setPhotosTemplate(List<PhotosTemplateVO> photosTemplate) {
		this.photosTemplate = photosTemplate;
	}

	public List<CountryTemplateVO> getCountryTemplate() {
		return countryTemplate;
	}

	public void setCountryTemplate(List<CountryTemplateVO> countryTemplate) {
		this.countryTemplate = countryTemplate;
	}

	public List<YoutubeTemplateVO> getYoutubeTemplate() {
		return youtubeTemplate;
	}

	public void setYoutubeTemplate(List<YoutubeTemplateVO> youtubeTemplate) {
		this.youtubeTemplate = youtubeTemplate;
	}

	public List<BlogTemplateVO> getBlogTemplate() {
		return blogTemplate;
	}

	public void setBlogTemplate(List<BlogTemplateVO> blogTemplate) {
		this.blogTemplate = blogTemplate;
	}

	public List<UserReviewTemplateVO> getUserReviewTemplate() {
		return userReviewTemplate;
	}

	public void setUserReviewTemplate(List<UserReviewTemplateVO> userReviewTemplate) {
		this.userReviewTemplate = userReviewTemplate;
	}

	public SpecificationTemplateVO getSpecificationTemplate() {
		return specificationTemplate;
	}

	public void setSpecificationTemplate(SpecificationTemplateVO specificationTemplate) {
		this.specificationTemplate = specificationTemplate;
	}

}
