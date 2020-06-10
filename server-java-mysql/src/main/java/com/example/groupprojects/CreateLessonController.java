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
@RequestMapping("/createlesson")
public class CreateLessonController {
	
	@Autowired
	CreateLessonRepository createLessonRepository;
	
	@GetMapping()
	public List<CreateLesson> getCreateLessons() {
	return createLessonRepository.findAll();
	}
	
	@PostMapping()
	public CreateLesson addCreateLesson(@RequestBody CreateLesson createLesson) {
	return createLessonRepository.save(createLesson);
	}
	
	@DeleteMapping("/{id}")
	  public void deleteCreateLesson(@PathVariable Long id) {
	    createLessonRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public CreateLesson updateProject(@PathVariable Long id, @RequestBody CreateLesson createLesson) {
	    CreateLesson foundCreateLesson = createLessonRepository.findById(id).orElse(null);
	    if (foundCreateLesson != null) {
	    	foundCreateLesson.setSubject(createLesson.getSubject());
	    	foundCreateLesson.setLessonname(createLesson.getLessonname());
	    	foundCreateLesson.setLessontext(createLesson.getLessontext());
	    	foundCreateLesson.setUploadfiles(createLesson.getUploadfiles());
	      createLessonRepository.save(foundCreateLesson);
	      return foundCreateLesson;
	    }
	    return null;
	  }
	

}
