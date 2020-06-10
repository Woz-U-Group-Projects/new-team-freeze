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
@RequestMapping("/student")
public class StudentController {

  @Autowired
  StudentRepository studentRepository;

  @GetMapping()
  public List<Student> getStudents() {
    return studentRepository.findAll();
  }

  @PostMapping()
  public Student addStudent(@RequestBody Student student) {
    return studentRepository.save(student);
  }

  @DeleteMapping("/{id}")
  public void deleteStudent(@PathVariable Long id) {
    studentRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Student updateProject(@PathVariable Long id, @RequestBody Student student) {
    Student foundStudent = studentRepository.findById(id).orElse(null);
    if (foundStudent != null) {
    	foundStudent.setCoursename(student.getCoursename());
    	foundStudent.setProgress(student.getProgress());
    	foundStudent.setDuedate(student.getDuedate());
      studentRepository.save(foundStudent);
      return foundStudent;
    }
    return null;
  }

}
