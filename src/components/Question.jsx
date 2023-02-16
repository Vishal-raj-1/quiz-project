import React from 'react'

const Question = ({ currentQuestion, activeQuestion, submittedData, updateSubmission, selectedOption }) => {
    console.log("submittedData", submittedData)
    console.log("activeQuestion", activeQuestion)
    console.log("vv", selectedOption, activeQuestion.text)
    return (
        <div>
            <h1>{activeQuestion.question}</h1>
            {
                activeQuestion.options.map((option) => (
                    <label>
                        <input
                            type="radio"
                            value={option.text}
                            checked={selectedOption == option.text}
                            onChange={() => updateSubmission(currentQuestion, option.text)}
                        />
                        {option.text}
                    </label>
                ))
            }
        </div>
    )
}

export default Question