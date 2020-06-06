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
@RequestMapping("/login")
public class LoginController {

  @Autowired
  LoginRepository loginRepository;

  @GetMapping()
  public List<Login> getLogins() {
    return loginRepository.findAll();
  }

  @PostMapping()
  public Login addLogin(@RequestBody Login login) {
    return loginRepository.save(login);
  }

  @DeleteMapping("/{id}")
  public void deleteLogin(@PathVariable Long id) {
    loginRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Login updateProject(@PathVariable Long id, @RequestBody Login login) {
    Login foundLogin = loginRepository.findById(id).orElse(null);
    if (foundLogin  != null) {
    	foundLogin.setUsername(login.getUsername());
    	foundLogin.setPassword(login.getPassword());
      loginRepository.save(foundLogin);
      return foundLogin;
    }
    return null;
  }

}