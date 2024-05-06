
// Callback
const success = () => "Super";
const fail = () => "Pas glop";

// Hight level function
function test(glop, pasGlop) {
  if (Math.random() > 0.5) {
    return glop();
  } else return pasGlop();
}

console.log(test(success, fail));
