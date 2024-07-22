package com.db.hackathon.dementia.archtech.login.service;

import java.util.List;

import com.db.hackathon.dementia.archtech.login.entity.ArchTechLogin;

public interface ArchTechLoginService {

	public List<ArchTechLogin> getAllArchTechLogin();

	public List<ArchTechLogin> getArchTechLoginById(String userid);
}
