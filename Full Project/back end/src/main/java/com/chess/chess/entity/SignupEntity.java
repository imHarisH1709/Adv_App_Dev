package com.chess.chess.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="signup")

public class SignupEntity {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "name", nullable = false)
            private String name;
            @Column(name = "phonenumber", nullable = false)
            private Long phonenumber;
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "password", nullable = false)
            private String password;
            @Column(name = "confirmpassword", nullable = false)
            private String confirmpassword;
            
            
            public Long getBid() {
                return bid;
            }
            public void setBid(Long bid) {
                this.bid = bid;
            }
            public String getName() {
                return name;
            }
            public void setName(String name) {
                this.name = name;
            }
            public Long getPhonenumber() {
                return phonenumber;
            }
            public void setPhonenumber(Long phonenumber) {
                this.phonenumber = phonenumber;
            }
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
            public String getConfirmpassword() {
                return confirmpassword;
            }
            public void setConfirmpassword(String confirmpassword) {
                this.confirmpassword = confirmpassword;
            }
            public SignupEntity(Long bid, String name, Long phonenumber, String email, String password,
                    String confirmpassword) {
                this.bid = bid;
                this.name = name;
                this.phonenumber = phonenumber;
                this.email = email;
                this.password = password;
                this.confirmpassword = confirmpassword;
            }   
        public SignupEntity(){

        }
}