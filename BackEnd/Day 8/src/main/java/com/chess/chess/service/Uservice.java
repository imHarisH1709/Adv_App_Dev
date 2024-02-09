package com.chess.chess.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.chess.chess.entity.SignupEntity;
import com.chess.chess.entity.UserBooking;
import com.chess.chess.repository.UserBookingRepository;
@Service
public class Uservice {
   @Autowired
    private UserBookingRepository er;
    
    public boolean createaevent(UserBooking m) {
        return er.save(m) != null? true:false;
    }

       public List<UserBooking> getAllBookings(){
        return er.findAll();
       }

       public UserBooking updateBooking(String email, UserBooking wp) {
        UserBooking existingModel = (UserBooking) er.findByEmail(email);
    
        if (existingModel != null) {
            existingModel.setName(wp.getName());
            existingModel.setPhonenumber(wp.getPhonenumber());
            existingModel.setPhonenumber(wp.getAlternatephonenumber());
            existingModel.setEmail(wp.getEmail());
            existingModel.setAge(wp.getAge());
            existingModel.setAddress(wp.getAddress());
    
            return er.save(existingModel);
        } else {
            return null; // Not found
        }
    }

    public void deleteEntityByEventNameL(Long id){
        er.deleteById(id);
       }
}
