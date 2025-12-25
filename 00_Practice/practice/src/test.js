const numberOfPlayers = 5;
const newArr = [];

for (let i = 1; i <= numberOfPlayers; i++) {
  newArr.push({ id: i, pName: `Player ${i}` });
}

console.log(newArr);
