package com.example.form.Model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Fundraiser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String address;
    private String aadhaar;
    private String secondaryContact;
    private Date neededDate;
    private String need;
    private String bloodType;
    private Integer units;
    private String organType;
    private String additionalInfo;

    private String description;
    private String imageUrl;
    private double targetAmount;
    private double raisedAmount;
    private int supporters;
    private int daysLeft;

    @Lob
    private byte[] proof;
    @Lob
    private byte[] signature;
    @Lob
    private byte[] hospitalSign;
    @Lob
    private byte[] doctorSign;
}
