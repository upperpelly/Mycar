package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.FinanceQuotation;

public interface FinanceQuotationRepository extends JpaRepository<FinanceQuotation, Long> {

	@Query("SELECT financeQuotation FROM FinanceQuotation financeQuotation WHERE financeQuotation.userId=?1 AND financeQuotation.autoBid=true")
	List<FinanceQuotation> getQuotationsForUser(Long userId);

	List<FinanceQuotation> findByDealerId(Long dealerId);

}
