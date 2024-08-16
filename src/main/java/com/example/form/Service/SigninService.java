package com.example.form.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.form.Model.Client;
import com.example.form.Repository.SigninRepository;

@Service
public class SigninService {
    @Autowired
    private final SigninRepository signinRepository;

    public SigninService(SigninRepository signinRepository) {
        this.signinRepository = signinRepository;
    }

    public Client createSignin(Client client) {
        return signinRepository.save(client);
    }

    public List<Client> getAllSignin() {
        return signinRepository.findAll();
    }

    public Client getSigninId(int clientId) {
        return signinRepository.findById(clientId).orElse(null);
    }

    // New method for authentication
    public Client authenticate(String firstname, String password) {
        return signinRepository.findByFirstnameAndPassword(firstname, password);
    }
}
