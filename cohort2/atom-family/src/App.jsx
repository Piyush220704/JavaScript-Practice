
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      <br />
      {todo.description}
      <br />
    </>
  )
}

export default App
