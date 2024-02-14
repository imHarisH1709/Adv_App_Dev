package com.chess.chess.repository;
import com.chess.chess.entity.UserLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ULoginRepository extends JpaRepository<UserLogin, Long> {

    //  void deleteEntityByEventNameL(Long id);

    UserLogin findByEmail(String email);
}
