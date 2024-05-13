import { createMarkup } from "../utils/tools.js";

export default class FormAddTask {
  constructor(tasksList, handleUpTasksList) {
    this.tasksList = tasksList;
    this.handleUpTasksList = handleUpTasksList;
    this.formElt = this.render();
    this.handleSubmit()
  }
  handleSubmit() {
    this.formElt.addEventListener("submit", (event) => {
      event.preventDefault();
      // FormData 
      const formData = new FormData(this.formElt);
      this.tasksList.push({
        id: Math.floor(Math.random() * 1000),
        label: formData.get("input-task"),
        done: false
      });
      this.handleUpTasksList();
      this.formElt.reset();
    })

  }
  render() {
    const form = createMarkup("form", document.body);
    const label = createMarkup("label", form, "Tâche : ", {
      "for": "input-task",
      "name": "input-task"
    });
    const input = createMarkup(
      "input", form, "", {
      "id": "input-task",
      "name": "input-task",
      "type": "text"
    });

    const btnValidate = createMarkup(
      "button", form, "Valider", {
      "type": "submit"
    });

    return form
  }
}
