package com.example.form.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.form.Model.Appointment;
import com.example.form.Repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private JavaMailSender mailSender;

    public Appointment saveAppointment(Appointment appointment) {
        Appointment savedAppointment = appointmentRepository.save(appointment);
        sendConfirmationEmail(savedAppointment);
        return savedAppointment;
    }

    public Iterable<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    private void sendConfirmationEmail(Appointment appointment) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(appointment.getEmail());
        message.setSubject("Appointment Confirmation");
        message.setText("Dear " + appointment.getName() + ",\n\nYour appointment is confirmed for " + appointment.getDate() + " at " + appointment.getTime() + ".\n\nThank you!");

        mailSender.send(message);
    }
}
