
export default (state = [], payload) => {
  switch(payload.type) {
    case 'populate':
      return [...state, payload.item];
    default:
      return state;
  }
}