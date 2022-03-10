package com.teacherbooking.booktutor.services;

import com.teacherbooking.booktutor.domain.dto.MailRequest;
import com.teacherbooking.booktutor.domain.dto.MailResponse;

import java.util.Map;

public interface EmailService {
    public MailResponse sendEmail(MailRequest request, Map<String, Object> model);
}
