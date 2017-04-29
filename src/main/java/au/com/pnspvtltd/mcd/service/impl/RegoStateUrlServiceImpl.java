package au.com.pnspvtltd.mcd.service.impl;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.DealerSearch;
import au.com.pnspvtltd.mcd.domain.DealerSearchFinance;
import au.com.pnspvtltd.mcd.domain.DealerSearchInsurance;
import au.com.pnspvtltd.mcd.domain.FinanceQuotation;
import au.com.pnspvtltd.mcd.domain.InsuranceQuotation;
import au.com.pnspvtltd.mcd.domain.Inventory;
import au.com.pnspvtltd.mcd.domain.RegoStateUrl;
import au.com.pnspvtltd.mcd.domain.VehicleQuotation;
import au.com.pnspvtltd.mcd.repository.DealerRepository;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.RegoStateUrlRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.DealerService;
import au.com.pnspvtltd.mcd.service.RegoStateUrlService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.DealerSearchFinanceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchInsuranceVO;
import au.com.pnspvtltd.mcd.web.model.DealerSearchVO;
import au.com.pnspvtltd.mcd.web.model.DealerVO;
import au.com.pnspvtltd.mcd.web.model.FinanceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InsuranceQuotationVO;
import au.com.pnspvtltd.mcd.web.model.InventoryListVO;
import au.com.pnspvtltd.mcd.web.model.InventoryStatisticsVO;
import au.com.pnspvtltd.mcd.web.model.InventoryVO;
import au.com.pnspvtltd.mcd.web.model.RegoStateUrlVO;
import au.com.pnspvtltd.mcd.web.model.TempCarModelHeaderVO;
import au.com.pnspvtltd.mcd.web.model.VehicleQuotationVO;

@Service
public class RegoStateUrlServiceImpl implements RegoStateUrlService {

	private static final Logger LOGGER = LoggerFactory.getLogger(RegoStateUrlServiceImpl.class);

	@Autowired
	private RegoStateUrlRepository regoStateUrlRepository;
	
	@Autowired
	private DomainModelUtil domainModelUtil;
	
	
	
	@Override
	public RegoStateUrlVO getRegoStateUrlFor(String modelYear, String modelDisplay) {
		
		RegoStateUrlVO regoStateUrlVO = new RegoStateUrlVO();
		
		RegoStateUrl regoStateUrl = regoStateUrlRepository.getRegoStateUrlFor(modelYear, modelDisplay);
		regoStateUrlVO = domainModelUtil.fromRegoStateUrl(regoStateUrl, true);
				
		return regoStateUrlVO;
	}
}
