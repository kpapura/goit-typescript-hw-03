/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  public getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
  public increaseSalary(salary: number): void {
    this.salary += salary;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    // 1 - безпосередньо збільшити у super(name, department, salary+10000)

    super(name, department, salary);
    // 2 - використати функцію із батьківського класу
    this.increaseSalary(10000);
  }
}

const employee = new Employee("Bob", "Test", 500);
console.log(employee.getEmployeeDetails());

const manager = new Manager("Mike", "Test", 100);
// 3 - викликати метод, і динамічно передати значення, на яке потрібно збільшити
//     manager.increaseSalary(10000)

console.log(manager.getEmployeeDetails());

export {};
