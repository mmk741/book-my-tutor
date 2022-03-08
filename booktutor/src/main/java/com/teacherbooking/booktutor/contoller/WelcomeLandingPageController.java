package com.teacherbooking.booktutor.contoller;

import com.teacherbooking.booktutor.constant.Constant;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = Constant.TUTOR_BOOKING_PATH)
public class WelcomeLandingPageController {

    @GetMapping(path = Constant.TUTOR_BOOKING_WELCOME_PATH)
    public String welcome(){
        return "Book your tutor in a min";
    }
}
