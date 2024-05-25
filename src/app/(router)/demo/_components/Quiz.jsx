"use client"
import React, { useState, useEffect } from 'react';

const questionsData = [
  { quiz_id: 1, question: "You can learn a lot about the local _______ by talking to local people.", answers: ["territory", "area", "land", "nation"] },
  { quiz_id: 2, question: "It's good to have someone to ________ you when you are visiting a new place.", answers: ["lead", "take", "guide", "bring"] },
  { quiz_id: 3, question: "When you ______ your destination, your tour guide will meet you at the airport.", answers: ["arrive", "reach", "get", "achieve"] },
  { quiz_id: 4, question: "It can be quite busy here during the tourist ______", answers: ["season", "phase", "period", "stage"] },
  { quiz_id: 5, question: "Make sure you _______ a hotel before you come to our island, especially in the summer.", answers: ["book", "keep", "put", "buy"] },
  { quiz_id: 6, question: "Captain Cook discovered Australia on a _______ to the Pacific.", answers: ["vacation", "travel", "cruise", "voyage"] },
  { quiz_id: 7, question: "Most tourist attractions in London charge an admission ________.", answers: ["fare", "ticket", "fee", "pay"] },
  { quiz_id: 8, question: "The hotel where we are _______ is quite luxurious.", answers: ["living", "existing", "remaining", "staying"] },
  { quiz_id: 9, question: "Is English an ________ language in your country?", answers: ["mother", "official", "living", "old"] },
  { quiz_id: 10, question: "He spoke a ______ of French that we found hard to understand.", answers: ["slang", "jargon", "dialect", "language"] },
];

const results = [
  { quiz_id: 1, answer: "area" },
  { quiz_id: 3, answer: "reach" },
  { quiz_id: 2, answer: "guide" },
  { quiz_id: 4, answer: "season" },
  { quiz_id: 5, answer: "book" },
  { quiz_id: 6, answer: "voyage" },
  { quiz_id: 7, answer: "fee" },
  { quiz_id: 8, answer: "staying" },
  { quiz_id: 9, answer: "official" },
  { quiz_id: 10, answer: "dialect" },
];

function randomArray(array) {
  return array.sort(() => Math.random() - Math.random());
}

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listSubmit, setListSubmit] = useState([]);
  const [listResults, setListResults] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [time, setTime] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const shuffledQuestions = randomArray(questionsData.map(q => ({
      ...q,
      answers: randomArray([...q.answers])
    })));
    setQuestions(shuffledQuestions);
    setListSubmit(Array(shuffledQuestions.length).fill(null));
    setListResults(Array(shuffledQuestions.length).fill(null));
  }, []);

  useEffect(() => {
    if (time <= 0) {
      handleSubmit();
      return;
    }

    if (!isSubmit) {
      const intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isSubmit]);

  const handleAnswerClick = (index) => {
    if (!isSubmit) {
      const updatedListSubmit = [...listSubmit];
      updatedListSubmit[currentIndex] = index;
      setListSubmit(updatedListSubmit);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  };

  const handleSubmit = () => {
    if (listSubmit.includes(null)) {
      alert("Bạn chưa chọn hết đáp án");
      return;
    }
    setIsSubmit(true);
    handleCheckResults();
  };

  const handleCheckResults = () => {
    let correct = 0;
    const updatedListResults = questions.map((item, index) => {
      const result = results.find((r) => r.quiz_id === item.quiz_id);
      const isCorrect = item.answers[listSubmit[index]] === result.answer;
      if (isCorrect) correct++;
      return {
        status: isCorrect ? 'correct' : 'incorrect',
        correctAnswerIndex: item.answers.indexOf(result.answer),
        selectedAnswerIndex: listSubmit[index]
      };
    });
    setListResults(updatedListResults);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const calculateProgress = () => {
    return `${Math.floor((listSubmit.filter((answer) => answer !== null).length / questions.length) * 100)}%`;
  };

  const mainColor = "#273d30";
  const secondaryColor = "#333333a1";

  return (
    <div style={{
      backgroundColor: "white",
      minHeight: "50rem",
      width: "80rem",
      borderRadius: "10px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      padding: "4rem"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "4rem"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}>
          <i className="fa-regular fa-clock" style={{ fontSize: "3rem" }}></i>
          <div style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold"
          }}>
            <span style={{
              fontSize: "1rem",
              color: secondaryColor
            }}>Time remaining</span>
            <p style={{
              color: mainColor,
              letterSpacing: "3px"
            }}>{formatTime(time)}</p>
          </div>
        </div>
        <button style={{
          padding: "0.8rem 2.5rem",
          backgroundColor: mainColor,
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          transition: "0.5s"
        }} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {questions.length > 0 && (
          <>
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <h5>Question {currentIndex + 1} of {questions.length}</h5>
              <p style={{
                fontWeight: "bold",
                fontSize: "1.6rem",
                height: "6rem"
              }}>{questions[currentIndex].question}</p>
              <ul style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                marginTop: "1rem"
              }}>
                {questions[currentIndex].answers.map((answer, index) => (
                  <li key={index} onClick={() => handleAnswerClick(index)} style={{
                    width: "40%",
                    padding: "1rem 2rem",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    cursor: "pointer",
                    backgroundColor: (() => {
                      if (isSubmit) {
                        if (listResults[currentIndex].correctAnswerIndex === index) {
                          return 'green';
                        } else if (listResults[currentIndex].selectedAnswerIndex === index) {
                          return 'red';
                        }
                      } else {
                        return listSubmit[currentIndex] === index ? mainColor : "transparent";
                      }
                    })(),
                    color: (() => {
                      if (isSubmit) {
                        if (listResults[currentIndex].correctAnswerIndex === index || listResults[currentIndex].selectedAnswerIndex === index) {
                          return 'white';
                        }
                      } else {
                        return listSubmit[currentIndex] === index ? "white" : "inherit";
                      }
                    })(),
                    transition: "0.5s"
                  }}>
                    <span>{String.fromCharCode(65 + index)}.</span>
                    <span style={{ marginLeft: "1rem" }}>{answer}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <svg viewBox="0 0 40 40" style={{ width: "10rem", height: "10rem", display: "block" }}>
                <circle cx="20" cy="20" r="18" fill="none" stroke={secondaryColor} strokeWidth="4" />
                <circle cx="20" cy="20" r="18" fill="none" stroke={mainColor} strokeWidth="4" strokeDasharray={`${calculateProgress()} 999`} />
              </svg>
              <span style={{ fontSize: "2rem" }}>{calculateProgress()}</span>
              <ul style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "2rem"
              }}>
                {questions.map((_, index) => (
                  <li key={index} onClick={() => setCurrentIndex(index)} style={{
                    padding: "1rem 2rem",
                    borderRadius: "10px",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    backgroundColor: (() => {
                      if (isSubmit) {
                        return listResults[index].status === 'correct' ? 'green' : 'red';
                      } else {
                        return currentIndex === index ? mainColor : "transparent";
                      }
                    })(),
                    color: currentIndex === index || isSubmit ? "white" : "inherit",
                    fontWeight: "bold",
                    transition: "0.5s"
                  }}>
                    {index + 1}
                  </li>
                ))}
              </ul>
              <button style={{
                padding: "0.5rem 2rem",
                backgroundColor: "white",
                border: `1px solid ${mainColor}`,
                color: mainColor
              }} onClick={handlePrev}>Prev</button>
              <button style={{
                padding: "0.5rem 2rem",
                backgroundColor: "white",
                border: `1px solid ${mainColor}`,
                color: mainColor
              }} onClick={handleNext}>Next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
``
