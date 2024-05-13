import FormAddTask from "./components/FormAddTask.js";
// Création du tableau de tasks
const tasksList = []

function handleUpTasksList() {
  console.log(`tasksList`, tasksList);
  // Affichage des tasks en utilisant le composant Task.js
}

// création du formulaire
const form = new FormAddTask(tasksList, handleUpTasksList);

