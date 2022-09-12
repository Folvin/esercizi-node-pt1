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

(async () => {
  try {
    console.log(await luckyDraw("Tina"));
    console.log(await luckyDraw("jorge"));
    console.log(await luckyDraw("julien"));

  } catch (error) {
    console.log(error.message);
  }
})();
