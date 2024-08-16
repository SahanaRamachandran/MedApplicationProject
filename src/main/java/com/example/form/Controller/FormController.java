package com.example.form.Controller;




import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.form.Model.MedicalAidForm;
import com.example.form.Service.MedicalAidFormService;

@RestController
@RequestMapping("/api")
public class FormController {

    @Autowired
    private MedicalAidFormService service;

    @PostMapping("/submit-form")
    public String submitForm(
            @ModelAttribute MedicalAidForm form,
            @RequestParam("proof") MultipartFile proof,
            @RequestParam("signature") MultipartFile signature,
            @RequestParam("hospitalSign") MultipartFile hospitalSign,
            @RequestParam("doctorSign") MultipartFile doctorSign) throws IOException {

        service.saveForm(form, proof, signature, hospitalSign, doctorSign);
        return "Form submitted successfully!";
    }
     @GetMapping("/forms")
    public List<MedicalAidForm> getAllForms() {
        return service.getAllForms();
    }
}
