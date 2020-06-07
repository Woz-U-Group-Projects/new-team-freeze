package com.example.groupprojects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher")
public class Teacherstudentprogress {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String firstname;

	private String lastname;

	private String mathprogress;

	private String readingprogress;

	private String socialstudiesprogress;

	private String scienceprogress;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getMathprogress() {
		return mathprogress;
	}

	public void setMathprogress(String mathprogress) {
		this.mathprogress = mathprogress;
	}

	public String getReadingprogress() {
		return readingprogress;
	}

	public void setReadingprogress(String readingprogress) {
		this.readingprogress = readingprogress;
	}

	public String getSocialstudiesprogress() {
		return socialstudiesprogress;
	}

	public void setSocialstudiesprogress(String socialstudiesprogress) {
		this.socialstudiesprogress = socialstudiesprogress;
	}

	public String getScienceprogress() {
		return scienceprogress;
	}

	public void setScienceprogress(String scienceprogress) {
		this.scienceprogress = scienceprogress;
	}

}