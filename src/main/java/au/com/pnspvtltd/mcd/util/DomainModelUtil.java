package au.com.pnspvtltd.mcd.util;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import au.com.pnspvtltd.mcd.domain.BlogTemplate;
import au.com.pnspvtltd.mcd.domain.CarModelTemplate;
import au.com.pnspvtltd.mcd.domain.ComingSoonUser;
import au.com.pnspvtltd.mcd.domain.CountryTemplate;
import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.PhotosTemplate;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SpecificationTemplate;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.UserReviewTemplate;
import au.com.pnspvtltd.mcd.domain.YoutubeTemplate;
import au.com.pnspvtltd.mcd.web.model.BlogTemplateVO;
import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;
import au.com.pnspvtltd.mcd.web.model.ComingSoonVO;
import au.com.pnspvtltd.mcd.web.model.CountryTemplateVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.PhotosTemplateVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.SpecificationTemplateVO;
import au.com.pnspvtltd.mcd.web.model.UserReviewTemplateVO;
import au.com.pnspvtltd.mcd.web.model.UserVO;
import au.com.pnspvtltd.mcd.web.model.YoutubeTemplateVO;

@Component
public class DomainModelUtil {

	@Autowired
	private NullAwareBeanUtils nullAwareBeanUtils;

	public UserVO fromUser(final User user) {

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

	public User toUser(final UserVO userVO) {

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

	public ComingSoonVO fromComingSoonUser(final ComingSoonUser user) {

		if (user == null) {
			return null;
		}

		ComingSoonVO userVO = new ComingSoonVO();
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

	public ComingSoonUser toComingSoonUser(final ComingSoonVO userVO) {
		ComingSoonUser user = new ComingSoonUser();
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

	public InventoryVO fromInventory(final Inventory inventory, boolean isMinified) {
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

	public Inventory toInventory(final InventoryVO inventoryVO) {
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

	public Search toSearch(final SearchVO searchVO) {

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

	public DealerVO fromDealer(final Dealer dealer) {

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

	public Dealer toDealer(final DealerVO dealerVO) {
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

	public CarModelTemplateVO fromCarModelTemplate(final CarModelTemplate carModelTemplate, boolean isMinified) {
		if (carModelTemplate == null) {
			return null;
		}

		CarModelTemplateVO carModelTemplateVO = new CarModelTemplateVO();

		try {

			if (isMinified) {
				org.springframework.beans.BeanUtils.copyProperties(carModelTemplate, carModelTemplateVO,
						new String[] { "photosTemplate", "countryTemplate", "youtubeTemplate", "blogTemplate",
								"userReviewTemplate", "specificationTemplate" });
			} else {

				org.springframework.beans.BeanUtils.copyProperties(carModelTemplate, carModelTemplateVO,
						new String[] { "photosTemplate", "countryTemplate", "youtubeTemplate", "blogTemplate",
								"userReviewTemplate", "specificationTemplate" });

				if (carModelTemplate.getBlogTemplate() != null) {
					List<BlogTemplateVO> blogTemplates = new ArrayList<>();
					for (BlogTemplate blogTemplate : carModelTemplate.getBlogTemplate()) {
						BlogTemplateVO blogTemplateVO = new BlogTemplateVO();
						BeanUtils.copyProperties(blogTemplateVO, blogTemplate);
						blogTemplates.add(blogTemplateVO);
					}
					carModelTemplateVO.setBlogTemplate(blogTemplates);
				}

				if (carModelTemplate.getCountryTemplate() != null) {
					List<CountryTemplateVO> countryTemplates = new ArrayList<>();
					for (CountryTemplate countryTemplate : carModelTemplate.getCountryTemplate()) {
						CountryTemplateVO countryTemplateVO = new CountryTemplateVO();
						BeanUtils.copyProperties(countryTemplateVO, countryTemplate);
						countryTemplates.add(countryTemplateVO);
					}
					carModelTemplateVO.setCountryTemplate(countryTemplates);
				}

				if (carModelTemplate.getPhotosTemplate() != null) {
					List<PhotosTemplateVO> photosTemplates = new ArrayList<>();
					for (PhotosTemplate photosTemplate : carModelTemplate.getPhotosTemplate()) {
						PhotosTemplateVO photosTemplateVO = new PhotosTemplateVO();
						BeanUtils.copyProperties(photosTemplateVO, photosTemplate);
						photosTemplates.add(photosTemplateVO);
					}
					carModelTemplateVO.setPhotosTemplate(photosTemplates);
				}

				if (carModelTemplate.getSpecificationTemplate() != null) {
					SpecificationTemplateVO specificationTemplateVO = new SpecificationTemplateVO();
					BeanUtils.copyProperties(specificationTemplateVO, carModelTemplate.getSpecificationTemplate());
					carModelTemplateVO.setSpecificationTemplate(specificationTemplateVO);
				}

				if (carModelTemplate.getUserReviewTemplate() != null) {
					List<UserReviewTemplateVO> userReviewTemplates = new ArrayList<>();
					for (UserReviewTemplate userReviewTemplate : carModelTemplate.getUserReviewTemplate()) {
						UserReviewTemplateVO userReviewTemplateVO = new UserReviewTemplateVO();
						BeanUtils.copyProperties(userReviewTemplateVO, userReviewTemplate);
						userReviewTemplates.add(userReviewTemplateVO);
					}
					carModelTemplateVO.setUserReviewTemplate(userReviewTemplates);
				}

				if (carModelTemplate.getYoutubeTemplate() != null) {
					List<YoutubeTemplateVO> youtubeTemplates = new ArrayList<>();
					for (YoutubeTemplate youtubeTemplate : carModelTemplate.getYoutubeTemplate()) {
						YoutubeTemplateVO youtubeTemplateVO = new YoutubeTemplateVO();
						BeanUtils.copyProperties(youtubeTemplateVO, youtubeTemplate);
						youtubeTemplates.add(youtubeTemplateVO);
					}
					carModelTemplateVO.setYoutubeTemplate(youtubeTemplates);
				}

			}

		} catch (BeansException ex) {
			ex.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return carModelTemplateVO;
	}

	public CarModelTemplate toCarModelTemplate(final CarModelTemplateVO carModelTemplateVO) {

		CarModelTemplate carModelTemplate = new CarModelTemplate();

		try {

			if (carModelTemplateVO.getBlogTemplate() != null) {
				List<BlogTemplate> blogTemplates = new ArrayList<>();
				for (BlogTemplateVO blogTemplateVO : carModelTemplateVO.getBlogTemplate()) {
					BlogTemplate blogTemplate = new BlogTemplate();
					BeanUtils.copyProperties(blogTemplate, blogTemplateVO);
					blogTemplates.add(blogTemplate);
				}
				carModelTemplate.setBlogTemplate(blogTemplates);
				carModelTemplateVO.setBlogTemplate(null);
			}

			if (carModelTemplateVO.getCountryTemplate() != null) {
				List<CountryTemplate> countryTemplates = new ArrayList<>();
				for (CountryTemplateVO countryTemplateVO : carModelTemplateVO.getCountryTemplate()) {
					CountryTemplate countryTemplate = new CountryTemplate();
					BeanUtils.copyProperties(countryTemplate, countryTemplateVO);
					countryTemplates.add(countryTemplate);
				}
				carModelTemplate.setCountryTemplate(countryTemplates);
				carModelTemplateVO.setCountryTemplate(null);
			}

			if (carModelTemplateVO.getPhotosTemplate() != null) {
				List<PhotosTemplate> photosTemplates = new ArrayList<>();
				for (PhotosTemplateVO photosTemplateVO : carModelTemplateVO.getPhotosTemplate()) {
					PhotosTemplate photosTemplate = new PhotosTemplate();
					BeanUtils.copyProperties(photosTemplate, photosTemplateVO);
					photosTemplates.add(photosTemplate);
				}
				carModelTemplate.setPhotosTemplate(photosTemplates);
				carModelTemplateVO.setPhotosTemplate(null);
			}

			if (carModelTemplateVO.getSpecificationTemplate() != null) {
				SpecificationTemplate specificationTemplate = new SpecificationTemplate();
				BeanUtils.copyProperties(specificationTemplate, carModelTemplateVO.getSpecificationTemplate());
				carModelTemplate.setSpecificationTemplate(specificationTemplate);
				carModelTemplateVO.setSpecificationTemplate(null);
			}

			if (carModelTemplateVO.getUserReviewTemplate() != null) {
				List<UserReviewTemplate> userReviewTemplates = new ArrayList<>();
				for (UserReviewTemplateVO userReviewTemplateVO : carModelTemplateVO.getUserReviewTemplate()) {
					UserReviewTemplate userReviewTemplate = new UserReviewTemplate();
					BeanUtils.copyProperties(userReviewTemplate, userReviewTemplateVO);
					userReviewTemplates.add(userReviewTemplate);
				}
				carModelTemplate.setUserReviewTemplate(userReviewTemplates);
				carModelTemplateVO.setUserReviewTemplate(null);
			}

			if (carModelTemplateVO.getYoutubeTemplate() != null) {
				List<YoutubeTemplate> youtubeTemplates = new ArrayList<>();
				for (YoutubeTemplateVO youtubeTemplateVO : carModelTemplateVO.getYoutubeTemplate()) {
					YoutubeTemplate youtubeTemplate = new YoutubeTemplate();
					BeanUtils.copyProperties(youtubeTemplate, youtubeTemplateVO);
					youtubeTemplates.add(youtubeTemplate);
				}
				carModelTemplate.setYoutubeTemplate(youtubeTemplates);
				carModelTemplateVO.setYoutubeTemplate(null);
			}

			nullAwareBeanUtils.copyProperties(carModelTemplate, carModelTemplateVO);

		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return carModelTemplate;
	}

}
