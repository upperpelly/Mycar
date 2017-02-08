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
import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.DealerRepository;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.DealerService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

@Service
public class DealerServiceImpl implements DealerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(DealerServiceImpl.class);

	@Autowired
	private DealerRepository dealerRepository;
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
	public DealerVO findById(Long id) {
		Dealer dealer = dealerRepository.findOne(id);
		DealerVO dealerVO = null;
		if(dealer != null){
			dealerVO = domainModelUtil.fromDealer(dealer, false);
			
			List<VehicleQuotation> vehicleQuotations = vehicleQuotationRepository.findByDealerId(id);
			List<VehicleQuotationVO> vehicleQuotationVOs = new ArrayList<>();
			for (VehicleQuotation vehicleQuotation : vehicleQuotations) {
				vehicleQuotationVOs.add(domainModelUtil.fromVehicleQuotation(vehicleQuotation));
			}
			dealerVO.setVehicleQuotation(vehicleQuotationVOs);

			List<InsuranceQuotation> insuranceQuotations = insuranceQuotationRepository.findByDealerId(id);
			List<InsuranceQuotationVO> insuranceQuotationVOs = new ArrayList<>();
			for (InsuranceQuotation insuranceQuotation : insuranceQuotations) {
				insuranceQuotationVOs.add(domainModelUtil.fromInsuranceQuotation(insuranceQuotation));
			}
			dealerVO.setInsuranceQuotation(insuranceQuotationVOs);

			List<FinanceQuotation> financeQuotations = financeQuotationRepository.findByDealerId(id);
			List<FinanceQuotationVO> financeQuotationVOs = new ArrayList<>();
			for (FinanceQuotation financeQuotation : financeQuotations) {
				financeQuotationVOs.add(domainModelUtil.fromFinanceQuotation(financeQuotation));
			}
			dealerVO.setFinanceQuotation(financeQuotationVOs);

			
		}
		return dealerVO;
	}

	@Override
	@Transactional
	public DealerVO createDealer(DealerVO dealerVO) {
		dealerVO.setDealerId(null);
		return domainModelUtil.fromDealer(dealerRepository.save(domainModelUtil.toDealer(dealerVO)), true);
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
		return domainModelUtil.fromDealer(dealer, true);

	}

	@Override
	@Transactional(readOnly = true)
	public List<DealerVO> findAllDealers() {
		List<DealerVO> dealerVOs = new ArrayList<>();
		for (Dealer dealer : dealerRepository.findAll()) {
			dealerVOs.add(domainModelUtil.fromDealer(dealer, true));
		}
		return dealerVOs;
	}

	@Override
	@Transactional(readOnly = true)
	public DealerVO findDealerByEmail(String email) {
		return domainModelUtil.fromDealer(dealerRepository.findByEmailIgnoreCase(email), true);
	}

	@Override
	@Transactional
	public String addInventory(InventoryVO inventoryVO) {
		Dealer dealer = dealerRepository.findOne(inventoryVO.getRefId());
		Inventory inventory = domainModelUtil.toInventory(inventoryVO);
		dealer.getInventory().add(inventory);
		dealerRepository.flush();
		return "{\"dealerId\":" + dealer.getDealerId() + ",\"inventoryId\":" + inventory.getRepoId() + "}";
	}

}
