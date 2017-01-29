package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.CarModelTemplate;

public interface CarModelTemplateRepository extends JpaRepository<CarModelTemplate, Long> {

	@Query("SELECT carModelTemplate FROM CarModelTemplate carModelTemplate WHERE carModelTemplate.modelYear=?1 AND carModelTemplate.modelDisplay=?2 AND carModelTemplate.modelName=?3 AND carModelTemplate.modelTrim=?4")
	public CarModelTemplate getCarModelTemplateFor(String modelYear, String modelDisplay, String modelName,
			String modelTrim);
}
