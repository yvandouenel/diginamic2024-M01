export default class FetchTasks {
  static url = 'http://localhost:3000/tasks';

  static async loadTasks() {
    return fetch(FetchTasks.url)
      .then(response => response.json())
      .then(data => data)
  }
  static async deleteTask(id) {
    return fetch(FetchTasks.url + `/${id}`,
      {
        method: "DELETE",
      })
      .then(response => response.json())
      .then(data => {
        console.log(`data dans deleteTask`, data);
        return data;
      })
  }
  static async postTask(newTask) {
    return fetch(FetchTasks.url,
      {
        method: "POST",
        body: JSON.stringify(newTask)
      })
      .then(response => response.json())
      .then(data => {
        console.log(`data dans postTask`, data);
        return data;
      })
  }
  static async patchTask(id, partialTask) {
    console.log(`patchTask`, id, partialTask);
    return fetch(`${FetchTasks.url}/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(partialTask)
      })
      .then(response => response.json())
      .then(data => {
        console.log(`data dans patchTask`, data);
        return data;
      })
  }
}