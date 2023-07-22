import React from 'react'

const QuestionCard = ({id, question }) => {
    return (
        <div style={{width:'100%',borderBottom:'1px solid gray',padding:'20px',margin:'20px',width:'98%'}}>
            <p>{`${id}. ${question}.?`}</p>
        </div>
    )
}

export default QuestionCard