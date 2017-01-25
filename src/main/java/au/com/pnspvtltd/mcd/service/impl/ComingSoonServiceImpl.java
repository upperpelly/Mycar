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
import au.com.pnspvtltd.mcd.repository.ComingSoonRepository;
import au.com.pnspvtltd.mcd.service.ComingSoonService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.ComingSoonVO;

@Service
public class ComingSoonServiceImpl implements ComingSoonService{

	private static final Logger LOGGER = LoggerFactory.getLogger(ComingSoonServiceImpl.class);
	
	@Autowired
	ComingSoonRepository userRepository;
	
	/*@Override
	@Transactional(readOnly = true)
	public UserVO findById(Long id) {
		User user = userRepository.findOne(id);
		return (user != null ? DomainModelUtil.fromUser(user) : null);
	}*/

	@Override
	@Transactional
	public ComingSoonVO createUser(ComingSoonVO userVO) {
		userVO.setComingSoonUserID(null);
		return DomainModelUtil.fromComingSoonUser(userRepository.save(DomainModelUtil.toComingSoonUser(userVO)));
	}

	/*@Override
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
	}*/

	
}
