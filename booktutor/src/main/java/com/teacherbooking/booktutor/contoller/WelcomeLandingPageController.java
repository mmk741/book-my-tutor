package com.teacherbooking.booktutor.contoller;

import com.teacherbooking.booktutor.constant.Constant;
import com.teacherbooking.booktutor.dto.MailRequest;
import com.teacherbooking.booktutor.dto.MailResponse;
import com.teacherbooking.booktutor.services.EmailService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = Constant.TUTOR_BOOKING_PATH)
public class WelcomeLandingPageController {

    @GetMapping(path = Constant.TUTOR_BOOKING_WELCOME_PATH)
    public String welcome(){
        return "Book your tutor in a min";
    }
    
    
    @Autowired
	private EmailService service;

	@PostMapping("/sendingEmail")
	public MailResponse sendEmail(@RequestBody MailRequest request) {
		Map<String, Object> model = new HashMap<>();
		model.put("Name", request.getName());
		model.put("location", "Patna Bihar");
		return service.sendEmail(request, model);

	}
}
