package com.backEnd.simProject.domain.member;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "members")
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", updatable = false)
    private Long memberId;

    @Column(name = "email", unique = true, length=50)
    private String email;

    @Column(name = "password", length=20)
    private String password;

    @Column(name = "authentication")
    private boolean authentication; //권한

    @Column(name = "nickname", unique = true, length=25)
    private String nickname;

    @Column(name = "name")
    private String name;    //본명

    @Column(name = "phone", unique = true, length=13)
    private String phone;

    @Column(name = "score")
    private float score;  //평판

    @CreatedDate
    @Column(name = "create_date", updatable = false)
    private LocalDateTime createDate;

    @Builder
    public Member(String email,String password,String nickname, String name,String phone){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.phone = phone;
    }
}
