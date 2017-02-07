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

import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.UserService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.UserVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

@Service
public class UserServiceImpl implements UserService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private VehicleQuotationRepository vehicleQuotationRepository;
	@Autowired
	private InsuranceQuotationRepository insuranceQuotationRepository;
	@Autowired
	private FinanceQuotationRepository financeQuotationRepository;
	@Autowired
	private DomainModelUtil domainModelUtil;

	@Override
	@Transactional(readOnly = true)
	public UserVO findById(Long id) {
		UserVO userVO = null;
		User user = userRepository.findOne(id);
		if (user != null) {
			userVO = domainModelUtil.fromUser(user, false);

			List<VehicleQuotation> vehicleQuotations = vehicleQuotationRepository.getQuotationsForUser(id);
			List<VehicleQuotationVO> vehicleQuotationVOs = new ArrayList<>();
			for (VehicleQuotation vehicleQuotation : vehicleQuotations) {
				vehicleQuotationVOs.add(domainModelUtil.fromVehicleQuotation(vehicleQuotation));
			}
			userVO.setVehicleQuotation(vehicleQuotationVOs);

			List<InsuranceQuotation> insuranceQuotations = insuranceQuotationRepository.getQuotationsForUser(id);
			List<InsuranceQuotationVO> insuranceQuotationVOs = new ArrayList<>();
			for (InsuranceQuotation insuranceQuotation : insuranceQuotations) {
				insuranceQuotationVOs.add(domainModelUtil.fromInsuranceQuotation(insuranceQuotation));
			}
			userVO.setInsuranceQuotation(insuranceQuotationVOs);

			List<FinanceQuotation> financeQuotations = financeQuotationRepository.getQuotationsForUser(id);
			List<FinanceQuotationVO> financeQuotationVOs = new ArrayList<>();
			for (FinanceQuotation financeQuotation : financeQuotations) {
				financeQuotationVOs.add(domainModelUtil.fromFinanceQuotation(financeQuotation));
			}
			userVO.setFinanceQuotation(financeQuotationVOs);

		}
		return userVO;
	}

	@Override
	@Transactional
	public UserVO createUser(UserVO userVO) {
		userVO.setUserId(null);
		return domainModelUtil.fromUser(userRepository.save(domainModelUtil.toUser(userVO)), true);
	}

	@Override
	@Transactional
	public UserVO updateUser(UserVO userVO) {
		User userToUpdate = userRepository.findOne(userVO.getUserId());

		if (userToUpdate == null) {
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
		return domainModelUtil.fromUser(user, false);
	}

	@Override
	@Transactional(readOnly = true)
	public List<UserVO> findAllUsers() {
		List<UserVO> userVOs = new ArrayList<>();
		for (User user : userRepository.findAll()) {
			userVOs.add(domainModelUtil.fromUser(user, true));
		}
		return userVOs;
	}

	@Override
	@Transactional(readOnly = true)
	public UserVO findUserByEmail(String email) {
		return domainModelUtil.fromUser(userRepository.findByEmailIgnoreCase(email), true);
	}

}
