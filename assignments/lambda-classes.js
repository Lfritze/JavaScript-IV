// CODE here for your Lambda Classes
//-------------------------------PERSON CLASS----------------------------
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.Age = attr.age;
        this.Location = attr.location;
        }
        speak() {
            return (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//-------------------------------INSTRUCTOR CLASS----------------------------
class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr); // replaces parent .call
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`); 
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}


//-------------------------------STUDENT CLASS----------------------------
  
class Student extends Instructor {
    constructor(stuAttr){
        super();
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        // need a loop method bc we are logging out all the student's favorite subjects // .forEach ?? And need to invoke favSubjects list for the loop
      const favSubList = this.favSubjects;
      favSubList.forEach(subj => console.log(subj));
    }

    PRAssignment(subject) {
      return (`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
      return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

//-------------------------------PROJECT MANAGER CLASS-----------------------

class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times! `);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}'`);
    
  }
}



//-------------------INSTRUCTORS----------------------------------------------------

const ken = new Instructor({
    name: 'Ken Griffey Jr.',
    age: 19,
    location: 'Seattle',
    favLanguage: 'JavaScript',
    specialty: 'Front-end and bleacher bombs',
    catchPhrase: `Don't fake the funk`
});

const wade = new Instructor({
    name: 'Wade Boggs',
    age: 25,
    location: 'Boston',
    favLanguage: 'JavaScript and Robots',
    specialty: 'Front-end',
    catchPhrase: `Oh Danny Boy`
});

const ricky = new Instructor({
    name: 'Ricky Henderson',
    age: 23,
    location: 'Oakland',
    favLanguage: 'Python and Base-Steal',
    specialty: 'Backend',
    catchPhrase: `They call me Flash`
});

//-----------------------INSTRUCTORS END-------------------------------------------

//-----------------------STUDENTS------------------------------------------

const ted = new Student({
    name: 'Ted Williams',
    location: 'Boston',
    age: 110,
    previousBackground: 'Hitting Machine',
    className: 'Web 23',
    favSubjects: 'CSS'
  });

  const mickey = new Student({
    name: 'Mickey Mantle',
    location: 'New York',
    age: 110,
    previousBackground: 'Yankees Man',
    className: 'CS 3',
    favSubjects: 'Python'
  });

  //-----------------------STUDENTS END------------------------------------------

  //-------------------PROJECT MANAGERS----------------------------------------------------

  const al = new ProjectManager({
    name: 'Al Capone',
    location: 'Chicago',
    age: 110,
    gradClassName: 'CS1',
    favInstructor: 'Brit Hemming',
  })

  const john = new ProjectManager({
    name: 'John Dillinger',
    location: 'Indiana',
    age: 110,
    gradClassName: 'Web 23',
    favInstructor: 'Josh Knell',
  })

// console.log(wade.speak());
