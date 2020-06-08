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
public class TeacherController {

  @Autowired
  TeacherRepository teacherRepository;

  @GetMapping()
  public List<Teacher> getTeachers() {
    return teacherRepository.findAll();
  }

  @PostMapping()
  public Teacher addTeacher(@RequestBody Teacher teacher) {
    return teacherRepository.save(teacher);
  }

  @DeleteMapping("/{id}")
  public void deleteTeacher(@PathVariable Long id) {
    teacherRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Teacher updateProject(@PathVariable Long id, @RequestBody Teacher teacher) {
    Teacher foundTeacher = teacherRepository.findById(id).orElse(null);
    if (foundTeacher != null) {
    	foundTeacher.setFirstname(teacher.getFirstname());
    	foundTeacher.setLastname(teacher.getLastname());
    	foundTeacher.setMathprogress(teacher.getMathprogress());
    	foundTeacher.setReadingprogress(teacher.getReadingprogress());
    	foundTeacher.setSocialstudiesprogress(teacher.getSocialstudiesprogress());
    	foundTeacher.setScienceprogress(teacher.getScienceprogress());
      teacherRepository.save(foundTeacher);
      return foundTeacher;
    }
    return null;
  }

}
