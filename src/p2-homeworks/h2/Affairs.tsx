import React from "react";
import Affair from "./Affair";
import {AffairType, filterAffairs, FilterType} from "./HW2";
import Style from "./Affairs.module.css";

type AffairsPropsType = {
    // need to fix any
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((item: AffairType) => (
        <Affair // should work
            key={item._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={item}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const setAll = () => {props.setFilter("all")}; // need to fix
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <>
            <table className={Style.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                {mappedAffairs}
            </table>

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </>
    );
}

export default Affairs;
