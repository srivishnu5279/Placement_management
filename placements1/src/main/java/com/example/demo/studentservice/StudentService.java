package com.example.demo.studentservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.student.Student;
import com.example.demo.studentrepository.StudentRepository;


@Service
public class StudentService {
	
	@Autowired
	public StudentRepository srepo;
	
	
	//post
	public Student addStudent(Student stu)
	{
		return srepo.save(stu);
	}
	
	//get
	public List<Student> getStudent()
	{
		return srepo.findAll();
	}
	
	//update
	
	public Student updateStudent(Student stu)
	{
		long stdid=stu.getStdid();
		Student stu1=srepo.findById((int) stdid).get();
		stu1.setName(stu.getName());
		return srepo.save(stu);
	}
	
	//deletedata
	
	public void deleteStudent(int id)
	{
		srepo.deleteById(id);
	}

}
