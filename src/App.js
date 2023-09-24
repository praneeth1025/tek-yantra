
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import EditForm from './components/EditForm';
import TaskForm from './components/TaskForm';

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<TaskList />}/>
          <Route path='/tasks/:taskId' element={<TaskDetails />}/>
          <Route path='/editForm/:taskId' element={<EditForm />}/>
          <Route path='/form' element={<TaskForm />}/>
          
        </Routes>
      </Router>
   </>
  );
}

export default App;
