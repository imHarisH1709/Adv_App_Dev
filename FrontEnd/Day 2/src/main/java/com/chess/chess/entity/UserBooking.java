package com.chess.chess.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ubooking")
public class UserBooking {
        @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long bid;
            @Column(name = "name", nullable = false)
            private String name;
            @Column(name = "phonenumber", nullable = false)
            private Long phonenumber;
            @Column(name = "alternatephonenumber", nullable = false)
            private Long alternatephonenumber;
            @Column(name = "email", nullable = false,unique = true)
            private String email;
            @Column(name = "age", nullable = false)
            private int age;
            @Column(name = "address", nullable = false)
            private String address;
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
            public Long getAlternatephonenumber() {
                return alternatephonenumber;
            }
            public void setAlternatephonenumber(Long alternatephonenumber) {
                this.alternatephonenumber = alternatephonenumber;
            }
            public String getEmail() {
                return email;
            }
            public void setEmail(String email) {
                this.email = email;
            }
            public int getAge() {
                return age;
            }
            public void setAge(int age) {
                this.age = age;
            }
            public String getAddress() {
                return address;
            }
            public void setAddress(String address) {
                this.address = address;
            }
            public UserBooking(Long bid, String name, Long phonenumber, Long alternatephonenumber, String email,
                    int age, String address) {
                this.bid = bid;
                this.name = name;
                this.phonenumber = phonenumber;
                this.alternatephonenumber = alternatephonenumber;
                this.email = email;
                this.age = age;
                this.address = address;
            }
            public UserBooking(){

            }
            
            
}
