export const getCart = (cart, games) => {
  const result = [];
  for (const game of games) {
    for (const c of cart) {
      if (game._id === c) {
        result.push(game);
      }
    }
  }
  return result;
};
