package com.example.demo.studentrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.student.Student;



public interface StudentRepository extends JpaRepository<Student,Integer>
{
	
}


