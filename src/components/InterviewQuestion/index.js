import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {
    isAnswer: false,
    checking: false,
  }

  clickingAnswer = event => {
    const {question, countingFun} = this.props
    const {correctAnswer} = question

    let data
    if (event.target.value === correctAnswer) {
      data = true
      countingFun()
    } else {
      data = false
    }
    console.log(data)
    this.setState({isAnswer: true, checking: data})
  }

  renderFun = () => {
    const {checking} = this.state
    if (checking === true) {
      return <p className="correct">Correct</p>
    }
    return <p className="wrong">Wrong</p>
  }

  render() {
    const {question} = this.props
    const {questions, correctAnswer, wrongAnswers} = question
    const set1 = [...wrongAnswers, correctAnswer]
    set1.sort()
    const [one, two, three, four] = set1
    const {isAnswer} = this.state
    console.log(Array.from(set1))
    return (
      <div className="question-container">
        <h1 className="question-text">{questions}</h1>
        <div>
          <div>
            <input
              type="radio"
              value={one}
              name={correctAnswer}
              id={one}
              onChange={this.clickingAnswer}
              disabled={isAnswer}
            />
            <label htmlFor={one}>{one}</label>
          </div>
          <div>
            <input
              type="radio"
              value={four}
              name={correctAnswer}
              id={four}
              onChange={this.clickingAnswer}
              disabled={isAnswer}
            />
            <label htmlFor={four}>{four}</label>
          </div>
          <div>
            <input
              type="radio"
              value={two}
              name={correctAnswer}
              id={two}
              onChange={this.clickingAnswer}
              disabled={isAnswer}
            />
            <label htmlFor={two}>{two}</label>
          </div>
          <div>
            <input
              type="radio"
              value={three}
              name={correctAnswer}
              id={three}
              onChange={this.clickingAnswer}
              disabled={isAnswer}
            />
            <label htmlFor={three}>{three}</label>
          </div>
        </div>
        {isAnswer && this.renderFun()}
      </div>
    )
  }
}

export default InterviewQuestion
