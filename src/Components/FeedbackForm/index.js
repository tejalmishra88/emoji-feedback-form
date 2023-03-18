
import HappinessPicker from '../HappinessPicker'
import { useEffect, useState } from "react";
import "./index.css"

const FeedbackForm = () => {
    const [feedbackTotal, setFeedbackTotal] = useState(0)
    const [scores, setScores] = useState({"food":null, "service":null, "valueForMoney":null})
  
    useEffect(() => {
      let totalScore = 0
      for (let keyName in scores) {
        totalScore += scores[keyName]
      }
      setFeedbackTotal(totalScore)
    }, [scores]);
  return (
    <>
   <h1>Let us know how we did!</h1>
    <h2>Food</h2>
        <HappinessPicker serviceType = "food" value = {scores.food} setScores = {setScores}/>
    <h2>Service</h2>
        <HappinessPicker serviceType = "service" value = {scores.service} setScores = {setScores}/>
    <h2>Value for money</h2>
        <HappinessPicker serviceType = "valueForMoney" value = {scores.valueForMoney} setScores = {setScores}/>
    <h2>Total Feedback Score: {feedbackTotal}/12</h2>
    </>
  )
}

export default FeedbackForm