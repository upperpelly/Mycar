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
import au.com.pnspvtltd.mcd.service.CarModelTemplateService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;

@Service
public class CarModelTemplateServiceImpl implements CarModelTemplateService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CarModelTemplateServiceImpl.class);

	@Autowired
	private CarModelTemplateRepository carModelTemplateRepository;
	@Autowired
	private DomainModelUtil domainModelUtil;

	@Override
	@Transactional(readOnly = true)
	public CarModelTemplateVO getCarModelTemplateFor(String modelYear, String modelDisplay, String modelName,
			String modelTrim) {

		return domainModelUtil.fromCarModelTemplate(
				carModelTemplateRepository.getCarModelTemplateFor(modelYear, modelDisplay, modelName, modelTrim),
				false);
	}

	@Override
	@Transactional
	public CarModelTemplateVO createCarModelTemplate(CarModelTemplateVO carModelTemplateVO) {
		CarModelTemplate carModelTemplate = carModelTemplateRepository
				.save(domainModelUtil.toCarModelTemplate(carModelTemplateVO));
		return domainModelUtil.fromCarModelTemplate(carModelTemplate, true);
	}

	@Override
	@Transactional(readOnly = true)
	public List<CarModelTemplateVO> getAllCarModelTemplates() {
		List<CarModelTemplate> carModelTemplates = carModelTemplateRepository.findAll();
		List<CarModelTemplateVO> carModelTemplateVOs = new ArrayList<>();
		for (CarModelTemplate carModelTemplate : carModelTemplates) {
			carModelTemplateVOs.add(domainModelUtil.fromCarModelTemplate(carModelTemplate, false));
		}
		return carModelTemplateVOs;
	}

}
