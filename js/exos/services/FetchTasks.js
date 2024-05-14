export default class FetchTasks {
  static url = 'http://localhost:3000/tasks';

  static async loadTasks() {
    return fetch(FetchTasks.url)
      .then(response => response.json())
      .then(data => data)
  }
}