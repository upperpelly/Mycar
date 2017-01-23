package au.com.pnspvtltd.mcd.util;

import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.BeanUtils;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.UserVO;

public class DomainModelUtil {
	public static UserVO fromUser(final User user) {

		if (user == null) {
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

	public static User toUser(final UserVO userVO) {
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

	public static InventoryVO fromInventory(final Inventory inventory, boolean isMinified) {

		if (inventory == null) {
			return null;
		}

		InventoryVO inventoryVO = new InventoryVO();
		try {
			// TODO: return only minified if required
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

	public static Inventory toInventory(final InventoryVO inventoryVO) {
		Inventory inventory = new Inventory();
		try {
			BeanUtils.copyProperties(inventory, inventoryVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return inventory;
	}

	public static Search toSearch(final SearchVO searchVO) {

		Search search = new Search();
		try {
			BeanUtils.copyProperties(search, searchVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return search;
	}

	public static DealerVO fromDealer(final Dealer dealer) {

		if (dealer == null) {
			return null;
		}

		DealerVO dealerVO = new DealerVO();
		try {
			BeanUtils.copyProperties(dealerVO, dealer);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerVO;
	}

	public static Dealer toDealer(final DealerVO dealerVO) {
		Dealer dealer = new Dealer();
		try {
			BeanUtils.copyProperties(dealer, dealerVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealer;
	}

}
