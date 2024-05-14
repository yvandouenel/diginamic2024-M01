export default class FetchUniv {
  static url = 'http://universities.hipolaabs.com/search?country=';

  static async loadUnivs(country) {
    return fetch(FetchUniv.url + country)
      .then(response => response.json())
      .then(data => data)
  }
}