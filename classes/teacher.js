const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let years = [];

    teachers.forEach(teacher => {
      years.push(teacher.yearsOfExperience);
    });

    let sumOfYears = years.reduce(
      (accum, currentValue) => accum + currentValue, 
      0);
    return sumOfYears;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}