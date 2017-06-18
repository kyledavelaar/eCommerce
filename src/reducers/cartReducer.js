
export default (state = [], payload) => {
  switch(payload.type) {
    case 'add':
      return [...state, payload.item];
    case 'remove':
      return []
    default:
      return state;
  }
};