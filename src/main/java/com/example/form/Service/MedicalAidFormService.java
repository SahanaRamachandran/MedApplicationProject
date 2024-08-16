package com.example.form.Service;



import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.form.Model.MedicalAidForm;
import com.example.form.Repository.MedicalAidFormRepository;

@Service
public class MedicalAidFormService {

    @Autowired
    private MedicalAidFormRepository repository;

    public void saveForm(MedicalAidForm form, MultipartFile proof, MultipartFile signature,
                         MultipartFile hospitalSign, MultipartFile doctorSign) throws IOException {
        if (proof != null && !proof.isEmpty()) {
            form.setProof(proof.getBytes());
        }
        if (signature != null && !signature.isEmpty()) {
            form.setSignature(signature.getBytes());
        }
        if (hospitalSign != null && !hospitalSign.isEmpty()) {
            form.setHospitalSign(hospitalSign.getBytes());
        }
        if (doctorSign != null && !doctorSign.isEmpty()) {
            form.setDoctorSign(doctorSign.getBytes());
        }
        repository.save(form);
    }
    public List<MedicalAidForm> getAllForms() {
        return repository.findAll();
    }
}
