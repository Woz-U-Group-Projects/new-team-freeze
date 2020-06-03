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
@RequestMapping("/user")
public class UserController {

  @Autowired
  UserRepository userRepository;

  @GetMapping()
  public List<User> getUsers() {
    return userRepository.findAll();
  }

  @PostMapping()
  public User addUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable Long id) {
    userRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public User updateProject(@PathVariable Long id, @RequestBody User user) {
    User foundUser = userRepository.findById(id).orElse(null);
    if (foundUser != null) {
    	foundUser.setFirstname(user.getFirstname());
    	foundUser.setLastname(user.getLastname());
    	foundUser.setUsername(user.getUsername());
    	foundUser.setPassword(user.getPassword());
    	foundUser.setRole(user.getRole());
      userRepository.save(foundUser);
      return foundUser;
    }
    return null;
  }

}