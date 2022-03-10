package com.teacherbooking.booktutor.services.Impl;

import com.teacherbooking.booktutor.domain.BookingForm;
import com.teacherbooking.booktutor.domain.request.SubmitBookingForm;
import com.teacherbooking.booktutor.mapper.BookingFormMapper;
import com.teacherbooking.booktutor.services.BookingFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingFormServiceImpl implements BookingFormService {
    @Autowired
    BookingFormMapper bookingFormMapper;
    @Override
    public BookingForm submitBookingForm(SubmitBookingForm submitBookingForm) {
        BookingForm bookingForm = BookingForm.builder()
                .address(submitBookingForm.getAddress())
                .date(submitBookingForm.getDate())
                .isParent(submitBookingForm.getIsParent())
                .primaryPhone(submitBookingForm.getPrimaryPhone())
                .secondaryPhone(submitBookingForm.getSecondaryPhone())
                .scheduleDate(submitBookingForm.getScheduleDate())
                .scheduleTime(submitBookingForm.getScheduleTime())
                .sub(submitBookingForm.getSub())
                .userClass(submitBookingForm.getUserClass())
                .userEmail(submitBookingForm.getUserEmail())
                .userName(submitBookingForm.getUserName())
                .build();
        return bookingFormMapper.saveBookingForm(bookingForm);
    }
}
