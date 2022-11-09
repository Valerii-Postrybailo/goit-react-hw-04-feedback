import React from "react"
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
  };


  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral
  }

  countPositiveFeedbackPercentage = () => {
    return Number((this.state.good * 100/this.countTotalFeedback()).toFixed())
  }

  render(){

    return(
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >

      <Section title="Please leave feedback">

        <FeedbackOptions 
          options = {this.state}
          onLeaveFeedback = {this.onLeaveFeedback}>
        </FeedbackOptions>

      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() < 1 ? (
          <Notification message = "There is no feedback" />
        ) : (
          <Statistics 
            good={this.state.good}
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
        )}
      </Section>
    </div>
    )
  }
}
