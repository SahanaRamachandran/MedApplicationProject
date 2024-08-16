package com.example.form.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.form.Model.Fundraiser;

@Repository
public interface FundraiserRepository extends JpaRepository<Fundraiser, Long> {
}
