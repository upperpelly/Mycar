package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.TranspServiceQuotation;

public interface TranspServQuotationRepository extends JpaRepository<TranspServiceQuotation, Long> {

	@Query("SELECT transpServiceQuotation FROM TranspServiceQuotation transpServiceQuotation WHERE transpServiceQuotation.userId=?1 AND transpServiceQuotation.autoBid=true")
	List<TranspServiceQuotation> getQuotationsForUser(Long userId);

	List<TranspServiceQuotation> findByDealerId(Long dealerId);

}
