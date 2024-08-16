package com.example.form.Controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.form.Model.Fundraiser;
import com.example.form.Service.FundraiserService;

@RestController
@RequestMapping("/api")
public class FundraiserController {

    @Autowired
    private FundraiserService service;

    @PostMapping("/fundraiser")
    public String createFundraiser(
            @ModelAttribute Fundraiser fundraiser,
            @RequestParam("proof") MultipartFile proof,
            @RequestParam("signature") MultipartFile signature,
            @RequestParam("hospitalSign") MultipartFile hospitalSign,
            @RequestParam("doctorSign") MultipartFile doctorSign) throws IOException {

        service.saveFundraiser(fundraiser, proof, signature, hospitalSign, doctorSign);
        return "Fundraiser created successfully!";
    }

    @GetMapping("/fundraisers")
    public List<Fundraiser> getAllFundraisers() {
        return service.getAllFundraisers();
    }

    @GetMapping("/fundraiser/{id}")
    public Fundraiser getFundraiserById(@PathVariable Long id) {
        return service.getFundraiserById(id);
    }
}
