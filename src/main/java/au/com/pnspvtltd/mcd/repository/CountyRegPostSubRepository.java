package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.CarModelTemplate;

public interface CountyRegPostSubRepository extends JpaRepository<CarModelTemplate, Long> {
	
	@Query("select distinct countyRegPostSub.country from CountyRegPostSub countyRegPostSub order by countyRegPostSub.country Asc")
	public List<String> getAllCountries();

	@Query("select distinct countyRegPostSub.state from CountyRegPostSub countyRegPostSub WHERE countyRegPostSub.country=?1")
	public List<String> getAllStatesForCountry(String country);

	@Query("select distinct countyRegPostSub.region from CountyRegPostSub countyRegPostSub WHERE countyRegPostSub.country=?1 AND countyRegPostSub.state=?2")
	public List<String> getAllRegionsForCountynState(String country,String state);

	@Query("select distinct countyRegPostSub.postCode from CountyRegPostSub countyRegPostSub WHERE countyRegPostSub.country=?1 AND countyRegPostSub.state=?2 AND countyRegPostSub.region=?3")
	public List<Integer> getPostCodeForCSR(String country,String state,String region);
	
	//public CarModelTemplate getCarModelYear();
}
