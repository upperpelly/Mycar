package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.ExtDealServMaintr1;
import au.com.pnspvtltd.mcd.domain.ExtDealerSearch;
import au.com.pnspvtltd.mcd.domain.ExtDealerSearchFin;
import au.com.pnspvtltd.mcd.domain.ExtDealerSearchTp;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.web.model.DealerVO;

public interface ExtDealerFinRepository extends JpaRepository<ExtDealerSearchFin, Long>{
	
	@Query("SELECT deal FROM ExtDealerSearchFin deal where deal.carSearchId = ?1")
	List<ExtDealerSearchFin> getDealerSearchForID(Long carSearchId);
	

}
