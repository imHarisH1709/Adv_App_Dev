package com.chess.chess.service;

import com.chess.chess.entity.SignupEntity;
import com.chess.chess.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class service {
    @Autowired
    private SignupRepository er;
    
    public boolean createaevent(SignupEntity m) {
        return er.save(m) != null? true:false;
    }

       public List<SignupEntity> getAllBookings(){
        return er.findAll();
       }
       public void deleteEntityByEventNameL(Long id){
        er.deleteById(id);
       }

       public SignupEntity updateBooking(String email, SignupEntity wp) {
        SignupEntity existingModel = (SignupEntity) er.findByEmail(email);
    
        if (existingModel != null) {
            existingModel.setName(wp.getName());
            existingModel.setPhonenumber(wp.getPhonenumber());
            existingModel.setEmail(wp.getEmail());
            existingModel.setPassword(wp.getPassword());
            existingModel.setConfirmpassword(wp.getConfirmpassword());
    
            return er.save(existingModel);
        } else {
            return null; // Not found
        }
    }
}
