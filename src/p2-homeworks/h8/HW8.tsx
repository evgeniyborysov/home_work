import React, { useReducer } from "react";
import {
	homeWorkReducer,
	peopleAllAC,
	peopleCheckAgeAC,
	peopleSortUpAC,
	peopleSortDownAC,
	initialPeople,
	UserType,
} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function HW8() {
	const [people, dispatch] = useReducer(homeWorkReducer, initialPeople); // need to fix any

	// need to fix any
	const finalPeople = people.map((p: UserType) => (
		<div key={p._id}>
			<span>{`${p.name} ${p.age}`}</span>
		</div>
	));

	const sortUp = () => {
		const action = peopleSortUpAC();
		dispatch(action);
	};

	const sortDown = () => {
		const action = peopleSortDownAC();
		dispatch(action);
	};

	const check = (event: any) => {
		console.log(event);

		const age = event.target.value;
		const action = peopleCheckAgeAC(age);
		dispatch(action);
	};

	const all = () => {
		const action = peopleAllAC();
		dispatch(action);
	};

	console.log(initialPeople);
	return (
		<div>
			<hr />
			homeworks 8{/*should work (должно работать)*/}
			{finalPeople}
			<div>
				<SuperButton onClick={all}>all</SuperButton>
				<SuperButton onClick={sortUp}>sort up</SuperButton>
				<SuperButton onClick={sortDown}>sort down</SuperButton>
				<SuperButton value={18} onClick={check}>
					check 18
				</SuperButton>
			</div>
			<div></div>
			<hr />
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativePeople/>*/}
			<hr />
		</div>
	);
}

export default HW8;
