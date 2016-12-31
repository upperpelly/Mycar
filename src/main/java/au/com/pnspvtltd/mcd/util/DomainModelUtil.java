package au.com.pnspvtltd.mcd.util;

import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.BeanUtils;

import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.web.model.UserVO;

public class DomainModelUtil {
	public static UserVO fromUser(final User user){
		
		if (user == null){
			return null;
		}
		
		UserVO userVO = new UserVO();
		try {
			BeanUtils.copyProperties(userVO, user);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return userVO;
	}
	
	public static User toUser(final UserVO userVO){
		User user = new User();
		try {
			BeanUtils.copyProperties(user, userVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
}
