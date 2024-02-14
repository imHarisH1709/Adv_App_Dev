package com.chess.chess.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="ulogin")
public class UserLogin {
     @Id
     private Long id;
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "password", nullable = false)
            private String password;
            public String getEmail() {
                return email;
            }
            public void setEmail(String email) {
                this.email = email;
            }
            public String getPassword() {
                return password;
            }
            public void setPassword(String password) {
                this.password = password;
            }
            public UserLogin(String email, String password) {
                this.email = email;
                this.password = password;
            }
            public UserLogin(){

            }
            
           

}
