package au.com.pnspvtltd.mcd.service;

import au.com.pnspvtltd.mcd.web.model.ComingSoonVO;

public interface ComingSoonService {

	/* ComingSoonVO findById(Long id); */

	ComingSoonVO createUser(ComingSoonVO user);

	/*
	 * ComingSoonVO updateUser(ComingSoonVO user);
	 * 
	 * List<ComingSoonVO> findAllUsers();
	 * 
	 * ComingSoonVO findUserByEmail(String email);
	 */

	ComingSoonVO findUserByEmail(String email);
}
