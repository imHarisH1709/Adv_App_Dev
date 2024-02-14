package com.chess.chess.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.chess.chess.entity.SignupEntity;
import com.chess.chess.entity.UserLogin;
// import com.chess.chess.repository.SignupRepository;
import com.chess.chess.repository.ULoginRepository;
@Service
public class Uloginservice {
     @Autowired
    private ULoginRepository er;
    
    public boolean createaevent(UserLogin m) {
        return er.save(m) != null? true:false;
    }

       public List<UserLogin> getAllBookings(){
        return er.findAll();
       }
       public void deleteEntityByEventNameL(Long id){
        er.deleteById(id);
       }

       public UserLogin updateBooking(String email, UserLogin wp) {
        UserLogin existingModel = (UserLogin) er.findByEmail(email);
    
        if (existingModel != null) {
            existingModel.setEmail(wp.getEmail());
            existingModel.setPassword(wp.getPassword());
            return er.save(existingModel);
        } else {
            return null; // Not found
        }
    }

}
