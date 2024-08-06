import React from 'react';
import './BoxHeader.css';
import { Link } from 'react-router-dom';

export default function BoxHeader({
	leftIcon = [null, ''],
	headingText,
	rightIcon = [null, ''],
}) {
	return (
		<section className="box-header">
			{typeof leftIcon[1] === 'function' ? (
				<div onClick={leftIcon[1]} className="box-header__right-icon">
					{leftIcon[0]}
				</div>
			) : (
				<Link to={leftIcon[1]}>
					<div className="box-header__right-icon">{leftIcon[0]}</div>
				</Link>
			)}

			<div className="box-header__heading">
				<p className="box-header__heading-text">{headingText}</p>
			</div>

			{typeof rightIcon[1] === 'function' ? (
				<div onClick={rightIcon[1]} className="box-header__right-icon">
					{rightIcon[0]}
				</div>
			) : (
				<Link to={rightIcon[1]}>
					<div className="box-header__left-icon">{rightIcon[0]}</div>
				</Link>
			)}
		</section>
	);
}
