package com.chess.chess.repository;

// import com.chess.chess.entity.SignupEntity;
import com.chess.chess.entity.UserBooking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBookingRepository extends JpaRepository<UserBooking, Long> {
    UserBooking findByEmail(String email);
}
