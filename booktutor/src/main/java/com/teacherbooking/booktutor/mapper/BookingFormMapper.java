package com.teacherbooking.booktutor.mapper;

import com.teacherbooking.booktutor.domain.BookingForm;
import com.teacherbooking.booktutor.domain.dto.BookingFormDTO;
import com.teacherbooking.booktutor.domain.request.SubmitBookingForm;
import com.teacherbooking.booktutor.repository.BookingFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookingFormMapper {

    @Autowired
    BookingFormRepository bookingFormRepository;

    public BookingFormDTO buildBookingFormDTO(BookingForm bookingForm){
        return BookingFormDTO
                .builder()
                .Id(bookingForm.getId())
                .address(bookingForm.getAddress())
                .date(bookingForm.getDate())
                .isParent(bookingForm.getIsParent())
                .primaryPhone(bookingForm.getPrimaryPhone())
                .secondaryPhone(bookingForm.getSecondaryPhone())
                .scheduleDate(bookingForm.getScheduleDate())
                .scheduleTime(bookingForm.getScheduleTime())
                .sub(bookingForm.getSub())
                .userClass(bookingForm.getUserClass())
                .userEmail(bookingForm.getUserEmail())
                .userName(bookingForm.getUserName())
                .build();
    }

    public BookingForm buildBookingForm(BookingFormDTO bookingFormDTO){
        return BookingForm
                .builder()
                .Id(bookingFormDTO.getId())
                .address(bookingFormDTO.getAddress())
                .date(bookingFormDTO.getDate())
                .isParent(bookingFormDTO.getIsParent())
                .primaryPhone(bookingFormDTO.getPrimaryPhone())
                .secondaryPhone(bookingFormDTO.getSecondaryPhone())
                .scheduleDate(bookingFormDTO.getScheduleDate())
                .scheduleTime(bookingFormDTO.getScheduleTime())
                .sub(bookingFormDTO.getSub())
                .userClass(bookingFormDTO.getUserClass())
                .userEmail(bookingFormDTO.getUserEmail())
                .userName(bookingFormDTO.getUserName())
                .build();
    }

    public BookingForm saveBookingForm(BookingForm bookingForm) {
        return bookingFormRepository.save(bookingForm);
    }
}
