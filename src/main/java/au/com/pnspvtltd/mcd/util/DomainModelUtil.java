package au.com.pnspvtltd.mcd.util;

import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.BeanUtils;

import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
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
	
public static InventoryVO fromInventory(final Inventory inventory, boolean isMinified){
		
		if (inventory == null){
			return null;
		}
		
		InventoryVO inventoryVO = new InventoryVO();
		try {
			//TODO: return only minified if required
			BeanUtils.copyProperties(inventoryVO, inventory);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return inventoryVO;
	}
}
