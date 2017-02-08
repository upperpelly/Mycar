package au.com.pnspvtltd.mcd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.ComingSoonUser;

public interface ComingSoonRepository extends JpaRepository<ComingSoonUser, Long> {
	List<ComingSoonUser> findByComingSoonUserEmailIgnoreCase(String COMINGSOONUSEREMAIL);
}
