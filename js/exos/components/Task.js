import { createMarkup } from "../utils/tools.js";
import FetchTasks from "../services/FetchTasks.js";
export default class Task {
  constructor(label, done, id, wrapperTasks, tasksList, handleUpTasksList) {
    this.label = label;
    this.done = done;
    this.id = id;
    this.wrapperTasks = wrapperTasks;
    this.tasksList = tasksList;
    this.handleUpTasksList = handleUpTasksList;
    this.sectionError = createMarkup("section", document.body, "", { id: "error-section" });

    this.domElts = this.render();
    this.handleEvents()
  }
  /**
 * Affiche temporairement une erreur 
 * @param {String} error 
 */
  showError(error) {
    const errorMsg = createMarkup("p", this.sectionError, error, {
      "class": "text-white bg-secondary mt-3 float-end w-25 p-3 rounded"
    });
    const animation = [
      { fontSize: "100%" },
      { fontSize: "110%" },
      { fontSize: "100%", offset: 0.3 },
      { fontSize: "100%", offset: 0.9 },
      { opacity: "0" },
    ];

    const animationTiming = {
      duration: 10000,
      iterations: 1,
    };
    errorMsg.animate(animation, animationTiming);
    setTimeout(() => {
      this.sectionError.innerHTML = ""
    }, 10000)
  }
  handleEvents() {
    this.domElts.btnDelete.addEventListener("click", async () => {
      console.log(`Suppression de la tâche : `, this.id);
      // Suppression locale de la tâche concernée
      this.tasksList.forEach((task, index) => {
        if (task.id == this.id) {
          this.tasksList.splice(index, 1);
        }
      });
      this.handleUpTasksList();
      // Suppression distante via json-server de la tâche concernée
      try {
        const deletedTask = await FetchTasks.deleteTask(this.id);
        console.log(`Element supprimé : `, deletedTask);
      } catch (error) {
        console.error("Erreur attrapée dans handleEvents de Task");
        this.showError("Erreur lors de la suppression d'une tâche : " + error);
      }
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