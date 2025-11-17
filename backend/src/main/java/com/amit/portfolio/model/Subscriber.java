package com.amit.portfolio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
@Document(collection = "subscribers")
public class Subscriber {
    @Id
    private String id;

    @Email
    @Indexed(unique = true)
    private String email;
}
