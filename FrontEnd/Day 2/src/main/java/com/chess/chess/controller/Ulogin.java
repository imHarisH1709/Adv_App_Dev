package com.chess.chess.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.chess.chess.entity.UserBooking;
// import com.chess.chess.entity.SignupEntity;
import com.chess.chess.entity.UserLogin;
import com.chess.chess.service.Uloginservice;
// import com.chess.chess.service.Uservice;
// import com.chess.chess.service.service;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@RestController
@RequestMapping("/api/login")
public class Ulogin {
    @Autowired
    Uloginservice er;
    @PostMapping("/post/loginnn")
       public boolean createaevent(@RequestBody UserLogin wp) {
            return er.createaevent(wp);
       }
       @GetMapping("/logg")
       
        public List<UserLogin> getAllBookings(){
            return er.getAllBookings();
        }

        @PutMapping("/update/booking/{email}")
        public ResponseEntity<UserLogin> updateBooking(@PathVariable String email, @RequestBody UserLogin wp) {
            UserLogin result = er.updateBooking(email, wp);
            
            if (result != null) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.notFound().build();
            }
        }

        @DeleteMapping("/del/booking/{id}")
    public String deleteByEmail(@PathVariable Long id) {
        er.deleteEntityByEventNameL(id);
        return "deleted";
    }

}
