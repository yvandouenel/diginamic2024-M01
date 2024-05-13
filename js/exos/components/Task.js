import { createMarkup } from "../utils/tools.js";
export default class Task {
  constructor(label, done, id, wrapperTasks, tasksList, handleUpTasksList) {
    this.label = label;
    this.done = done;
    this.id = id;
    this.wrapperTasks = wrapperTasks;
    this.tasksList = tasksList;
    this.handleUpTasksList = handleUpTasksList;

    this.domElts = this.render();
    this.handleEvents()
  }
  handleEvents() {
    this.domElts.btnDelete.addEventListener("click", () => {
      console.log(`Suppression de la tâche : `, this.id);
      // Suppression de la tâche concernée
      this.tasksList.forEach((task, index) => {
        if (task.id == this.id) {
          this.tasksList.splice(index, 1);
        }
      });
      this.handleUpTasksList()
    })
    this.domElts.btnValidate.addEventListener("click", () => {
      console.log(`Modification de la tâche : `, this.id);
      // Modification de la tâche concernée
      this.tasksList.forEach((task, index) => {
        if (task.id == this.id) {
          this.tasksList[index].done = !this.tasksList[index].done;
        }
      });
      this.handleUpTasksList()
    })
  }
  render() {
    const sectionTask = createMarkup("section", this.wrapperTasks, "", { id: "task-list" });

    const labelTask = createMarkup("h2", sectionTask, this.label);

    const btnDelete = createMarkup("button", sectionTask, "Supprimer");
    const btnValidate = createMarkup("button", sectionTask, "Valider");
    if (this.done) {
      labelTask.style.textDecoration = "line-through";
      btnValidate.innerText = "Invalider";
    }

    return {
      btnDelete,
      btnValidate
    }
  }
}