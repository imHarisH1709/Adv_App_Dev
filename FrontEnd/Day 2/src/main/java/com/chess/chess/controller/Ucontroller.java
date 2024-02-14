package com.chess.chess.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import com.chess.chess.entity.SignupEntity;
import com.chess.chess.entity.UserBooking;
import com.chess.chess.service.Uservice;
import java.util.List;

@RestController
@RequestMapping("/api/UserBooking")
@CrossOrigin
public class Ucontroller {
@Autowired
    Uservice er;
    @PostMapping("/post/booking")
       public boolean createaevent(@RequestBody UserBooking wp) {
            return er.createaevent(wp);
       }
       @GetMapping("/book")
       
        public List<UserBooking> getAllBookings(){
            return er.getAllBookings();
        }

        @PutMapping("/update/booking/{email}")
        public ResponseEntity<UserBooking> updateBooking(@PathVariable String email, @RequestBody UserBooking wp) {
            UserBooking result = er.updateBooking(email, wp);
            
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
