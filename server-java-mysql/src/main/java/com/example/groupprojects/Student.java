package com.example.groupprojects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String mathlesson;

	private String mathprogress;

	private String readinglesson;

	private String readingprogress;

	private String socialstudieslesson;

	private String socialstudiesprogress;

	private String sciencelesson;

	private String scienceprogress;
	
	private String duedates;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMathlesson() {
		return mathlesson;
	}

	public void setMathlesson(String mathlesson) {
		this.mathlesson = mathlesson;
	}

	public String getMathprogress() {
		return mathprogress;
	}

	public void setMathprogress(String mathprogress) {
		this.mathprogress = mathprogress;
	}

	public String getReadinglesson() {
		return readinglesson;
	}

	public void setReadinglesson(String readinglesson) {
		this.readinglesson = readinglesson;
	}

	public String getReadingprogress() {
		return readingprogress;
	}

	public void setReadingprogress(String readingprogress) {
		this.readingprogress = readingprogress;
	}

	public String getSocialstudieslesson() {
		return socialstudieslesson;
	}

	public void setSocialstudieslesson(String socialstudieslesson) {
		this.socialstudieslesson = socialstudieslesson;
	}

	public String getSocialstudiesprogress() {
		return socialstudiesprogress;
	}

	public void setSocialstudiesprogress(String socialstudiesprogress) {
		this.socialstudiesprogress = socialstudiesprogress;
	}

	public String getSciencelesson() {
		return sciencelesson;
	}

	public void setSciencelesson(String sciencelesson) {
		this.sciencelesson = sciencelesson;
	}

	public String getScienceprogress() {
		return scienceprogress;
	}

	public void setScienceprogress(String scienceprogress) {
		this.scienceprogress = scienceprogress;
	}

	public String getDuedates() {
		return duedates;
	}

	public void setDuedates(String duedates) {
		this.duedates = duedates;
	}

}