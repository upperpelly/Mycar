package au.com.pnspvtltd.mcd.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.SearchServMaint;
import au.com.pnspvtltd.mcd.domain.SearchTransp;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface SearchTranspRepository extends JpaRepository<SearchTransp, Long>{

	
	@Query("SELECT search FROM SearchTransp search" +
			" ORDER BY search.searchTranspId")
			public List<SearchTransp> getAllSearchCriteria();
	
	
	@Query("SELECT search FROM SearchTransp search WHERE search.idp=?1")
			public List<SearchTransp> getTranspByUserId(Long userid);
	
	
}
