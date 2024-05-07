const users = [
  { name: "Dylan", age: 78 },
  { name: "Marley", age: 92 },
  { name: "Cohen", age: 83 },
  { name: "Jackson", age: 76 },
]

// sort est impur 
const sortedArrayAsc = [...users].sort((a, b) => a.age - b.age)

console.log(sortedArrayAsc)

const sortedArrayDes = [...users].sort((a, b) => b.age - a.age)

console.log(sortedArrayDes);

