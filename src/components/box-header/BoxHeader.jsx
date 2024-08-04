import React from 'react';
import './BoxHeader.css';

export default function BoxHeader({
	leftIcon = null,
	headingText,
	rightIcon = null,
}) {
	return (
		<section className="box-header">
			<div className="box-header__right-icon">{leftIcon}</div>

			<div className="box-header__heading">
				<p className="box-header__heading-text">{headingText}</p>
			</div>

			<div className="box-header__left-icon">{rightIcon}</div>
		</section>
	);
}
