package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.BlogPoints;
import au.com.pnspvtltd.mcd.domain.ReferencedPoints;
import au.com.pnspvtltd.mcd.domain.ReviewPoints;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.UserReferPoints;
import au.com.pnspvtltd.mcd.domain.ValTransPoints;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface ValTransPointsRepository extends JpaRepository<ValTransPoints, Long>{

	@Query("SELECT search FROM ValTransPoints search" +
			" ORDER BY search.valTransPointId")
			public List<ValTransPoints> getAllSearchCriteria();
	
	
	
	
	@Query("SELECT search FROM ValTransPoints search WHERE search.idp=?1")
			public List<ValTransPoints> getReferByUserId(Long userid);
	
	
}
