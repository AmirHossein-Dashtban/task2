import React from 'react';
import './Pagination.css';
import {
	PaginationArrowLeftIcon,
	PaginationArrowRightIcon,
} from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/tasks/asyncActions';

export default function Pagination() {

	const paginationCount = useSelector((state) => state.tasks.totalPage);
	const paginationNumber = useSelector((state) => state.page.page);
	const dispatch = useDispatch();

	return (
		<section className="pagination-container">

			<div
				style={paginationNumber != 1 ? { cursor: 'pointer' } : { opacity: 0.5 }}
				onClick={() => { if (paginationNumber != 1) dispatch(changePage(paginationNumber - 1)) }}
				className="paginaton-left-icon">
				<PaginationArrowLeftIcon />
			</div>

			<div className="pagination-list__container">
				<ul className="pagination-list">

					{
						paginationNumber != 1 &&
						<li
							key={paginationNumber - 1}
							className={`pagination-item `}
							onClick={() => dispatch(changePage(paginationNumber - 1))}
						>

							<a style={{ height: '100%', width: '100%' }}>{paginationNumber - 1}</a>
						</li>
					}

					<li
						key={paginationNumber}
						className={`pagination-item pagination-item__selected`}
					>

						<a style={{ height: '100%', width: '100%' }}>{paginationNumber}</a>
					</li>

					{
						paginationNumber != paginationCount &&
						<li
							key={paginationNumber + 1}
							className={`pagination-item `}
							onClick={() => dispatch(changePage(paginationNumber + 1))}
						>

							<a style={{ height: '100%', width: '100%' }}>{paginationNumber + 1}</a>
						</li>
					}

				</ul>
			</div>

			<div
				style={paginationNumber != paginationCount ? { cursor: 'pointer' } : { opacity: 0.5 }}
				onClick={() => { if (paginationNumber != paginationCount) dispatch(changePage(paginationNumber + 1)) }}
				className="paginaton-right-icon">
				<PaginationArrowRightIcon />
			</div>

		</section >
	);
}
