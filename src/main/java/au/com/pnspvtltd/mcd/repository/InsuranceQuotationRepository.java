package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;

public interface InsuranceQuotationRepository extends JpaRepository<InsuranceQuotation, Long> {

	@Query("SELECT insuranceQuotation FROM InsuranceQuotation insuranceQuotation WHERE insuranceQuotation.userId=?1 AND insuranceQuotation.autoBid=true")
	List<InsuranceQuotation> getQuotationsForUser(Long userId);

	List<InsuranceQuotation> findByDealerId(Long dealerId);

}
