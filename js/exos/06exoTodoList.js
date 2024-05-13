import { createMarkup } from "./utils/tools.js";
import FormAddTask from "./components/FormAddTask.js";
import Task from "./components/Task.js";

// Création du tableau de tâches
let tasksList = [];


// création du formulaire
const form = new FormAddTask(tasksList, handleUpTasksList);

// Création du conteneur de la liste des tâches
const wrapperTasks = createMarkup("section", document.body);

/**
 * Fonction appelée lors d'un changement sur le tableau des tâches
 * 
 * 
 */
function handleUpTasksList() {
  console.log(`tasksList dans handleUpTasksList`, tasksList);

  // Suppression de tous les enfants de wrapperTasks
  wrapperTasks.innerHTML = "";

  // Affichage des tasks en utilisant le composant Task.js
  tasksList.sort((a, b) => a.done - b.done).forEach(task => {
    new Task(task.label, task.done, task.id, wrapperTasks, tasksList, handleUpTasksList);
  })
}

