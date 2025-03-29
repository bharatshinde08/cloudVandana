package test;

import java.util.ArrayList;
import java.util.List;

class Employee{
	
	private int id;
	private String name;
	private double salary;
	
	
	public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
	
	public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }

}
public class Program {

	public static void main(String[] args) {
		
		Employee emp1 = new Employee(114, "Mohan", 45000);
		Employee emp2 = new Employee(223, "Pavan", 30000);
		Employee emp3 = new Employee(337, "Ajay", 70000);
		
		List<Employee> employee = new ArrayList<>();
		employee.add(emp1);
		employee.add(emp2);
		employee.add(emp3);
		
		System.out.println("Employee Details\n");
		for(int i=0; i<employee.size(); i++) {
			employee.get(i).displayDetails();
		}
		
	}

}
