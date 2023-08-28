import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './questionDetail.css'
import AnswerQuestion from '../../components/AnswerQuestion/AnswerQuestion';
import Answer from '../../components/answers/Answers';


const SingleQuestion = () => {
  let params = useParams();
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => { 
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4500/api/questions/:${params.id}`);
        setQuestion(response.data.data);
      } catch (err) {
        alert(err);
        console.log("problem", err);
      }
      
      answersByQuestionId();

    }
    fetchData();


  }, []);
  
  const answersByQuestionId = async () => {
    try {
      const answersRes = await axios.get(
        `http://localhost:4500/api/answers/:${params.id}`
      );
      setAnswers(answersRes.data.data);
    } catch (err) {
      console.log("problem", err);
    }
  };
  console.log(answers);
  return (
    <>
      <h3>Question</h3>
      <h5>{question?.question}</h5>
       <p>{question?.category}</p>
      <p>{question?.question_description}</p>
      <p>{question?.inserted_datetime}</p>
      <hr />
      <hr />
      <div>{answers.length > 0 && <h3>Answer From The Community</h3>}</div>
          {answers && answers?.map((answer) => (
        
            <Answer answer={answer?.answer} userName={answer.user_name} profile={answer.image_url} answered_date={ answer.answered_date} />
       
      ))}
      <AnswerQuestion questionId={question?.question_id}/>
      <hr />
    </>

  )
}

export default SingleQuestion