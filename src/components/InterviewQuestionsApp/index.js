import {Component} from 'react'

import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  state = {
    questionsList: [],
    showResult: false,
    count: 0,
  }

  componentDidMount() {
    this.getQuetions()
  }

  getQuetions = async () => {
    const api =
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.results.map(quetion => ({
      questions: quetion.question,
      correctAnswer: quetion.correct_answer,
      wrongAnswers: quetion.incorrect_answers,
    }))
    this.setState({questionsList: updatedData})
  }

  countingFun = () => {
    this.setState(prevCount => ({count: prevCount.count + 1}))
  }

  totalScore = () => {
    this.setState({showResult: true})
  }

  render() {
    const {questionsList, showResult, count} = this.state
    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">15 Minutes of Interview</h1>
          <img
            className="interview-image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <div className="filter-container">
          <div className="questions-container">
            {questionsList.map(eachQuestion => (
              <InterviewQuestion
                question={eachQuestion}
                countingFun={this.countingFun}
              />
            ))}
          </div>
        </div>
        <button type="button" onClick={this.totalScore} className="button">
          Submit
        </button>
        {showResult && <h1 className="score">{count}/10</h1>}
      </div>
    )
  }
}

export default InterviewQuestionsApp
