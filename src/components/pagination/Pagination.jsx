import React from 'react';
import './Pagination.css';
import {
	PaginationArrowLeftIcon,
	PaginationArrowRightIcon,
} from '../../assets/icons';

export default function Pagination() {
	return (
		<section className="pagination-container">
			<div className="paginaton-left-icon">
				<PaginationArrowLeftIcon></PaginationArrowLeftIcon>
			</div>

			<div className="pagination-list__container">
				<ul className="pagination-list">
					<li className="pagination-item">13</li>
					<li className="pagination-item">14</li>
					<li className="pagination-item">15</li>
					<li className="pagination-item">16</li>
					<li className="pagination-item  pagination-item__selected">
						17
					</li>
					<li className="pagination-item">18</li>
					<li className="pagination-item">19</li>
				</ul>
			</div>

			<div className="paginaton-right-icon">
				<PaginationArrowRightIcon></PaginationArrowRightIcon>
			</div>
		</section>
	);
}
