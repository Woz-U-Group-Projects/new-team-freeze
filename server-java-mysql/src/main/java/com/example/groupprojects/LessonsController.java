package com.example.groupprojects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lessons")
public class LessonsController {
	
	@Autowired
	LessonsRepository lessonsRepository;
	
	@GetMapping()
	public List<Lessons> getLessonss() {
	return lessonsRepository.findAll();
	}
	
	@PostMapping()
	public Lessons addLessons(@RequestBody Lessons lessons) {
	return lessonsRepository.save(lessons);
	}
	
	@DeleteMapping("/{id}")
	  public void deleteLessons(@PathVariable Long id) {
	    lessonsRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public Lessons updateProject(@PathVariable Long id, @RequestBody Lessons lessons) {
	    Lessons foundLessons = lessonsRepository.findById(id).orElse(null);
	    if (foundLessons != null) {
	    	foundLessons.setLesson(lessons.getLesson());
	      lessonsRepository.save(foundLessons);
	      return foundLessons;
	    }
	    return null;
	  }
	

}
