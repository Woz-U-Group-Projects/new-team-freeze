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
@RequestMapping("/register")
public class RegisterController {

  @Autowired
  RegisterRepository registerRepository;

  @GetMapping()
  public List<Register> getRegisters() {
    return registerRepository.findAll();
  }

  @PostMapping()
  public Register addRegister(@RequestBody Register register) {
    return registerRepository.save(register);
  }

  @DeleteMapping("/{id}")
  public void deleteRegister(@PathVariable Long id) {
    registerRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Register updateProject(@PathVariable Long id, @RequestBody Register register) {
    Register foundRegister = registerRepository.findById(id).orElse(null);
    if (foundRegister != null) {
    	foundRegister.setFirstname(register.getFirstname());
    	foundRegister.setLastname(register.getLastname());
    	foundRegister.setUsername(register.getUsername());
    	foundRegister.setPassword(register.getPassword());
      registerRepository.save(foundRegister);
      return foundRegister;
    }
    return null;
  }

}
