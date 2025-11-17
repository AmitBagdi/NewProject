package com.amit.portfolio.controller;

import com.amit.portfolio.model.Client;
import com.amit.portfolio.repository.ClientRepository;
import com.amit.portfolio.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Client> createClient(
            @RequestParam("name") String name,
            @RequestParam("designation") String designation,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile image) {

        String imageFilename = fileStorageService.store(image);

        Client client = new Client();
        client.setName(name);
        client.setDesignation(designation);
        client.setDescription(description);
        client.setImageFilename(imageFilename);

        Client savedClient = clientRepository.save(client);
        return new ResponseEntity<>(savedClient, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteClient(@PathVariable String id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));

        fileStorageService.delete(client.getImageFilename());
        clientRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
