package au.com.pnspvtltd.mcd.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.service.SearchService;
import au.com.pnspvtltd.mcd.web.model.SearchVO;

@RestController
public class SearchController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	SearchService searchService;

	@PostMapping("search/car")
	public String searchForCar(@RequestBody SearchVO searchVO) {
		return searchService.whenUserSearchForCar(searchVO);
	}
}
