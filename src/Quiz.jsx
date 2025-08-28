import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Quiz() {
  var { category } = useParams();
  var [questions, setAllQuestions] = useState([]);
  var [score,setScore] = useState(null);
  var navigate = useNavigate();
  useEffect(()=>{
    if(!window.localStorage.getItem("token")) {
      alert("Please Login")
      navigate("/login")
    }
  },[])
   useEffect(()=>{
     // Changed the protocol from https to http
     fetch(`http://localhost:3800/getAllQuestions/${category}`,{
      headers:{
        token:window.localStorage.getItem("token")
      }
     })
       .then((res) => res.json())
       .then((data) => {
        console.log(data)
        if(data.msg === "sessionTimeout"){
          alert("Session TimedOut")
          navigate("/login")
        }else{
          setAllQuestions([...data]);
        }
        // console.log(data.updatedQuestions)
        
       });
   },[category]);
   function handleSelection(ev) {
    // console.log(ev);
    setAllQuestions(function (allQuestions) {
      return allQuestions.map((question) => {
        if (question.id === ev.target.name) {
          question.selectedOption = ev.target.value;
        }
        return question;
      });
    });
   }
  function submitQuiz(){
    fetch("http://localhost:3800/submitQuiz", {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({questions, category})
    })
    .then((res) => res.json())
    .then((data) => {
      setScore(data.score)
      setAllQuestions([...data.updatedQuestions.questions])
    });
  }
  useEffect(()=>{
    console.log("Questions Updated")
  },[questions])
  return (
    <div>
        <h1>Quiz on {category}</h1>
        {score && <h2>Score:{score}/10</h2>}
        {/* <p>{JSON.stringify(questions)}</p> */}
        <ol>
          {questions.map(({ question, options, id, correctAnswer}) => {
              return (
                <li>
                  {question.text}
                  <ul style={{ listStyle: "none"}}>
                    {options.map((option) => {
                      return (
                        <li>
                          <input 
                            type="radio" 
                            name={id} 
                            value={option} 
                            onChange={(e) => {
                              handleSelection(e)
                            }}
                          />
                          {option}
                          {correctAnswer}
                        </li>
                      );
                    })
                  }
                  </ul>
                </li>
              )
            })
          }
        </ol>
        <button onClick={()=>{submitQuiz()}}>Submit Quiz</button>
    </div>
  )
}

export default Quiz
