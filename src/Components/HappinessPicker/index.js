import "./index.css"

const HappinessPicker = (props) => {
    const emojiScores = ['😦', '😞', '😐', '🙂', '😁']
    console.log('happinesspicker--prps-',props)
    function handleValueChange(newValue) {
        props.setScores((prevState) => ({...prevState, [props.serviceType]: newValue}))
      }
  return (
    <div className="buttonGroup">

        {emojiScores.map((emoji, index) => (
          <button 
            key={emoji}
            emoji={emoji}
            index={index}
            onClick={() => handleValueChange(index)}
            className={`selectButton ${props.value === index ? "active" : null}`}
          >{emoji}</button>
        ))}
    </div>
  )
}

export default HappinessPicker