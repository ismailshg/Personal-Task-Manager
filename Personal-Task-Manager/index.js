//Task: 1=>
const studentInfo = {
  id: "NA-1B3D11",
  name: "Ismail Ahmed",
  birthMonth: 1,
  favoriteColor: "Black",
};

//Task: 2 =>

let expenseArr = [];

class expense {
  constructor(
    title,
    description,
    price,
    priority = 3,
    completed,
    createdDate,
    dueDate,
    category
  ) {
    this.id = studentInfo.id + Date.now() + Math.random();
    this.title = title;
    this.description = description;
    this.price = price;
    this.priority = priority;
    this.completed = completed;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
    this.category = category;
  }
}

const firstExpense = new expense(
  "Monitor",
  "'PC Power PCGM22 21.45' IPS FHD 100Hz Borderless Monitor ",
  10200,
  4,
  true,
  "2025-01-05",
  "25-05-05",
  "Entertainment"
);

expenseArr.push(firstExpense);

//Task: 3 =>
// Create tasks =>

const addExpense = (
  title,
  description,
  price,
  priority = 3,
  completed,
  createdDate,
  dueDate,
  category
) => {
  const expenceObj = new expense(
    title,
    description,
    price,
    (priority = 3),
    completed,
    createdDate,
    dueDate,
    category
  );
  return expenceObj;
};

const secondExpense = addExpense(
  "Table",
  "A PC Table",
  6000,
  4,
  false,
  "2025-10-05",
  "2025-11-05",
  "Furniture"
);

expenseArr.push(secondExpense);

const thirdExpense = addExpense(
  "Mobile",
  "Infinix Hot 11",
  12000,
  4,
  true,
  "2025-01-05",
  "2025-08-05",
  "Electronics"
);

expenseArr.push(thirdExpense);
// console.log(expenseArr);

// console.log(firstExpense);

// console.log(secondExpense);

// console.log(thirdExpense);

// Display Tasks =>

function displayTasks() {
  console.log(`Total tasks: ${expenseArr.length}`);
  for (let i = 0; i < expenseArr.length; i++) {
    console.log(expenseArr[i]);
  }
}

displayTasks();

// Delete Tasks =>

function deleteTask(taskId) {
  let filteredtask = expenseArr.filter((expense) => {
    return expense.id !== taskId;
  });
  return (expenseArr = filteredtask);
}

// deleteTask(expenseArr[1].id);
// displayTasks();

// calculateTasksPercentage: completed vs total =>

const calculateTasksPercentage = (expenseArr) => {
  let totalExpense = 0;
  let completed = 0;

  for (let i = 0; i < expenseArr.length; i++) {
    totalExpense += expenseArr[i].price;
    if (expenseArr[i].completed == true) {
      completed += expenseArr[i].price;
    }
  }

  console.log(
    `Completed tasks based on total: ${(completed / totalExpense) * 100}%`
  );
};

calculateTasksPercentage(expenseArr);


// Task: 4 =>
// Display tasks created in my birth month =>

const createdTaskInBirthMonth = (monthNum) => {
  for (let i = 0; i < expenseArr.length; i++) {
    expenseDate = expenseArr[i].createdDate;
    createdMonth = new Date(expenseDate).getMonth() + 1;
    if (createdMonth == monthNum) {
      console.log(expenseArr[i]);
    }
  }
};
createdTaskInBirthMonth(1);

// Task: 5 =>
const saveTasksToStorage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tasks saved in storage.");
    }, 1*100);
  });
};
saveTasksToStorage()
  .then((tasksData) => {
    console.log(tasksData);
  })
  .catch(() => {
    console.log("Detected error saving data to storage!");
  });
