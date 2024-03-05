import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { log } from 'console'

type Todo = {
  id: number
  title: string
  completed: boolean
}
type Action = {
  type: string
}
type RawDataTodo = {
  id: number
  userId: number
  title: string
  completed: boolean
}
const initialState: Todo[] = []
async function get(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data.')
  }
  const data = await response.json()
  return data
}
export const fetchTodo = createAsyncThunk('todos/get', () =>
  get('https://jsonplaceholder.typicode.com/todos')
)
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<Todo>) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed,
      })
    },
    todoToggled() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        console.log('pending')

        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(fetchTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        console.log('fulfilled', action.payload)
        state = action.payload
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        console.log('rejected')
      })
  },
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
