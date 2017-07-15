package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.ExternalDealer;
import au.com.pnspvtltd.mcd.domain.ExternalDealerTp;


public interface ExternalDealerTpRepository extends JpaRepository<ExternalDealerTp, Long>{

	
	
	@Query("SELECT search FROM ExternalDealerTp search WHERE search.postCode=?1" +
			" ORDER BY search.externalDealerId")
			public List<ExternalDealer> getSearchPostCd(int postCode);
	
	@Query("SELECT search FROM ExternalDealerTp search WHERE search.companyName=?1" +
			" ORDER BY search.externalDealerId")
			public List<ExternalDealer> getSearchComp(String companyName);
	
	@Query("SELECT search FROM ExternalDealerTp search WHERE search.category=?1 AND search.postCode=?2" +
			" ORDER BY search.externalDealerId")
			public List<ExternalDealer> getSearchCatPost(String category, int postCode);
		
}
