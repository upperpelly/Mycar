package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.ReferencedPoints;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.UserReferPoints;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface ReferencedPointsRepository extends JpaRepository<ReferencedPoints, Long>{

	@Query("SELECT search FROM ReferencedPoints search" +
			" ORDER BY search.referPointId")
			public List<ReferencedPoints> getAllSearchCriteria();
	
	
	
	
	@Query("SELECT search FROM ReferencedPoints search WHERE search.idp=?1")
			public List<ReferencedPoints> getReferByUserId(Long userid);
	
	
}
