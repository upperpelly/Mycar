package au.com.pnspvtltd.mcd.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.CarModelTemplate;
import au.com.pnspvtltd.mcd.repository.CarModelTemplateRepository;
import au.com.pnspvtltd.mcd.repository.CountyRegPostSubRepository;
import au.com.pnspvtltd.mcd.repository.FinanceCompRepository;
import au.com.pnspvtltd.mcd.repository.ServiceLevelRepository;
import au.com.pnspvtltd.mcd.service.CarModelTemplateService;
import au.com.pnspvtltd.mcd.service.CountyRegPostSubService;
import au.com.pnspvtltd.mcd.service.FinanceCompanyService;
import au.com.pnspvtltd.mcd.service.ServiceLevelService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;

@Service
public class FinanceComServiceImpl implements FinanceCompanyService {

	private static final Logger LOGGER = LoggerFactory.getLogger(FinanceComServiceImpl.class);

	@Autowired
	private FinanceCompRepository financeCompRepository;

	
	@Override
	public List<String> getAllFinance() {
		// TODO Auto-generated method stub
		List<String> levels = financeCompRepository.getAllFinance();
		return levels;
	}

	

	

	

}
