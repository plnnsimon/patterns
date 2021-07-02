class Factory {
  createEmployee(employeeType) {
    if (employeeType === 'fulltime') {
      return new FullTime(employeeType);
    }
    if (employeeType === 'trainee') {
      return new Trainee(employeeType);
    }
    if (employeeType === 'remote') {
      return new Remote(employeeType);
    }

    throw new Error('This type not exists');
  }
}

class Worker {
  constructor(type, salary) {
    this.type = type;
    this.salary = salary;
  }

  describe() {
    console.log(`${this.type} worker: ${this.salary}$/hour`);
  }
}

class FullTime extends Worker {
  constructor(type) {
    super(type);
    this.salary = 15;
  }
}

class Trainee extends Worker {
  constructor(type) {
    super(type);
    this.salary = 5;
  }
}

class Remote extends Worker {
  constructor(type) {
    super(type);
    this.salary = 10;
  }
}

const employees = [];

const factory = new Factory();

employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('trainee'));
employees.push(factory.createEmployee('remote'));

console.log(employees);
employees.forEach(emp => emp.describe())
