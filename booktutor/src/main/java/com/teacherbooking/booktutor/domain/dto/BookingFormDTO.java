package com.teacherbooking.booktutor.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingFormDTO {

    private Long Id;

    private Date date;

    private String userEmail;
    private String userName;
    private String userClass;
    private String address;
    private Long primaryPhone;
    private Long secondaryPhone;
    private Boolean isParent;
    private Date scheduleDate;
    private Time scheduleTime;
    private String sub;
}