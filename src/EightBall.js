import React, { useState } from 'react';

const EightBall = () => {
	const answers = [
		{ msg: "It is certain.", color: "green" },
		{ msg: "It is decidedly so.", color: "green" },
		{ msg: "Without a doubt.", color: "green" },
		{ msg: "Yes - definitely.", color: "green" },
		{ msg: "You may rely on it.", color: "green" },
		{ msg: "As I see it, yes.", color: "green" },
		{ msg: "Most likely.", color: "green" },
		{ msg: "Outlook good.", color: "green" },
		{ msg: "Yes.", color: "green" },
		{ msg: "Signs point to yes.", color: "goldenrod" },
		{ msg: "Reply hazy, try again.", color: "goldenrod" },
		{ msg: "Ask again later.", color: "goldenrod" },
		{ msg: "Better not tell you now.", color: "goldenrod" },
		{ msg: "Cannot predict now.", color: "goldenrod" },
		{ msg: "Concentrate and ask again.", color: "goldenrod" },
		{ msg: "Don't count on it.", color: "red" },
		{ msg: "My reply is no.", color: "red" },
		{ msg: "My sources say no.", color: "red" },
		{ msg: "Outlook not so good.", color: "red" },
		{ msg: "Very doubtful.", color: "red" },
	  ]
	  const changeBall = () => {
		const random = Math.floor(Math.random() * 20);
		setColor(answers[random].color)
		setAnswer(answers[random].msg)
	  }
	  const reset = () => {
		setColor('black')
		setAnswer('Think of a Question')
	  }
	  const [color, setColor] = useState('black')
	  const [answer, setAnswer] = useState('Think of a Question')

	return (
		<div>
			<h1>🎱 MAGIC EIGHT BALL 🎱</h1>
			<button className={color} onClick={changeBall}>{answer}</button>
			<br></br>
			<button className='reset' onClick={reset}>Reset</button>		
		</div>
	)
}
 
export default EightBall;