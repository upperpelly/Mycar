package au.com.pnspvtltd.mcd.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.MyCarDomainUser;
import au.com.pnspvtltd.mcd.repository.MyCarDomainUserRepository;
import au.com.pnspvtltd.mcd.service.UserService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.User;

@Service
public class UserServiceImpl implements UserService{

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	MyCarDomainUserRepository myCarDomainUserRepository;
	
	@Override
	@Transactional(readOnly = true)
	public User findById(Long id) {
		return DomainModelUtil.fromMyCarDomainUser(myCarDomainUserRepository.findOne(id));
	}

	@Override
	@Transactional
	public User createUser(User user) {
		return DomainModelUtil.fromMyCarDomainUser(myCarDomainUserRepository.save(DomainModelUtil.toMyCarDomainUser(user)));
	}

	@Override
	@Transactional
	public User updateUser(User user) {
		MyCarDomainUser myCarDomainUserToUpdate = myCarDomainUserRepository.findOne(user.getUserId());
		if (myCarDomainUserToUpdate == null){
			LOGGER.debug("User with id {} does not exist", user.getUserId());
		}
		myCarDomainUserToUpdate.setABNNumber(user.getUserABNNumber());
		
		MyCarDomainUser myCarDomainUser = myCarDomainUserRepository.save(myCarDomainUserToUpdate);			
		return DomainModelUtil.fromMyCarDomainUser(myCarDomainUser);
	}

	@Override
	@Transactional(readOnly = true)
	public List<User> findAllUsers() {
		List<User> users = new ArrayList<>();
		for(MyCarDomainUser myCarDomainUser :  myCarDomainUserRepository.findAll()){
			users.add(DomainModelUtil.fromMyCarDomainUser(myCarDomainUser));
		}
		return users;
	}

	
}
