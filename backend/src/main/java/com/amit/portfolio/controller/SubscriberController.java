package com.amit.portfolio.controller;

import com.amit.portfolio.model.Subscriber;
import com.amit.portfolio.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/subscribers")
public class SubscriberController {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @GetMapping
    public List<Subscriber> getAllSubscribers() {
        return subscriberRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Subscriber> createSubscriber(@Valid @RequestBody Subscriber subscriber) {
        Subscriber saved = subscriberRepository.save(subscriber);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
