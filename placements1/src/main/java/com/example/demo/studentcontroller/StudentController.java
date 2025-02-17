package com.example.demo.studentcontroller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.student.Student;
import com.example.demo.studentservice.StudentService;



@RestController
public class StudentController {
	
	@Autowired
	StudentService sser;
	
	@PostMapping("/addstu")
	public Student regstudent(@RequestBody Student stu)
	{
		return sser.addStudent(stu);
	}
	
	@GetMapping("/getstu")
	public List<Student> getStudent()
	{
		return sser.getStudent();
	}
	
	@PutMapping("/updatestu")
	public Student updateStudent(@RequestBody Student stu)
	{
		return sser.updateStudent(stu);
	}
	
	@DeleteMapping("/deletestu/{id}")
	public void deleteStudent(@PathVariable Integer id)
	{
		sser.deleteStudent(id);
	}
	

}
