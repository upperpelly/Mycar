package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.ComingSoonUser;

public interface ComingSoonRepository extends JpaRepository<ComingSoonUser, Long>{
	/*ComingSoonUser findByEmailIgnoreCase(String COMINGSOONUSEREMAIL);*/
}
