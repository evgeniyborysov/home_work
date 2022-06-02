import React from "react";
import styleMessage from "./Message.module.css"

type messageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
};

function Message(props: messageDataType) {
    return (
        <div className={styleMessage.box}>
            <div className={styleMessage.user}>
                <img src={props.avatar} alt="img"/>
            </div>

            <div className={styleMessage.body}>
                <div className={styleMessage.name}>{props.name}</div>
                <span>{props.message}</span>
                <div className={styleMessage.date}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;

