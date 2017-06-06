package au.com.pnspvtltd.mcd.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomePageController {

	@RequestMapping("/")
	public String showWelcomePage(){
		return "forward:/travelo-travel-tour-booking-html5-template/html/Hm_BetaV1.html";
	}
}
