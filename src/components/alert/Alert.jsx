import React from "react";
import "./Alert.css";
import { useDispatch } from "react-redux";
import { toggle } from "./alertSlice";

export default function Alert({ alertText, yesDispatch }) {
	const dispatch = useDispatch();

	return (
		<section className='alert-container'>
			<div className='alertMessage'>
				<h2 className='alert-header'>Alert</h2>
				<span
					className='closeBtn'
					onClick={() => {
						dispatch(toggle());
					}}>
					×
				</span>

				<strong>{alertText}</strong>

				<div className='button-container'>
					<button
						className='button danger'
						onClick={() => {
							dispatch(toggle());
						}}>
						NO
					</button>
					<button
						onClick={() => {
							dispatch(toggle());
							yesDispatch();
						}}
						className='button success'>
						YES
					</button>
				</div>
			</div>
		</section>
	);
}
