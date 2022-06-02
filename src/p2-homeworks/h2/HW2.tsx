import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "all" | "high" | "middle" | "low"// need to fix any
export type AffairType = {
    _id: number;
    name: string;
    priority: string;
};
export type FilterType = AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    // need to fix any
    { _id: 1, name: "React", priority: "high" },
    { _id: 2, name: "anime", priority: "low" },
    { _id: 3, name: "games", priority: "low" },
    { _id: 4, name: "work", priority: "high" },
    { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
    let filteredAffairs = affairs;

    if (filter === "low") {
        filteredAffairs = affairs.filter(item => item.priority === "low")
    }
    if (filter === "high") {
        filteredAffairs = affairs.filter(item => item.priority === "high")
    }
    if (filter === "middle") {
        filteredAffairs = affairs.filter(item => item.priority === "middle")
    }

    return filteredAffairs
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
    let newAffairs = affairs;

    newAffairs = affairs.filter(item => item._id !== _id)

    return newAffairs;
};


function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) =>
        setAffairs(deleteAffair(affairs, _id)); // need to fix any
    const setFilterAffairCallback = (filter: FilterType) =>
        setFilter(filter);

    return (
        <div>
            <hr />
            homeworks 2{/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilterAffairCallback}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    );
}

export default HW2;
