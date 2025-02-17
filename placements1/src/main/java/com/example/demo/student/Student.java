package com.example.demo.student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Student {
	@Id
	long stdid;
	String name;
	long roll;
	String qualification;
	String course;
	int year;
	long hallticketno;
	public long getStdid() {
		return stdid;
	}
	public void setStdid(long stdid) {
		this.stdid = stdid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getRoll() {
		return roll;
	}
	public void setRoll(long roll) {
		this.roll = roll;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public long getHallticketno() {
		return hallticketno;
	}
	public void setHallticketno(long hallticketno) {
		this.hallticketno = hallticketno;
	}
	
	

}
