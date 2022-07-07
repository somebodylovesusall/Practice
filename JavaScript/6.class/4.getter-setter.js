// 접근자 속성 (Access Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName}${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';