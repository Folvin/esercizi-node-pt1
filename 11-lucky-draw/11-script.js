function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("joe")
  .then((message) => console.log(message))
  .then(() => luckyDraw("Caroline"))
  .then((message) => console.log(message))
  .then(() => luckyDraw("Sabrina"))
  .then((message) => console.log(message))
  .catch((err) => console.log(err.message));
