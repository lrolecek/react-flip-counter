import React, {useState, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

import './style.css';

// ZDE NASTAVIT: jak rychle probiha animace
// POZOR:
// - je potreba nastavit minimalne o cca 50ms mensi hodnotu, nez jak rychle se zvetsuje pocitadlo
// - stejnou hodnotu je potreba nastavit i v proměnné na začátku CSS
const ANIMATION_SPEED = 450;

const Digit = ({digit}) => {

	const oldDigit = useRef(' ');
	const newDigit = useRef(' ');
	const [flip, setFlip] = useState(false);

	useEffect(
		() => {
			newDigit.current = digit;
			setFlip(true);
		},
		[digit]
	);

	const flipDone = () => {
		setFlip(false);
		oldDigit.current = newDigit.current;
	}

	return (
		<CSSTransition in={flip} timeout={ANIMATION_SPEED} onEntered={flipDone} exit={false} className="digit">
			<div className="digit">
				<div className="old-bottom"><span>{oldDigit.current}</span></div>
				<div className="new-top"><span>{newDigit.current}</span></div>
				<div className="old-top"><span>{oldDigit.current}</span></div>
				<div className="new-bottom"><span>{newDigit.current}</span></div>
			</div>
		</CSSTransition>
	);
}

export default Digit;