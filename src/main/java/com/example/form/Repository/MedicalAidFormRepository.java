package com.example.form.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.form.Model.MedicalAidForm;

public interface MedicalAidFormRepository extends JpaRepository<MedicalAidForm, Long> {
}
