import React, { useContext, useState } from "react";
import "./askQuestion.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from '../../utility/stateprovider';
export default function AskQuestion() {
  const [{user }, dispatch] = useStateValue();
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
          id: user.user.id,
          question: form.question,
           catagory: form.question_catagory,
          questionDescription: form.questionDescription,
        });
    try {
      const response = await axios.post(
        "http://localhost:4500/api/questions/createQuestion",
        {
          user_id: user.user.id,
          question: form.question,
          catagory: form.question_catagory,
          questionDescription: form.questionDescription,
        }
      );
      alert(response.data.msg);
      navigate("/");
    } catch (err) {
      alert(err)
      console.log("problem", err);
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center my-5">
        <h3>Steps to write a good question</h3>
        <ul className="question_steps">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-5 question_form  justify-content-between"
      >
        <h3>Ask a public question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>
        <input
          className="question_title"
          type="text"
          name="question"
          Placeholder="Title"
          onChange={handleChange}
        />
          <input
          className="question_title"
          type="text"
          name="question_catagory"
          Placeholder="question_catagory"
          onChange={handleChange}
        />
        <textarea
          className="question_input"
          placeholder="Question Description..."
          name="questionDescription"
          onChange={handleChange}
        ></textarea>
        <button className="question_post_btn" type="">
          Post Your Question
        </button>
      </form>
    </div>
  );
}
