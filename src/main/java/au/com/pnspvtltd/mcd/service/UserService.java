package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.User;

public interface UserService {

	User findById(Long id);
	User createUser(User user);
	User updateUser(User user);
	List<User> findAllUsers();
}
