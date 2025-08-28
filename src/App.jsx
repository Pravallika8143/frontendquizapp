import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Quiz from './Quiz';
import QuizMenu from './QuizMenu';
import AuthTab from './AuthTab';

function App() {
  return (
    <div className="border border-1 p-2 m-2">
      <div className='d-flex flex-wrap justify-content-between'>
        <Link to="/" className='text-decoration-none text-dark'>
          <h1>Quiz Champ!!!</h1>
        </Link>
        <AuthTab></AuthTab>
      </div>
      <QuizMenu></QuizMenu>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App;
