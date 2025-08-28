import React from 'react'
import { Link } from 'react-router-dom'

function QuizMenu() {
  return (
    <div className='bg-secondary-subtle p-2'>
        <ul className='d-flex flex-wrap list-unstyled gap-5 align-items-center '>
          <li>
            <Link to="/quiz/sport_and_leisure" className='text-decoration-none text-dark'>Sports</Link>
          </li>
          <li>
            <Link to="/quiz/science" className='text-decoration-none text-dark'>Science</Link>
          </li>
          <li>
            <Link to="/quiz/film_and_tv" className='text-decoration-none text-dark'>Film</Link>
          </li>
        </ul>
    </div>
  )
}

export default QuizMenu