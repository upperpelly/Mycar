package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;

public interface UserSearchLeadRepository extends JpaRepository<Search, Long>{

	List<Search> findByLeadInitiatedBy(LeadInitiatedBy leadInitiatedBy);
}
