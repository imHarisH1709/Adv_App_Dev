package com.chess.chess.repository;

import com.chess.chess.entity.SignupEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<SignupEntity, Long> {

    //  void deleteEntityByEventNameL(Long id);

    SignupEntity findByEmail(String email);
}
