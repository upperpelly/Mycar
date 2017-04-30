package au.com.pnspvtltd.mcd.service;

import java.util.List;

import au.com.pnspvtltd.mcd.web.model.CarModelTemplateVO;

public interface ServiceLevelService {
	
	List<String> getAllLevels();

	
	List<String> existsLevel2ForLevel1(String level2);

	}
