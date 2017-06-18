
export default (state = [], payload) => {
  switch(payload.type) {
    case 'add':
      return [...state, payload.item];
    case 'remove':
      console.log('STATE', state);
      console.log('PAYLOAD', payload);
      return state.filter(n => n.id !== payload.item.id)
    default:
      return state;
  }
};