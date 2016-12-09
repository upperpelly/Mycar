package au.com.pnspvtltd.mcd.util;

import au.com.pnspvtltd.mcd.domain.MyCarDomainUser;
import au.com.pnspvtltd.mcd.web.model.User;

public class DomainModelUtil {
	public static User fromMyCarDomainUser(final MyCarDomainUser myCarDomainUser){
		User user = new User();
		user.setUserId(myCarDomainUser.getId());
		user.setUserABNNumber(myCarDomainUser.getABNNumber());
		return user;
	}
	
	public static MyCarDomainUser toMyCarDomainUser(final User user){
		MyCarDomainUser myCarDomainUser = new MyCarDomainUser();
		myCarDomainUser.setId(user.getUserId());
		myCarDomainUser.setABNNumber(user.getUserABNNumber());
		return myCarDomainUser;
	}
}
