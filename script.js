document.querySelector('#push').onclick = function() {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Kindly Enter Task Name!!!!")
  }
// a function that states that if a user doesn’t enter any task and presses the “Add” button, then an alert message is generated which states that enter the task.//
  else {
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
//If the user enters a task, then we have to decide what to do with the task. uses the innerhtml to display all the information on the web page
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      }
      //Delete” button which can be found after every task.
    }
  }
}