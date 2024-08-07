import React from 'react';
import './Pagination.css';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	PaginationArrowLeftIcon,
	PaginationArrowRightIcon,
} from '../../assets/icons';

export default function Pagination({
	paginationNumber,
	itemsperPage,
	paginationCount,
	handleClick,
	href,
}) {
	const pageNumber = useParams().pageNumber.slice(4);
	const Map = new Array(paginationCount).fill(0);

	console.log(Map);

	useEffect(() => {
		handleClick(1);
	}, [paginationNumber, paginationCount]);

	return (
		<section className="pagination-container">
			<div className="paginaton-left-icon">
				<PaginationArrowLeftIcon></PaginationArrowLeftIcon>
			</div>

			<div className="pagination-list__container">
				<ul className="pagination-list">
					{Map.map((_, index) => (
						<li
							// onClick={handleClick}
							key={index}
							className={`pagination-item ${
								index + 1 == pageNumber &&
								'pagination-item__selected'
							}`}
						>
							<Link
								style={{
									width: '100%',
									height: '100%',
								}}
								to={`${href}${index + 1}`}
							>
								{index + 1}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="paginaton-right-icon">
				<PaginationArrowRightIcon></PaginationArrowRightIcon>
			</div>
		</section>
	);
}
