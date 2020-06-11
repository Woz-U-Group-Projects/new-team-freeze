package com.example.groupprojects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "createlesson")
public class CreateLesson {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "lessonname")
	private String lessonname;
	
	@Column(name = "lessontext")
	private String lessontext;
	
	@Column(name = "uploadfiles")
	private String uploadfiles;
	
	@Column(name = "video")
	private String video;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getLessonname() {
		return lessonname;
	}

	public void setLessonname(String lessonname) {
		this.lessonname = lessonname;
	}

	public String getLessontext() {
		return lessontext;
	}

	public void setLessontext(String lessontext) {
		this.lessontext = lessontext;
	}

	public String getUploadfiles() {
		return uploadfiles;
	}

	public void setUploadfiles(String uploadfiles) {
		this.uploadfiles = uploadfiles;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}
	
	
}
