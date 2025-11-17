package com.amit.portfolio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;
    @NotEmpty
    private String fullName;
    @Email
    private String email;
    private String mobile;
    private String city;
}
