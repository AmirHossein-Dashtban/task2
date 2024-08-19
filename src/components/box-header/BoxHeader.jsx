import React from "react";
import "./BoxHeader.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/login/userSlice";
import { toggle } from "../alert/alertSlice";

export default function BoxHeader({
	leftIcon = [null, ""],
	headingText,
	rightIcon = [null, ""],
}) {
	const dispatch = useDispatch();

	return (
		<section className='box-header'>
			{typeof leftIcon[1] === "function" ? (
				<div
					onClick={() => {
						dispatch(toggle());
					}}
					className='box-header__right-icon'>
					{leftIcon[0]}
				</div>
			) : (
				<Link>
					<div
						onClick={() => {
							dispatch(toggle());
						}}
						className='box-header__right-icon'>
						{leftIcon[0]}
					</div>
				</Link>
			)}

			<div className='box-header__heading'>
				<p className='box-header__heading-text'>{headingText}</p>
			</div>

			{typeof rightIcon[1] === "function" ? (
				<div onClick={rightIcon[1]} className='box-header__right-icon'>
					{rightIcon[0]}
				</div>
			) : (
				<Link to={rightIcon[1]}>
					<div className='box-header__left-icon'>{rightIcon[0]}</div>
				</Link>
			)}
		</section>
	);
}
