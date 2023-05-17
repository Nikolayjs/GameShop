export const formConstructor = (data, buttons) => {
  const array = [];
  data.map((input) => {
    return array.push({
      title: input[0],
      value: input[1],
      id: input[2],
      onChange: input[3],
      label: input[4],
    });
  });
  return {
    inputs: array,
    buttons: {submit: buttons[0], close: buttons[1]},
  };
};
