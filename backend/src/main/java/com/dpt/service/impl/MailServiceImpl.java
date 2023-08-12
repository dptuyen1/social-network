/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
@PropertySource("classpath:mail.properties")
public class MailServiceImpl implements MailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private Environment env;

    @Override
    public boolean sendMail(String to, String email) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(env.getProperty("mail.username"));
            message.setTo(to);
            message.setSubject(env.getProperty("mail.subject"));
            String text = String.format(env.getProperty("mail.message"), email);
            message.setText(text);

            mailSender.send(message);
            return true;
        } catch (MailException ex) {
            ex.printStackTrace();
            return false;
        }
    }

}
