package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchTransp;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface SearchFinanceRepository extends JpaRepository<SearchFinance, Long>{

	@Query("SELECT search FROM SearchFinance search" +
			" ORDER BY search.searchFinanceId")
			public List<SearchFinance> getAllSearchCriteria();
	
	
	
	@Query("SELECT search FROM SearchFinance search WHERE search.idp=?1")
			public List<SearchFinance> getFinanceByUserId(Long userid);
	
	
}
