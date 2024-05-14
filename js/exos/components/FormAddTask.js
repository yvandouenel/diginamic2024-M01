import { createMarkup } from "../utils/tools.js";
import FetchTasks from "../services/FetchTasks.js";

export default class FormAddTask {
  constructor(tasksList, handleUpTasksList) {
    this.tasksList = tasksList;
    console.log(`this.tasksList dans le constructeur de Form : `, this.tasksList);
    this.handleUpTasksList = handleUpTasksList;
    this.formElt = this.render();
    this.handleSubmit()
  }
  handleSubmit() {
    this.formElt.addEventListener("submit", async (event) => {
      event.preventDefault();
      // FormData 
      const formData = new FormData(this.formElt);
      /* const newTask = {
        label: formData.get("input-task"),
        done: false
      } */
      const newTask = {
        label: formData.get("input-task"),
        done: false
      }
      const localNewTask = { id: "temp", ...newTask };
      this.tasksList.push(localNewTask);
      this.handleUpTasksList();
      this.formElt.reset();

      // Ajout de la nouvelle tâche sur le serveur distant
      const newTaskFromServer = await FetchTasks.postTask(newTask);
      // Modification en local de l'id
      localNewTask.id = newTaskFromServer.id;
      // Rechargement de la liste des tâches avec les bonnes id
      this.handleUpTasksList();

    })

  }
  render() {
    const form = createMarkup("form", document.body, "", { "class": "d-flex align-items-center mt-5" });
    const label = createMarkup("label", form, "Tâche : ", {
      "for": "input-task",
      "name": "input-task"
    });
    const input = createMarkup(
      "input", form, "", {
      "id": "input-task",
      "name": "input-task",
      "type": "text",
      "class": "form-control w-25 mx-2"
    });

    const btnValidate = createMarkup(
      "button", form, "Valider", {
      "type": "submit",
      "class": "btn btn-success mx-2",
    });

    return form
  }
}
