import React, {useState, useEffect} from 'react';
import './style.css';

import Digit from './../Digit';


// ZDE NASTAVIT: kolik cislic ma pocitadlo
const NUMBER_OF_DIGITS = 5;

// ZDE NASTAVIT: po klika milisekundach se zvetsi pocitadlo
// POZOR: nutno upravit adekvatne delku animace v komponente Digit i v jejim CSS
const COUNTER_SPEED = 500;


const Counter = () => {

	const [count, setCount] = useState(0);
	const [digits, setDigits] = useState(Array.from('0'.repeat(NUMBER_OF_DIGITS)));

	useEffect(
		() => {
			const timer = setTimeout(increaseCount, COUNTER_SPEED);
			return () => clearTimeout(timer);
		}
	);

	const increaseCount = () => {
		const newCount = count + 1;
		setCount(newCount);
		setDigits(Array.from(newCount.toString().padStart(NUMBER_OF_DIGITS, '0')));
	}

	return (
		<div className="counter">
			{
				digits.map( (digit, index) => <Digit key={index} digit={digit} /> )
			}
		</div>
	);
}

export default Counter;