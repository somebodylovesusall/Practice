// Quiz
// 정직원과 파트타임 직원을 나타낼 수 있는 클래스
// 속성: 이름, 부서 이름, 한달 근무 시간
// 함수: 매달 직원들의 정보를 이용해서 한달 월급을 계산 가능
// 정직원은 시간당 10,000원, 파트타임 직원은 시간당 8,000원
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('Ellie', 'S/W', 30);
const bob = new PartTimeEmployee('Bob', 'S/W', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());