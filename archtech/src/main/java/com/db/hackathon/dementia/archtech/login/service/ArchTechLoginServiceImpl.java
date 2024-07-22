package com.db.hackathon.dementia.archtech.login.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.hackathon.dementia.archtech.login.entity.ArchTechLogin;
import com.db.hackathon.dementia.archtech.login.repository.ArchTechLoginRepository;

@Service
public class ArchTechLoginServiceImpl implements ArchTechLoginService{
	
	@Autowired
	private ArchTechLoginRepository archTechLoginRepository;

	@Override
	public List<ArchTechLogin> getAllArchTechLogin() {
		return (List<ArchTechLogin>) archTechLoginRepository.getAllArchTechLogin();
	}

	@Override
	public List<ArchTechLogin> getArchTechLoginById(String userid) {
		// TODO Auto-generated method stub
		return (List<ArchTechLogin>) archTechLoginRepository.getArchTechLoginById(userid);
	}
	
}
