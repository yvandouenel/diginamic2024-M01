import { createMarkup } from "../utils/tools.js";

export default class FormAddTask {
  constructor() {
    this.render();
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
  }
}
