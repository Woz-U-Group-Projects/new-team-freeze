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
public class CurrentLessonPlanController {
	
	@Autowired
	CurrentLessonPlanRepository currentLessonPlanRepository;
	
	@GetMapping()
	public List<CurrentLessonPlan> getCurrentLessonPlans() {
	return currentLessonPlanRepository.findAll();
	}
	
	@PostMapping()
	public CurrentLessonPlan addCurrentLessonPlan(@RequestBody CurrentLessonPlan currentLessonPlan) {
	return currentLessonPlanRepository.save(currentLessonPlan);
	}
	
	@DeleteMapping("/{id}")
	  public void deleteCreateLesson(@PathVariable Long id) {
	    currentLessonPlanRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public CurrentLessonPlan updateProject(@PathVariable Long id, @RequestBody CurrentLessonPlan currentLessonPlan) {
	    CurrentLessonPlan foundCurrentLessonPlan = currentLessonPlanRepository.findById(id).orElse(null);
	    if (foundCurrentLessonPlan != null) {
	    	foundCurrentLessonPlan.setLessons(currentLessonPlan.getLessons());
	      currentLessonPlanRepository.save(foundCurrentLessonPlan);
	      return foundCurrentLessonPlan;
	    }
	    return null;
	  }
	

}
