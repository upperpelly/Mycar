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
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.DealerSearchFinance;
import au.com.pnspvtltd.mcd.domain.DealerSearchInsurance;
import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.MyVehicle;
import au.com.pnspvtltd.mcd.domain.MyVehicleFuelExpenses;
import au.com.pnspvtltd.mcd.domain.MyVehicleLogBook;
import au.com.pnspvtltd.mcd.domain.MyVehicleServMaint;
import au.com.pnspvtltd.mcd.domain.PhotosTemplate;
import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.SearchFinance;
import au.com.pnspvtltd.mcd.domain.SearchInsurance;
import au.com.pnspvtltd.mcd.domain.SpecificationTemplate;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.UserReviewTemplate;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.domain.YoutubeTemplate;
import au.com.pnspvtltd.mcd.web.model.BlogTemplateVO;
import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;
import au.com.pnspvtltd.mcd.web.model.ComingSoonVO;
import au.com.pnspvtltd.mcd.web.model.CountryTemplateVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleFuelExpensesVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleLogBookVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleServMaintVO;
import au.com.pnspvtltd.mcd.web.model.MyVehicleVO;
import au.com.pnspvtltd.mcd.web.model.PhotosTemplateVO;
import au.com.pnspvtltd.mcd.web.model.SearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.SearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.SearchVO;
import au.com.pnspvtltd.mcd.web.model.SpecificationTemplateVO;
import au.com.pnspvtltd.mcd.web.model.UserReviewTemplateVO;
import au.com.pnspvtltd.mcd.web.model.UserVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;
import au.com.pnspvtltd.mcd.web.model.YoutubeTemplateVO;

@Component
public class DomainModelUtil {

	@Autowired
	private NullAwareBeanUtils nullAwareBeanUtils;

	public UserVO fromUser(final User user, boolean isMinified) {

		if (user == null) {
			return null;
		}

		UserVO userVO = new UserVO();
		try {

			org.springframework.beans.BeanUtils.copyProperties(user, userVO, new String[] { "search", "searchInsurance",
					"searchFinance", "searchServMaint", "searchTransp", "myVehicle" });

			if (!isMinified) {
				List<SearchVO> searchVOs = new ArrayList<>();
				for (Search search : user.getSearch()) {
					SearchVO searchVO = new SearchVO();
					BeanUtils.copyProperties(searchVO, search);
					searchVOs.add(searchVO);
				}
				userVO.setSearch(searchVOs);

				List<SearchInsuranceVO> searchInsuranceVOs = new ArrayList<>();
				for (SearchInsurance searchInsurance : user.getSearchInsurance()) {
					SearchInsuranceVO SearchInsuranceVO = new SearchInsuranceVO();
					BeanUtils.copyProperties(SearchInsuranceVO, searchInsurance);
					searchInsuranceVOs.add(SearchInsuranceVO);
				}
				userVO.setSearchInsurance(searchInsuranceVOs);

				List<SearchFinanceVO> searchFinanceVOs = new ArrayList<>();
				for (SearchFinance searchFinance : user.getSearchFinance()) {
					SearchFinanceVO searchFinanceVO = new SearchFinanceVO();
					BeanUtils.copyProperties(searchFinanceVO, searchFinance);
					searchFinanceVOs.add(searchFinanceVO);
				}
				userVO.setSearchFinance(searchFinanceVOs);

				List<MyVehicleVO> myVehicleVOs = new ArrayList<>();
				for (MyVehicle myVehicle : user.getMyVehicle()) {
					MyVehicleVO myVehicleVO = new MyVehicleVO();
					BeanUtils.copyProperties(myVehicleVO, myVehicle);
					myVehicleVOs.add(myVehicleVO);
				}
				userVO.setMyVehicle(myVehicleVOs);

			}

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

	public MyVehicleLogBook toMyVehicleLogBook(final MyVehicleLogBookVO inventoryVO) {
		MyVehicleLogBook inventory = new MyVehicleLogBook();
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

	// User Car/MyVehicle Details lead
	public MyVehicle toMyVehicle(final MyVehicleVO searchVO) {

		MyVehicle search = new MyVehicle();
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

	// User Car/Search Details lead
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

	// User myVehicle/myVehicleLogBook Details lead
	public MyVehicleLogBook toLogBook(final MyVehicleLogBookVO searchVO) {

		MyVehicleLogBook search = new MyVehicleLogBook();
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

	// User myVehicle/myVehicleFuelExpenses Details lead
	public MyVehicleFuelExpenses toFuelExpenses(final MyVehicleFuelExpensesVO searchVO) {

		MyVehicleFuelExpenses search = new MyVehicleFuelExpenses();
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

	// User myVehicle/myVehicleFuelExpenses Details lead
	public MyVehicleServMaint toServMaint(final MyVehicleServMaintVO searchVO) {

		MyVehicleServMaint search = new MyVehicleServMaint();
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

	// Dealer Vehicle Lead
	public DealerSearch toDealerSearch(final SearchVO searchVO) {

		DealerSearch dealerSearch = new DealerSearch();
		try {
			BeanUtils.copyProperties(dealerSearch, searchVO);
			dealerSearch.setsPostCode(searchVO.getPostCode());
			dealerSearch.setsCarColor(searchVO.getCarColor());

		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerSearch;
	}

	// User Finance Lead
	public SearchFinance toSearchFinance(final SearchFinanceVO searchFinanceVO) {

		SearchFinance searchFinance = new SearchFinance();
		try {
			BeanUtils.copyProperties(searchFinance, searchFinanceVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return searchFinance;
	}

	// Dealer Finance Lead
	public DealerSearchFinance toDealerSearchFinance(final SearchFinanceVO searchFinanceVO) {

		DealerSearchFinance dealerSearchFinance = new DealerSearchFinance();
		try {
			BeanUtils.copyProperties(dealerSearchFinance, searchFinanceVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerSearchFinance;
	}

	// User Insurance Lead
	public SearchInsurance toSearchInsurance(final SearchInsuranceVO searchInsuranceVO) {

		SearchInsurance searchInsurance = new SearchInsurance();
		try {
			BeanUtils.copyProperties(searchInsurance, searchInsuranceVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return searchInsurance;
	}

	// Dealer Insurance Lead
	public DealerSearchInsurance toDealerSearchInsurance(final SearchInsuranceVO searchInsuranceVO) {

		DealerSearchInsurance dealerSearchInsurance = new DealerSearchInsurance();
		try {
			BeanUtils.copyProperties(dealerSearchInsurance, searchInsuranceVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerSearchInsurance;
	}

	public DealerVO fromDealer(final Dealer dealer, boolean isMinified) {

		if (dealer == null) {
			return null;
		}

		DealerVO dealerVO = new DealerVO();
		try {

			org.springframework.beans.BeanUtils.copyProperties(dealer, dealerVO,
					new String[] { "inventory", "dealSearch", "dealSearchInsurance", "dealSearchFinance",
							"dealSearchServMaint", "dealSearchTransp" });

			if (!isMinified) {

				List<InventoryVO> inventoryVOs = new ArrayList<>();
				for (Inventory inventory : dealer.getInventory()) {
					InventoryVO inventoryVO = new InventoryVO();
					BeanUtils.copyProperties(inventoryVO, inventory);
					inventoryVOs.add(inventoryVO);
				}
				dealerVO.setInventory(inventoryVOs);

				List<DealerSearchVO> searchVOs = new ArrayList<>();
				for (DealerSearch search : dealer.getDealSearch()) {
					DealerSearchVO searchVO = new DealerSearchVO();
					BeanUtils.copyProperties(searchVO, search);
					searchVOs.add(searchVO);
				}
				dealerVO.setDealSearch(searchVOs);

				List<DealerSearchInsuranceVO> searchInsuranceVOs = new ArrayList<>();
				for (DealerSearchInsurance searchInsurance : dealer.getDealSearchInsurance()) {
					DealerSearchInsuranceVO SearchInsuranceVO = new DealerSearchInsuranceVO();
					BeanUtils.copyProperties(SearchInsuranceVO, searchInsurance);
					searchInsuranceVOs.add(SearchInsuranceVO);
				}
				dealerVO.setDealSearchInsurance(searchInsuranceVOs);

				List<DealerSearchFinanceVO> searchFinanceVOs = new ArrayList<>();
				for (DealerSearchFinance searchFinance : dealer.getDealSearchFinance()) {
					DealerSearchFinanceVO searchFinanceVO = new DealerSearchFinanceVO();
					BeanUtils.copyProperties(searchFinanceVO, searchFinance);
					searchFinanceVOs.add(searchFinanceVO);
				}
				dealerVO.setDealSearchFinance(searchFinanceVOs);

			}

		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return dealerVO;
	}

	public DealerSearchVO fromDealerSearch(final DealerSearch dealerSearch) {
		DealerSearchVO searchVO = new DealerSearchVO();
		try {
			BeanUtils.copyProperties(searchVO, dealerSearch);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return searchVO;
	}

	public DealerSearchInsuranceVO fromDealerSearchInsurance(final DealerSearchInsurance dealerSearchInsurance) {
		DealerSearchInsuranceVO dealerSearchInsuranceVO = new DealerSearchInsuranceVO();
		try {
			BeanUtils.copyProperties(dealerSearchInsuranceVO, dealerSearchInsurance);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerSearchInsuranceVO;
	}

	public DealerSearchFinanceVO fromDealerSearchFinance(final DealerSearchFinance dealerSearchFinance) {
		DealerSearchFinanceVO dealerSearchFinanceVO = new DealerSearchFinanceVO();
		try {
			BeanUtils.copyProperties(dealerSearchFinanceVO, dealerSearchFinance);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dealerSearchFinanceVO;
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

	public VehicleQuotationVO fromVehicleQuotation(final VehicleQuotation vehicleQuotation) {
		VehicleQuotationVO vehicleQuotationVO = new VehicleQuotationVO();
		try {
			BeanUtils.copyProperties(vehicleQuotationVO, vehicleQuotation);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return vehicleQuotationVO;
	}

	public InsuranceQuotationVO fromInsuranceQuotation(final InsuranceQuotation insuranceQuotation) {
		InsuranceQuotationVO insuranceQuotationVO = new InsuranceQuotationVO();
		try {
			BeanUtils.copyProperties(insuranceQuotationVO, insuranceQuotation);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return insuranceQuotationVO;
	}

	public FinanceQuotationVO fromFinanceQuotation(final FinanceQuotation financeQuotation) {
		FinanceQuotationVO financeQuotationVO = new FinanceQuotationVO();
		try {
			BeanUtils.copyProperties(financeQuotationVO, financeQuotation);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return financeQuotationVO;
	}

}
