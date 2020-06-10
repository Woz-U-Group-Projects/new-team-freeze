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
@RequestMapping("/parent")
public class ParentController {

  @Autowired
  ParentRepository parentRepository;

  @GetMapping()
  public List<Parent> getParents() {
    return parentRepository.findAll();
  }

  @PostMapping()
  public Parent addParent(@RequestBody Parent parent) {
    return parentRepository.save(parent);
  }

  @DeleteMapping("/{id}")
  public void deleteParent(@PathVariable Long id) {
    parentRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Parent updateProject(@PathVariable Long id, @RequestBody Parent parent) {
    Parent foundParent = parentRepository.findById(id).orElse(null);
    if (foundParent != null) {
    	foundParent.setCoursename(parent.getCoursename());
    	foundParent.setProgress(parent.getProgress());
    	foundParent.setDuedate(parent.getDuedate());
      parentRepository.save(foundParent);
      return foundParent;
    }
    return null;
  }

}
