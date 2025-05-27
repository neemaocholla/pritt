//1. Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.
// pseudocode
// Class CustomerOrder:
//     Properties:
//         orderId: string
//         items: array of objects {name(string), quantity(number), price(number)}
//         status: string

//     Method calculateTotal():
//         total = 0
//         For each item in items:
//             total += item.quantity * item.price
//         Return total

//     Async Method processPayment():
//         Wait for 2 seconds (simulate payment processing)
//         Set status to "paid"
//         Print "Payment successful for order [orderId]"
class CustomerOrder {
  constructor(orderId, items, status = 'pending') {
    this.orderId = orderId;
    this.items = items;
    this.status = status;
  }

 function calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  }

  async processPayment() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.status = 'paid';
    console.log(`Payment successful for order ${this.orderId}`);
  }
}


const order = new CustomerOrder('MAME0712', [
  { name: 'Mango', quantity: 5, price: 30 },
  { name: 'Melon', quantity: 3, price: 95 }
]);

console.log('Total amount:', order.calculateTotal());

order.processPayment().then(() => {
  console.log('Order status:', order.status);
});

// 2.Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.
// pseudocode
// Class TeamMember:
//     Properties:
//         name: string
//         role: string 
//         tasks: array of tasks {each task has title(string) and completed(boolean)}

// Method constructor(name, role, tasks)
//   SET this.name = name
//   SET this.role = role
//   SET this.tasks = tasks

// Method completeTask(taskTitle)
//   FOR each task IN this.tasks
//     IF task.title EQUALS taskTitle THEN
//       SET task.completed = true
//       BREAK out of loop
//     END IF
//   END FOR

// Method checkProgress()
//   RETURN a Promise that:
//     IF all tasks in this.tasks have completed = true THEN
//       RESOLVE with "All tasks completed!"
//     ELSE
//       REJECT with "Pending tasks remaining"
//     END IF

class TeamMember {
    constructor(name, role,tasks) {
      this.name = name;
      this.role = role;
      this.tasks = tasks;
    }
};
  
TeamMember.prototype.completeTask = function(taskTitle){
    const task = this.tasks.find(t => t.title === taskTitle)
    if (task){
        task.complete = true
    }
};

  TeamMember.prototype.checkProgress = function() {
    return new Promise((resolve, reject) => {
      const allCompleted = this.tasks.every(task => task.completed);
      if (allCompleted) {
        resolve("All tasks completed!");
      } else {
        reject("Pending tasks remaining");
      }
    });
  };
  
  const member = new TeamMember("Winnie", "Developer", [
    { title: "Create project", completed: true },
    { title:"Setup", completed: false},
    { title: "Write code", completed: false },
  ]);
  
  member.completeTask("Create project");
  
  member.checkProgress()
    .then(msg => console.log(msg))
    .catch(err => console.log(err)); 
  
  member.completeTask("Create Project");

  member.completeTask("Setup");
  
  member.checkProgress()
    .then(msg => console.log(msg))
    .catch(err => console.log(err)); 
  
  member.completeTask("Write code");
  
  member.checkProgress()
    .then(msg => console.log(msg))  
    .catch(err => console.log(err));

// 3.Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.
// pseudocode
// Class Candidate:
//     Properties:
//         name: string
//         position: string
//         interviews: array of objects {date,status},thisi is an empty array

// Async Method sendConfirmation():
// Return a Promise that:
//     Waits for 1 second (simulate delay)
//     Resolves with message "Interview confirmed with [name]"
// After the Promise resolves, log the message

// Method scheduleInterview(date)
// Create an interview object with: 
//      date: date
//      status:'pending'
// Push the interview object to interviews array
class Candidate {
    constructor(name, position,interviews) {
      this.name = name;
      this.position = position;
      this.interviews = [];
    }
  
 function  scheduleInterview(date) {
      this.interviews.push({ date: date, status: "pending" });
    }
  
    async sendConfirmation() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const message = `Interview confirmed with ${this.name}`;
          resolve(message);
        }, 1000);
      }).then((message) => {
        console.log(message);
        return message;
      });
    }
  }
  const candidate = new Candidate("Maines", "Software Developer");
candidate.scheduleInterview("2025-07-12");
candidate.sendConfirmation();

//4.Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
// pseudocode
// Class Course:
//     Properties:
//         title: string
//         instructor: string
//         students: array of students{name(string),progress(string)}

//  Method updateProgress(studentName, value)
// Find the student in students array by name
// If student found
//   Update student's progress with the given value

// Async Method generateCertificate(studentName)
// Find the student in students array by name
// If student not found
//   Reject promise with "Student not found"
// Else if student's progress is 100
//   Resolve promise with "Certificate generated for [studentName]"
// Else
//   Reject promise with "Incomplete progress"

class Course {
    constructor(title, instructor, students) {
      this.title = title;
      this.instructor = instructor;
      this.students = students;
    }
};
function updateProgress(studentName, value){
    const student = this.students.find(std => std.name === studentName);
    if (student){
        student.progress = value;
        console.log(`Updatedd progress of ${studentName} to ${value}`)
    } else {
        console.log(`Student ${studentName} not found`)
    }
}
async generateCertificate(studentName) {
    const student = this.students.find(s => s.name === studentName);
    return new Promise((resolve, reject) => {
      if (!student) {
        reject("Student not found");
      } else if (student.progress === 100) {
        resolve(`Certificate generated for ${studentName}`);
      } else {
        reject("Incomplete progress");
      }
    });
  }

const course = new Course("JavaScript", "Eva", [
  { name: "Yelena", progress: 75 },
  { name: "Mary", progress: 100 }
]);

course.updateProgress("Yelena", 100);

course.generateCertificate("Wilson")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

course.generateCertificate("Yelena")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

course.generateCertificate("Mary")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
//5. Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".
// pseudocode
// Class StockTracker:
//     Property:
//         watchlist: array of objects{symbol(string),threshold,currentPrice(number)}
