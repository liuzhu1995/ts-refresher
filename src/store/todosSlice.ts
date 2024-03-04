import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
      })
    },
    todoToggled() {},
  },
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
