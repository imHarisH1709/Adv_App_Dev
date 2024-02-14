package com.chess.chess.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chess.chess.dto.Adddto;
import com.chess.chess.service.Addservice;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.transaction.Transactional;
@RestController
@RequestMapping("/add")
@CrossOrigin

public class Addcontroller {
     private final Addservice addservice;

    public Addcontroller(Addservice addservice) {
        this.addservice = addservice;
    }

    @GetMapping
    public ResponseEntity<List<Adddto>> getAllServices() {
        List<Adddto> services = addservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{coursename}")
    public ResponseEntity<Adddto> getServiceByCoursename(@PathVariable String coursename) {
        Adddto service = addservice.getServiceByCoursename(coursename);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Adddto> createService(@RequestBody Adddto service) {
        Adddto createdService = addservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/{coursename}")
    public ResponseEntity<Adddto> updateServiceByCoursename(@PathVariable String coursename, @RequestBody Adddto updatedService) {
        Adddto updatedServiceDto = addservice.updateServiceByCoursename(coursename, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Transactional
    @DeleteMapping("/{coursename}")
    public ResponseEntity<Void> deleteServiceByCoursename(@PathVariable String coursename) {
        addservice.deleteServiceByCoursename(coursename);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
