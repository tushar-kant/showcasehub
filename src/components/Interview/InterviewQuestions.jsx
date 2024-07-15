import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import interviewQuestions from '../../data/interviewQuestions.json';
import './InterviewQuestions.css'; // Import external CSS file
import Navbar from '../Navbar';
import Breadcrumbs from '../Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import Footer from '../../pages/Footer';

const InterviewQuestions = () => {
  const { category } = useParams();
  const questions = interviewQuestions.find(q => q.category.toLowerCase() === category.toLowerCase());

  const [visibleAnswers, setVisibleAnswers] = useState(
    new Array(questions ? questions.questions.length : 0).fill(true)  // Initialize with 'true' to make answers visible by default
  );

  if (!questions) {
    return (
      <div className="container mt-4">
        <h2 className="text-center">Category not found</h2>
      </div>
    );
  }

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const pageTitle = `Most Asked ${category} Interview Questions with Answers - 2024 | ShowcaseHub`;
  const metaDescription = `Explore ${category} interview questions and answers to prepare for your next job interview.`;
  const metaKeywords = `${category} interview questions, ${category} questions, job interview questions, technical interview questions`;
  const canonicalUrl = `/interview-questions/${category}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Add more meta tags as needed */}
      </Helmet>

      <Navbar />

      <div className="container mt-4" id="interview-questions-container">
        <h1 className="mb-4">{category} Interview Questions</h1>

        {questions.questions.map((q, index) => (
          <div key={index} className="question-container mb-3">
            <div className="question-header" onClick={() => toggleAnswerVisibility(index)}>
              <div className="question-text"><span className='text-danger'>Question {index + 1}: </span>{q.question}</div>
              <div className="toggle-answer">{visibleAnswers[index] ? 'Hide Answer' : 'View Answer'}</div>
            </div>
            <div className={`answer ${visibleAnswers[index] ? 'visible' : ''}`}>
              <p className="answer-text"><strong className='text-success'>Answer:</strong></p>
              <p className="answer-text">{q.answer}</p>
              {q.code && (
                <div className="code-snippet">
                  <p className="code-label">Example Code:</p><hr />
                  <pre className="code-block">{q.code}</pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default InterviewQuestions;
