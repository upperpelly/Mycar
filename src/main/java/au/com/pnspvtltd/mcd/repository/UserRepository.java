package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmailIgnoreCase(String emailId);
	@Query("SELECT user FROM User user")
	public List<User> getAllUser();
	
}
