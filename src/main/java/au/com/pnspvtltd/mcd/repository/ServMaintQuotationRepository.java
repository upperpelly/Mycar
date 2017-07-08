package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.ServiceMaintQuotation;


public interface ServMaintQuotationRepository extends JpaRepository<ServiceMaintQuotation, Long> {

	@Query("SELECT servmaintquoation FROM ServiceMaintQuotation servmaintquoation WHERE servmaintquoation.userId=?1 AND servmaintquoation.autoBid=true")
	List<ServiceMaintQuotation> getQuotationsForUser(Long userId);

	List<ServiceMaintQuotation> findByDealerId(Long dealerId);
	
	@Query("SELECT deal FROM ServiceMaintQuotation deal where deal.searchServMaintId = ?1")
	List<ServiceMaintQuotation> getDealerSmForID(Long carServMaintId);

}
