package com.db.hackathon.dementia.archtech.login.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name="userlogin")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="USER_LOGIN")
public class ArchTechLogin {
    
	@Id
	@Column(name="USERID")
	@JsonProperty("userid")
	private String userID;
	
	@Column(name="USERNAME")
	@JsonProperty("username")
	private String userName;
	
	@Column(name="USERROLE")
	@JsonProperty("userrole")
	private String userRole;
	
	
	
}
