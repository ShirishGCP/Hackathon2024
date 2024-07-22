package com.db.hackathon.dementia.archtech.login.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.db.hackathon.dementia.archtech.login.entity.ArchTechLogin;

@Repository
public interface ArchTechLoginRepository extends CrudRepository<ArchTechLogin, Long>
{
	@Query("SELECT u FROM userlogin u")
	List<ArchTechLogin> getAllArchTechLogin();

	@Query("SELECT u FROM userlogin u WHERE u.userID = :userid")
	List<ArchTechLogin> getArchTechLoginById(String userid);


}
