package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.BlogPoints;
import au.com.pnspvtltd.mcd.domain.LoyalityProgAdmin;
import au.com.pnspvtltd.mcd.domain.ReferencedPoints;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.UserReferPoints;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface LoyalityProgAdminRepository extends JpaRepository<LoyalityProgAdmin, Long>{

	@Query("SELECT search FROM LoyalityProgAdmin search" +
			" ORDER BY search.loyalityProgramId")
			public List<LoyalityProgAdmin> getAllSearchCriteria();
	
	
	@Query("SELECT search FROM LoyalityProgAdmin search WHERE search.status=?1" +
			" ORDER BY search.loyalityProgramId")
			public List<LoyalityProgAdmin> getAllCriteria(boolean status);
	
	
	/*@Query("SELECT search FROM LoyalityProgAdmin search WHERE search.idp=?1")
			public List<LoyalityProgAdmin> getReferByUserId(Long userid);*/
	
	
}
