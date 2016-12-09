package au.com.pnspvtltd.mcd.web.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import au.com.pnspvtltd.mcd.service.UserService;
import au.com.pnspvtltd.mcd.web.model.User;



@RestController
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	@GetMapping(value = "user/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE  })   
    public @ResponseBody User getUser(@PathVariable Long id) {
		LOGGER.debug("Received request to get User with id {} ", id);
		return userService.findById(id);
    }
	
	@PostMapping("user")
    public User createUser(@RequestBody User user) {
		LOGGER.debug("Received request to create User {}", user);
		return userService.createUser(user);
    }
	
	@PutMapping(value = "user")
    public User updateUser(@RequestBody User user) {
        LOGGER.debug("Received request to update User {}", user);
        return userService.updateUser(user);
    }
	
	@GetMapping(value = "user", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE  })   
    public @ResponseBody List<User> getAllUsers() {
		LOGGER.debug("Received request to get all Users");
		return userService.findAllUsers();
    }
}
