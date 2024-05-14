export default class FetchTasks {
  static url = 'http://localhost:3000/tasks';

  static async loadTasks() {
    return fetch(FetchTasks.url)
      .then(response => response.json())
      .then(data => data)
  }
  static async deleteTask(id) {
    return fetch(FetchTasks.url + `qsdf/${id}`,
      {
        method: "DELETE",
      })
      .then(response => response.json())
      .then(data => {
        console.log(`data dans deleteTask`, data);
        return data;
      })
  }
}