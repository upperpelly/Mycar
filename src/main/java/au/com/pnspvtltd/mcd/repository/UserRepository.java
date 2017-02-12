package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmailIgnoreCase(String emailId);
	
}
