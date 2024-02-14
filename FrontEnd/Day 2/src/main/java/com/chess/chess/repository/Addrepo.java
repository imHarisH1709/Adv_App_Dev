package com.chess.chess.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chess.chess.entity.Addentity;

@Repository
public interface Addrepo extends JpaRepository<Addentity, Long> {
    Addentity findByCoursename(String coursename);
    void deleteByCoursename(String coursename);
    // Other methods...
}