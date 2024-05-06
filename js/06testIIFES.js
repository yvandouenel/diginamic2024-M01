const myScript = (function () {
  // intérêt de la IIFES : pour isoler le code et faire en sorte de ne pas créer de 
  // variables globales
  var i = 12;

  // je veux récupérer un accès  à i via la fonction getI
  function getI() {
    return i;
  }
  return {
    getI
  }
})();
console.log(`i `, myScript.getI());