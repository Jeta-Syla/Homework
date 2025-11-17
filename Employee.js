class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  info() {
    return `Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);        
    this.department = department;
  }

  info() {
   
    return `${super.info()}, Department: ${this.department}`;
  }
}
