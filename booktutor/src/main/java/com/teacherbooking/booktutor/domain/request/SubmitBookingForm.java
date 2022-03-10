package com.teacherbooking.booktutor.domain.request;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmitBookingForm {



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

    @JsonCreator
    public SubmitBookingForm(@JsonProperty("userEmail") String userEmail, @JsonProperty("userName") String userName, @JsonProperty("userClass") String userClass,
                             @JsonProperty("address") String address, @JsonProperty("primaryPhone") Long primaryPhone, @JsonProperty("secondaryPhone") Long secondaryPhone,
                             @JsonProperty("isParent") Boolean isParent, @JsonProperty("scheduleDate") Date scheduleDate, @JsonProperty("scheduleTime") Time scheduleTime,
                             @JsonProperty("sub") String sub, @JsonProperty("Date") Date date) {

        this.userEmail = userEmail;
        this.userName = userName;
        this.userClass = userClass;
        this.address = address;
        this.primaryPhone = primaryPhone;
        this.secondaryPhone = secondaryPhone;
        this.isParent = isParent;
        this.scheduleDate = scheduleDate;
        this.scheduleTime = scheduleTime;
        this.sub = sub;
    }

    private void validate(){
        try{
//            Validate.notNull()
//  TODO
        }catch (Exception e){

        }
    }
}
