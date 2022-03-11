package com.teacherbooking.booktutor.contoller;

import com.teacherbooking.booktutor.constant.Constant;

import com.teacherbooking.booktutor.domain.dto.MailRequest;
import com.teacherbooking.booktutor.domain.dto.MailResponse;
import com.teacherbooking.booktutor.services.Impl.EmailServiceImpl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
	private EmailServiceImpl service;

	@PostMapping("/sendingEmail")
	public MailResponse sendEmail(@RequestBody MailRequest request) {
		Map<String, Object> model = new HashMap<>();
		model.put("Name", request.getName());
		model.put("location", "Patna Bihar");
		return service.sendEmail(request, model);

	}
}
