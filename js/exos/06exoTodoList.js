import { createMarkup } from "./utils/tools.js";
import FormAddTask from "./components/FormAddTask.js";
import Task from "./components/Task.js";
import FetchTasks from "./services/FetchTasks.js";


class TodoList {
  constructor() {
    this.tasksList = [];
    this.form = new FormAddTask(this.tasksList, this.handleUpTasksList);
    this.wrapperTasks = createMarkup("section", document.body);

    this.loadTasks();
  }
  async loadTasks() {
    try {
      this.tasksList = await FetchTasks.loadTasks();
      this.handleUpTasksList();
    } catch (error) {
      console.error(`Erreur attrapée dans loadTasks de TodoList`);
    }
  }
  handleUpTasksList = () => {

    console.log(`this.tasksList dans handleUpTasksList`, this.tasksList);
    // Suppression de tous les enfants de wrapperTasks
    this.wrapperTasks.innerHTML = "";

    // Affichage des tasks en utilisant le composant Task.js
    this.tasksList.sort((a, b) => a.done - b.done).forEach(task => {
      new Task(task.label, task.done, task.id, this.wrapperTasks, this.tasksList, this.handleUpTasksList);
    })
  }
}
new TodoList();

