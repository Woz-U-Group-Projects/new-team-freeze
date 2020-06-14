package com.example.groupprojects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/studentprofile")
public class StudentProfileController {

  @Autowired
  StudentProfileRepository studentProfileRepository;

  @GetMapping()
  public List<StudentProfile> getStudentProfiles() {
    return studentProfileRepository.findAll();
  }

  @PostMapping()
  public StudentProfile addStudentProfile(@RequestBody StudentProfile studentProfile) {
    return studentProfileRepository.save(studentProfile);
  }

  @DeleteMapping("/{id}")
  public void deleteStudentProfile(@PathVariable Long id) {
    studentProfileRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public StudentProfile updateProject(@PathVariable Long id, @RequestBody StudentProfile studentProfile) {
    StudentProfile foundStudentProfile = studentProfileRepository.findById(id).orElse(null);
    if (foundStudentProfile != null) {
    	foundStudentProfile.setFirstname(studentProfile.getFirstname());
    	foundStudentProfile.setLastname(studentProfile.getLastname());
    	foundStudentProfile.setUsername(studentProfile.getUsername());
    	foundStudentProfile.setGradein(studentProfile.getGradein());
      studentProfileRepository.save(foundStudentProfile);
      return foundStudentProfile;
    }
    return null;
  }

}
