package com.teacherbooking.booktutor.domain;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table
public class BookingForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id", columnDefinition = "BIGINT")
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
