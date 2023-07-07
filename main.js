let tasks = [
  {
    title: "قراءة",
    date: "10/10/2020",
    isDone: true,
  },
];
function restoree() {
  let taskss = JSON.parse(localStorage.getItem("tasks"));
  tasks = taskss ?? [];
}
restoree();
function fill() {
  document.getElementById("dt").innerHTML = "";
  index = 0;
  for (task of tasks) {
    let contanant = `
          <div id="table" class="table ${
            task.isDone ? "done" : ""
          } " style="margin-bottom: 10px">
            <div class="info"> <span style="font-size: 20px; font-weight:bold; ">${
              task.title
            }</span>
              <div class="date" style="font-size: 10px; font-weight:bold;">${
                task.date
              }</div>
            </div>
            <div class="buttons">
              <button class="del" onclick="deleto(${index})">X</button>
              <button onclick="edit(${index})" >E</button>
              ${
                task.isDone
                  ? `<button onclick="isd(${index})">D</button>`
                  : `<button onclick="isd(${index})">N</button>`
              }
              
            </div>
          </div>`;
    document.getElementById("dt").innerHTML += contanant;
    index++;
  }
}
fill();
document.getElementById("add").addEventListener("click", function () {
  let taskName = prompt("ادخل اسم المهمه ");
  let dd = new Date();
  let tod = dd.getDate() + "/" + (dd.getMonth() + 1) + "/" + dd.getFullYear();
  let taskOb = {
    title: taskName,
    date: tod,
    isDone: true,
  };

  tasks.push(taskOb);
  let taskString = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskString);
  fill();
});
function deleto(index) {
  let confirmed = confirm("هل انت متأكد من الحذف ");
  if (confirmed) {
    tasks.splice(index, 1);
    store();
    fill();
  }
}
function edit(index) {
  let ediet = prompt(" ادخل التعديل", tasks[index].title);
  tasks[index].title = ediet;
  store();
  fill();
}

function isd(index) {
  let task = tasks[index];
  task.isDone = !task.isDone;
  store();
  fill();
}

function store() {
  let taskString = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskString);
}
