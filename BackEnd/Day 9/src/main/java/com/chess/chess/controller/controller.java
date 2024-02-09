package com.chess.chess.controller;

import com.chess.chess.entity.SignupEntity;
import com.chess.chess.service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/signup")
public class controller {
    @Autowired
    service r;
    @Autowired
    service er;
    @PostMapping("/post/sign")
       public boolean createaevent(@RequestBody SignupEntity wp) {
            return r.createaevent(wp);
       }
       @GetMapping("/sig")
        public List<SignupEntity> getAllBookings(){
            return r.getAllBookings();
        }
        @PutMapping("/update/booking/{email}")
        public ResponseEntity<SignupEntity> updateBooking(@PathVariable String email, @RequestBody SignupEntity wp) {
            SignupEntity result = er.updateBooking(email, wp);
            
            if (result != null) {
                return ResponseEntity.ok(result);
            } else {
                return ResponseEntity.notFound().build();
            }
        }

   
    @DeleteMapping("/del/booking/{id}")
    public String deleteByEmail(@PathVariable Long id) {
        r.deleteEntityByEventNameL(id);
        return "deleted";
    }


}
