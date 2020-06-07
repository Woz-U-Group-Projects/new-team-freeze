package com.example.groupprojects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher")
public class Teacher {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String createlesson;

	private String currentlesson;

	private String mathprogress;

	private String mathgrade;

	private String readingprogress;

	private String readinggrade;

	private String scienceprogress;

	private String sciencegrade;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCreatelesson() {
		return createlesson;
	}

	public void setCreatelesson(String createlesson) {
		this.createlesson = createlesson;
	}

	public String getCurrentlesson() {
		return currentlesson;
	}

	public void setCurrentlesson(String currentlesson) {
		this.currentlesson = currentlesson;
	}

	public String getMathprogress() {
		return mathprogress;
	}

	public void setMathprogress(String mathprogress) {
		this.mathprogress = mathprogress;
	}

	public String getMathgrade() {
		return mathgrade;
	}

	public void setMathgrade(String mathgrade) {
		this.mathgrade = mathgrade;
	}

	public String getReadingprogress() {
		return readingprogress;
	}

	public void setReadingprogress(String readingprogress) {
		this.readingprogress = readingprogress;
	}

	public String getReadinggrade() {
		return readinggrade;
	}

	public void setReadinggrade(String readinggrade) {
		this.readinggrade = readinggrade;
	}

	public String getScienceprogress() {
		return scienceprogress;
	}

	public void setScienceprogress(String scienceprogress) {
		this.scienceprogress = scienceprogress;
	}

	public String getSciencegrade() {
		return sciencegrade;
	}

	public void setSciencegrade(String sciencegrade) {
		this.sciencegrade = sciencegrade;
	}

}