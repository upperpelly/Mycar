package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.TempCarModelHeader;

public interface TempCarModelTemplateRepository extends JpaRepository<TempCarModelHeader, Long> {

	@Query("SELECT tempCarModelHeader FROM TempCarModelHeader tempCarModelHeader WHERE tempCarModelHeader.modelYear=?1 AND tempCarModelHeader.modelDisplay=?2 AND tempCarModelHeader.modelName=?3 AND tempCarModelHeader.modelTrim=?4")
	public TempCarModelHeader getCarModelTemplateFor(String modelYear, String modelDisplay, String modelName,
			String modelTrim);

	
	@Query("select distinct tempCarModelHeader.modelYear from TempCarModelHeader tempCarModelHeader order by tempCarModelHeader.modelYear desc")
	public List<String> getAllCarModelYears();

	@Query("select tempCarModelHeader.modelDisplay from TempCarModelHeader tempCarModelHeader WHERE tempCarModelHeader.modelYear=?1")
	public List<String> getAllCarModelMakesForYear(String modelYear);

	@Query("select tempCarModelHeader.modelName from TempCarModelHeader tempCarModelHeader WHERE tempCarModelHeader.modelDisplay=?1 AND tempCarModelHeader.modelYear=?2")
	public List<String> getAllCarModelNamesForMake(String modelDisplay,String modelYear);

	@Query("select tempCarModelHeader.modelTrim from TempCarModelHeader tempCarModelHeader WHERE tempCarModelHeader.modelName=?1 AND tempCarModelHeader.modelDisplay=?2 AND tempCarModelHeader.modelYear=?3")
	public List<String> getAllCarModelVariantsForModel(String modelName,String modelDisplay,String modelYear);
	
	//public CarModelTemplate getCarModelYear();
}
