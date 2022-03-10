package com.teacherbooking.booktutor.repository;

import com.teacherbooking.booktutor.domain.BookingForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingFormRepository extends JpaRepository<BookingForm, Long> {
}
