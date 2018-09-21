export const loading = (active) => {
  return {
    type: 'LOADING',
    payload: {
      active
    }
  };
};
