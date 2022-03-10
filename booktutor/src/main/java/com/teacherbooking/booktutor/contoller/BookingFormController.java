package com.teacherbooking.booktutor.contoller;

import com.teacherbooking.booktutor.constant.Constant;
import com.teacherbooking.booktutor.domain.BookingForm;
import com.teacherbooking.booktutor.domain.request.SubmitBookingForm;
import com.teacherbooking.booktutor.services.BookingFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(path = Constant.TUTOR_BOOKING_PATH)
public class BookingFormController {

    @Autowired BookingFormService bookingFormService;

    @PostMapping(path = Constant.SUBMIT_BOOKING_FORM_PATH)
    public BookingForm submitBookingForm(HttpServletRequest httpServletRequest, @RequestBody SubmitBookingForm submitBookingForm){
        System.out.println(submitBookingForm.toString());
        return bookingFormService.submitBookingForm(submitBookingForm);

    }
}
