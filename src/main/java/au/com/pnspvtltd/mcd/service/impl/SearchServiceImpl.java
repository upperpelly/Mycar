package au.com.pnspvtltd.mcd.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.domain.User;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.service.SearchService;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;
import au.com.pnspvtltd.mcd.web.model.SearchVO;

@Service
public class SearchServiceImpl implements SearchService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public String whenUserSearchForCar(SearchVO searchVO) {

		User user = userRepository.findOne(searchVO.getUserId());
		Search search = DomainModelUtil.toSearch(searchVO);
		user.getCarModel().add(search);
		userRepository.flush();
		return "{\"userId\":" + searchVO.getUserId() + ",\"searchId\":" + search.getCarSearchId() + "}";

	}

}
