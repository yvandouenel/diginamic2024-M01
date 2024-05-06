function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // Le premier getBalance est une clé (string), le deuxième getBalance est une référence à la fonction
    getBalance: getBalance,
    setBalance: setBalance
  };
}

// Dans le scope global, le mécanisme des closures me permet d'accéder à d'autres scopes
const account = makeBankAccount();
account.setBalance(100);
console.log(`balance`, account.getBalance());

