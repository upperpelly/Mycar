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

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.repository.DealerRepository;
import au.com.pnspvtltd.mcd.service.DealerService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;

@Service
public class DealerServiceImpl implements DealerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(DealerServiceImpl.class);

	@Autowired
	DealerRepository dealerRepository;

	@Override
	@Transactional(readOnly = true)
	public DealerVO findById(Long id) {
		Dealer dealer = dealerRepository.findOne(id);
		return (dealer != null ? DomainModelUtil.fromDealer(dealer) : null);
	}

	@Override
	@Transactional
	public DealerVO createDealer(DealerVO dealerVO) {
		dealerVO.setDealerId(null);
		return DomainModelUtil.fromDealer(dealerRepository.save(DomainModelUtil.toDealer(dealerVO)));
	}

	@Override
	@Transactional
	public DealerVO updateDealer(DealerVO dealerVO) {
		Dealer dealerToUpdate = dealerRepository.findOne(dealerVO.getDealerId());

		if (dealerToUpdate == null) {
			LOGGER.debug("Dealer with id {} does not exist", dealerVO.getDealerId());
			return null;
		}

		try {
			BeanUtils.copyProperties(dealerToUpdate, dealerVO);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Dealer dealer = dealerRepository.save(dealerToUpdate);
		return DomainModelUtil.fromDealer(dealer);

	}

	@Override
	@Transactional(readOnly = true)
	public List<DealerVO> findAllDealers() {
		List<DealerVO> dealerVOs = new ArrayList<>();
		for (Dealer dealer : dealerRepository.findAll()) {
			dealerVOs.add(DomainModelUtil.fromDealer(dealer));
		}
		return dealerVOs;
	}

	@Override
	@Transactional(readOnly = true)
	public DealerVO findDealerByEmail(String email) {
		return DomainModelUtil.fromDealer(dealerRepository.findByEmailIgnoreCase(email));
	}

	@Override
	@Transactional
	public String addInventory(InventoryVO inventoryVO) {
		Dealer dealer = dealerRepository.findOne(inventoryVO.getRefId());
		Inventory inventory = DomainModelUtil.toInventory(inventoryVO);
		dealer.getCarModel().add(inventory);
		dealerRepository.flush();
		return "{\"dealerId\":" + dealer.getDealerId() + ",\"inventoryId\":" + inventory.getRepoId() + "}";
	}

}
