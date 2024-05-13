async function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) {
        resolve("RDDEZddeoeotrzsde:sddf");
      } else reject("Problème dans getToken");
    }, 1000)
  })
}
function getUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) {
        resolve({ uid: "58", name: "Bob" });
      } else reject("Problème dans getUser");
    }, 1000)
  })

}
function successToken(data) {
  console.log(`traitement du cas favorable. data = `, data);
  getUser(data, successUser, fail);
}
function fail() {
  console.log(`traitement du cas défavorable`);
}
function successUser(data) {
  console.log(`traitement du cas favorable. data = `, data);

}
(async function () {
  try {
    const result = await getToken();
    // Si j'exécute le code ci-dessous, c'est que la promesse a été tenue
    console.log(`result`, result);
  } catch (error) {
    console.error(error);
  }
})();

/*  .then((token) => {
   console.log(`token`, token);
   return getUser(token);
 })
 .then(user => {
   console.log(`user`, user);
   return user;
 })
 .catch(error => {
   console.error(error)
 }); */


