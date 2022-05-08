import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    {id: 1, title: 'wash dishes', completed: false},
    {id: 2, title: 'make dinner', completed: true},
    {id: 3, title: 'clean bathroom', completed: true},
  ]
  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo={todos}/>)
      })}
    </div>
  );
}

export default App;
