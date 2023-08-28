import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

const Home = () => {
return (
    <div className="container my-5 home-container">
      <div className="d-flex mb-5 justify-content-between">
        <Link to='AskQuestion' ><button className="ask_button" >
          Ask Question
        </button></Link>
        <h4>Welcome</h4>
      </div>
      <h3>Questions</h3>
      <div>
        {/* {allQuestions.map((question) => (
          <div key={question.post_id}>
            <hr />
            <Link
              to={`questions/${question.post_id}`}
              className="text-decoration-none text-reset"
            >
              
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Home