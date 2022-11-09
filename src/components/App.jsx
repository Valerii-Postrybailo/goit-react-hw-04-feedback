import React from "react"
import { useState } from "react";

import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'

export const App = () => {

  // const [state, setState] = useState([])
  const [good, setGoodVote] = useState(0)
  const [neutral, setNeutralVote] = useState(0)
  const [bad, setBadVote] = useState(0)

  const state = {
    good,
    neutral,
    bad,
  }

  const onLeaveFeedback = evt => {
    switch(evt){
      case "good":
        setGoodVote(good + 1)
      break
      
      case "neutral":
        setNeutralVote(neutral + 1)
      break

      case "bad":
        setBadVote(bad + 1)
      break

      default:
        return
    }
    
    // this.setState(prevState => ({
    //   [evt]: prevState[evt] + 1,
    // }));

  };

  const countTotalFeedback = () => {
    return bad + good + neutral
  }

  const countPositiveFeedbackPercentage = () => {
    return Number((good * 100/countTotalFeedback()).toFixed())
  }
  
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
          options = {state}
          onLeaveFeedback = {onLeaveFeedback}>
        </FeedbackOptions>

      </Section>

      <Section title="Statistics">
        {bad + good + neutral < 1 ? (
          <Notification message = "There is no feedback" />
        ) : (
          <Statistics 
            good={good}
            neutral={neutral} 
            bad={bad} 
            total={bad + good + neutral} 
            positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics>
        )}
      </Section>
    </div>
    )
}
