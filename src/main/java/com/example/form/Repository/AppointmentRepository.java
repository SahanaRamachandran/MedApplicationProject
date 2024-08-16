package com.example.form.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.form.Model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
