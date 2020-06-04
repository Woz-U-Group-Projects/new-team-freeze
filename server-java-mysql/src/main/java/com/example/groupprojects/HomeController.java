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
@RequestMapping("/home")
public class HomeController {

  @Autowired
  HomeRepository homeRepository;

  @GetMapping()
  public List<Home> getHomes() {
    return homeRepository.findAll();
  }

  @PostMapping()
  public Home addHome(@RequestBody Home home) {
    return homeRepository.save(home);
  }

  @DeleteMapping("/{id}")
  public void deleteRegister(@PathVariable Long id) {
    homeRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Home updateProject(@PathVariable Long id, @RequestBody Home home) {
    Home foundHome = homeRepository.findById(id).orElse(null);
    if (foundHome != null) {
    	foundHome.setUsername(home.getUsername());
    	foundHome.setPassword(home.getPassword());
      homeRepository.save(foundHome);
      return foundHome;
    }
    return null;
  }

}
