
export const addToCart = (item) => {
  return {
    type: 'add',
    item
  };
}


export const removeFromCart = (item) => {
  return {
    type: 'remove',
    item
  };
}