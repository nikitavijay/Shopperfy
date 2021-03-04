import { createStore } from 'redux'

const initialState = {
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return { items: [...state.items, action.payload] }
      break
    case 'REMOVEITEM':{
      var item = state.items.filter(i => i.id !== action.payload.id)
      return { items: item }
      break}
  }
}

export const store = createStore(reducer)
