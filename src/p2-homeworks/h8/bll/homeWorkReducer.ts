export type UserType = {
	_id: number;
	name: string;
	age: number;
};

export const initialPeople: UserType[] = [
	{ _id: 0, name: "Кот", age: 3 },
	{ _id: 1, name: "Александр", age: 66 },
	{ _id: 2, name: "Коля", age: 16 },
	{ _id: 3, name: "Виктор", age: 44 },
	{ _id: 4, name: "Дмитрий", age: 40 },
	{ _id: 5, name: "Ирина", age: 55 },
];

const ALL = "ALL";
const SORT_UP = "SORT_UP";
const SORT_DOWN = "SORT_DOWN";
const CHECK_AGE = "CHECK_AGE";

type ActionTypes =
	| peopleSortUpType
	| peopleCheckAgeType
	| peopleSortDownType
	| peopleAllType;

export const homeWorkReducer = (
	state: UserType[],
	action: ActionTypes
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case ALL: {
			return [...initialPeople];
		}
		case SORT_UP: {
			const sortPeopleUp = [...state].sort(function (a, b) {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
			// const sortTest = [...state].sort((a, b) => {
			// 	return a.name < b.name ? up : down;
			// });
			return sortPeopleUp;
		}
		case SORT_DOWN: {
			const sortPeopleDown = [...state].sort(function (a, b) {
				if (a.name > b.name) return -1;
				if (a.name < b.name) return 1;
				return 0;
			});
			return sortPeopleDown;
		}
		case CHECK_AGE: {
			return state.filter((people: any) => people.age >= action.payload);
		}

		default:
			return state;
	}
};

type peopleAllType = {
	type: typeof ALL;
};

type peopleSortUpType = {
	type: typeof SORT_UP;
	payload: string;
};

type peopleSortDownType = {
	type: typeof SORT_DOWN;
	payload: string;
};

type peopleCheckAgeType = {
	type: typeof CHECK_AGE;
	payload: number;
};

export const peopleAllAC = (): peopleAllType => {
	return {
		type: ALL,
	};
};
export const peopleSortUpAC = (): peopleSortUpType => {
	return {
		type: SORT_UP,
		payload: "up",
	};
};
export const peopleSortDownAC = (): peopleSortDownType => {
	return {
		type: SORT_DOWN,
		payload: "down",
	};
};
export const peopleCheckAgeAC = (age: number): peopleCheckAgeType => {
	return {
		type: CHECK_AGE,
		payload: age,
	};
};
