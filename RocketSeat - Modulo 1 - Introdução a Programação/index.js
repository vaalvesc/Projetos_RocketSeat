const classA = [
  {
    name: "Victor",
    grade: 9.8
  },
  {
    name: "Diego",
    grade: 10
  },
  {
    name: "Marcos",
    grade: 2
  },
  {
    name: "dado",
    grade: 10
  }
]

const classB = [
  {
    name: "Carlos",
    grade: 10
  },
  {
    name: "Pedro",
    grade: 10
  },
  {
    name: "Ziro",
    grade: 10
  },
  {
    name: "Novato",
    grade: 1
  }
]


function calculateAverage(students) {
  //for (let /*permite que mude o valor de*/ i = 0; i < students.length; i++) {
  // console.log(i);
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }
  const average = sum / students.length

  return average
}


const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)



function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congrats`)
  } else {
    console.log(`${turma} average: ${average}. Is not good.`)
  }
}

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')


function markAsFlunked(student) {
  student.Flunked = false
  if (student.grade < 5) {
    student.Flunked = true
  }
}


function sendMessageFlunked(student) {
  if (student.Flunked) {
    console.log(` I'am student ${student.name} Flunked!`)
  }
}


function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendMessageFlunked(student)
  }
}

studentsFlunked(classA)
studentsFlunked(classB)