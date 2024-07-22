package com.db.hackathon.dementia.archtech.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.db.hackathon.dementia.archtech.login.entity.ArchTechLogin;
import com.db.hackathon.dementia.archtech.login.entity.User;
import com.db.hackathon.dementia.archtech.login.service.ArchTechLoginService;
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobException;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.TableResult;

@RestController
@CrossOrigin
public class ArchTechController {
	
	@Autowired
	private ArchTechLoginService archTechLoginService;
	
	@GetMapping("/archtechlogin/all")
	public List<ArchTechLogin> getAllArchTechLogin()
	{
		return archTechLoginService.getAllArchTechLogin();
	}

	
	  @GetMapping("/archtechlogin/{userid}") public
	  ResponseEntity<List<ArchTechLogin>> getUserById(@PathVariable("userid")
	  String userid) {
	  
	  
	  Optional<List<ArchTechLogin>> archTechLoginOptional =
	  Optional.of(archTechLoginService.getArchTechLoginById(userid));
	
	  if (archTechLoginOptional.isPresent()) { return
	  ResponseEntity.ok(archTechLoginOptional.get()); } else { return
	  ResponseEntity.notFound().build(); }
	  
	  }
	 
	  @GetMapping("/archtech/get-nearby-users/{lat}/{lng}/{role}")
	  public List<User> getNearbyUsers(@PathVariable("lat") double lat, @PathVariable("lng") double lng, @PathVariable("role") String role ) throws JobException, InterruptedException{
		  
		  System.out.println("Call received");
		  BigQuery bigquery = BigQueryOptions.getDefaultInstance().getService();
		    QueryJobConfiguration queryConfig =
		        QueryJobConfiguration.newBuilder(
		                "SELECT * FROM users_dataset.users")
		            // Use standard SQL syntax for queries.
		            // See: https://cloud.google.com/bigquery/sql-reference/
		            .setUseLegacySql(false)
		            .build();

		    // Create a job ID so that we can safely retry.
		    JobId jobId = JobId.of(UUID.randomUUID().toString());
		    Job queryJob = bigquery.create(JobInfo.newBuilder(queryConfig).setJobId(jobId).build());

		    // Wait for the query to complete.
		    queryJob = queryJob.waitFor();

		    // Check for errors
		    if (queryJob == null) {
		      throw new RuntimeException("Job no longer exists");
		    } else if (queryJob.getStatus().getError() != null) {
		      // You can also look at queryJob.getStatus().getExecutionErrors() for all
		      // errors, not just the latest one.
		      throw new RuntimeException(queryJob.getStatus().getError().toString());
		    }

		    // Get the results.
		    TableResult result = queryJob.getQueryResults();

		    List<User> userList = new ArrayList<>();
		    // Print all pages of the results.
		    for (FieldValueList row : result.iterateAll()) {
		      // String type
		      User user = new User();
		      user.setId(row.get("id").getLongValue());
		      user.setFirstName(row.get("firstName").getStringValue());
		      user.setLastName(row.get("lastName").getStringValue());
		      user.setCity(row.get("city").getStringValue());
		      user.setEmail(row.get("email").getStringValue());
		      user.setRole(row.get("role").getStringValue());
		      user.setLatitude(row.get("latitude").getDoubleValue());
		      user.setLongitude(row.get("longitude").getDoubleValue());
		      
		      userList.add(user);
		    }
		    
			return userList;
		  
	  }
}
