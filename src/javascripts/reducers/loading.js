const INITIAL_STATE = {};

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING':
      let { active } = action.payload;
      return {
        ...state,
        active
      };
    default:
      return state;
  }
};

export default loading;
