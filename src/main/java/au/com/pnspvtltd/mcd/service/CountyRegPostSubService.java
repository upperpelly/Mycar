package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;

public interface CountyRegPostSubService {
	
	List<String> getAllCountries();

	List<String> getAllStatesForCountry(String modelYear);

	List<String> getAllRegionsForCountynState(String modelDisplay, String modelYear);

	List<Integer> getPostCodeForCSR(String modelName, String modelDisplay, String modelYear);

	List<Integer> getPostCodeForLike(String substr);

	boolean existsPostcodeForState(String state, int postcode);

	boolean existsPostcodeForRegion(String region, int postcode);
}
