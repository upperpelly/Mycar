package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.FinanceQuotation;

public interface FinanceQuotationRepository extends JpaRepository<FinanceQuotation, Long> {

}
