package com.teacherbooking.booktutor.services;

import com.teacherbooking.booktutor.domain.BookingForm;
import com.teacherbooking.booktutor.domain.request.SubmitBookingForm;

public interface BookingFormService {
    BookingForm submitBookingForm(SubmitBookingForm submitBookingForm);
}
