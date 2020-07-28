
export const getProfile = id => ({
    type: 'GET_PROFILE',
    payload: {
      id
    }
  });

  export const addUser = (name, email, webId) => ({
    type: 'ADD_USER',
    payload: {
      name,
      email,
      webId
    }
  });

export const getUsers = () => dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }