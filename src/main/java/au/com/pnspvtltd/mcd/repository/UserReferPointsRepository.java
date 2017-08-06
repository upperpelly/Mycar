package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.UserReferPoints;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface UserReferPointsRepository extends JpaRepository<UserReferPoints, Long>{

	@Query("SELECT search FROM UserReferPoints search" +
			" ORDER BY search.userReferPointId")
			public List<UserReferPoints> getAllSearchCriteria();
	
	
	
	
	@Query("SELECT search FROM UserReferPoints search WHERE search.idp=?1")
			public List<UserReferPoints> getReferByUserId(Long userid);
	
	
}
