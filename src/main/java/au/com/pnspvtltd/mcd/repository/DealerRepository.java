package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.Dealer;

public interface DealerRepository extends JpaRepository<Dealer, Long>{
	Dealer findByEmailIgnoreCase(String emailId);
}
