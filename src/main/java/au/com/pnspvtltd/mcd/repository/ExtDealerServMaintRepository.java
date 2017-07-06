package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.ExtDealServMaintr1;
import au.com.pnspvtltd.mcd.domain.ExtDealerSearch;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.web.model.DealerVO;

public interface ExtDealerServMaintRepository extends JpaRepository<ExtDealServMaintr1, Long>{
	
	@Query("SELECT deal FROM ExtDealServMaintr1 deal where deal.carSearchId = ?1")
	List<ExtDealServMaintr1> getDealerSearchForID(Long carSearchId);
	

}
