package au.com.pnspvtltd.mcd.service.impl;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.service.UserService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.UserVO;

@Service
public class UserServiceImpl implements UserService{

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	@Transactional(readOnly = true)
	public UserVO findById(Long id) {
		User user = userRepository.findOne(id);
		return (user != null ? DomainModelUtil.fromUser(user) : null);
	}

	@Override
	@Transactional
	public UserVO createUser(UserVO userVO) {
		userVO.setUserId(null);
		return DomainModelUtil.fromUser(userRepository.save(DomainModelUtil.toUser(userVO)));
	}

	@Override
	@Transactional
	public UserVO updateUser(UserVO userVO) {
		User userToUpdate = userRepository.findOne(userVO.getUserId());
		
		if (userToUpdate == null){
			LOGGER.debug("User with id {} does not exist", userVO.getUserId());
			return null;
		}
		
		try {
			BeanUtils.copyProperties(userToUpdate, userVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
			
		User user = userRepository.save(userToUpdate);			
		return DomainModelUtil.fromUser(user);
	}

	@Override
	@Transactional(readOnly = true)
	public List<UserVO> findAllUsers() {
		List<UserVO> userVOs = new ArrayList<>();
		for(User user :  userRepository.findAll()){
			userVOs.add(DomainModelUtil.fromUser(user));
		}
		return userVOs;
	}
	
	@Override
	@Transactional(readOnly = true)
	public UserVO findUserByEmail(String email){
		return DomainModelUtil.fromUser(userRepository.findByEmailIgnoreCase(email));
	}

	
}
