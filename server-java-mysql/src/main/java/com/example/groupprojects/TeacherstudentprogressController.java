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
@RequestMapping("/teacher")
public class TeacherstudentprogressController {

  @Autowired
  TeacherstudentprogressRepository teacherstudentprogressRepository;

  @GetMapping()
  public List<Teacherstudentprogress> getTeachermaths() {
    return teacherstudentprogressRepository.findAll();
  }

  @PostMapping()
  public Teacherstudentprogress addTeachermath(@RequestBody Teacherstudentprogress teacherstudentprogress) {
    return teacherstudentprogressRepository.save(teacherstudentprogress);
  }

  @DeleteMapping("/{id}")
  public void deleteTeacherstudentprogress(@PathVariable Long id) {
    teacherstudentprogressRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Teacherstudentprogress updateProject(@PathVariable Long id, @RequestBody Teacherstudentprogress teacherstudentprogress) {
    Teacherstudentprogress foundTeacherstudentprogress = teacherstudentprogressRepository.findById(id).orElse(null);
    if (foundTeacherstudentprogress != null) {
    	foundTeacherstudentprogress.setFirstname(teacherstudentprogress.getFirstname());
    	foundTeacherstudentprogress.setLastname(teacherstudentprogress.getLastname());
    	foundTeacherstudentprogress.setMathprogress(teacherstudentprogress.getMathprogress());
    	foundTeacherstudentprogress.setReadingprogress(teacherstudentprogress.getReadingprogress());
    	foundTeacherstudentprogress.setSocialstudiesprogress(teacherstudentprogress.getSocialstudiesprogress());
    	foundTeacherstudentprogress.setScienceprogress(teacherstudentprogress.getScienceprogress());
      teacherstudentprogressRepository.save(foundTeacherstudentprogress);
      return foundTeacherstudentprogress;
    }
    return null;
  }

}
