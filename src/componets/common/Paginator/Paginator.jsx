import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";//чтоб удобней было добовлять несколько классов


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);//Считаем сколько страниц будет

	let pages = [];//массив для страниц
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);//Количество порций страниц
	let [portionNumber, setPortionNumber] = useState(1);//текущий номер порции, useState-использовать локальный State
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;//Левая граница порции
	let rightPortionPageNumber = portionNumber * portionSize;//Правая граница порции

	// return <div>
	// 	{pages.map(p => {
	// 		return <span className={currentPage === p && styles.selectedPage}
	// 								 onClick={(e) => {
	// 									 onPageChanged(p);
	// 								 }}>{p}</span>
	// 	})}
	// </div>
	return <div className={styles.paginator}>
		{portionNumber > 1 &&
		<button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map((p) => {
				return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
										 key={p}
										 onClick={(e) => {onPageChanged(p);}}
								>{p}</span>
			})}

		{portionCount > portionNumber &&
		<button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
	</div>
}

export default Paginator;