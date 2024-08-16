package com.example.form.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.form.Model.Client;

@Repository
public interface SigninRepository extends JpaRepository<Client, Integer> {
    Client findByFirstnameAndPassword(String firstname, String password);
}
