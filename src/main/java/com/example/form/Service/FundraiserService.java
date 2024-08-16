package com.example.form.Service;



import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.form.Model.Fundraiser;
import com.example.form.Repository.FundraiserRepository;

@Service
public class FundraiserService {

    @Autowired
    private FundraiserRepository repository;

    public void saveFundraiser(Fundraiser fundraiser, MultipartFile proof, MultipartFile signature,
                               MultipartFile hospitalSign, MultipartFile doctorSign) throws IOException {
        if (proof != null && !proof.isEmpty()) {
            fundraiser.setProof(proof.getBytes());
        }
        if (signature != null && !signature.isEmpty()) {
            fundraiser.setSignature(signature.getBytes());
        }
        if (hospitalSign != null && !hospitalSign.isEmpty()) {
            fundraiser.setHospitalSign(hospitalSign.getBytes());
        }
        if (doctorSign != null && !doctorSign.isEmpty()) {
            fundraiser.setDoctorSign(doctorSign.getBytes());
        }
        repository.save(fundraiser);
    }

    public List<Fundraiser> getAllFundraisers() {
        return repository.findAll();
    }

    public Fundraiser getFundraiserById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
