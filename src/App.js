import './App.css';
import ForwardrefLayout from './components/UseRef/ForwardrefLayout';
import AddUser from './components/AddUser';
import TodoList from './components/TodoList';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      {/* <ForwardrefLayout />
   
      <TodoList /> */}
      <AddUser />
      <UpdateForm />
    </div>
  );
}

export default App;
