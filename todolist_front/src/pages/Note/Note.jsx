import React, { useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';

function Note(props) {
    const [ messages, setMessages ] = useState({
        content : ""
    })

    const inputMessagesChange = (e) => {
        setMessages(messages => ({
            ...messages,
            [e.taget.name] : e.taget.value
        }));
    }
    const hendleKeyDown = (e) => {
        if(e.keyDown === 13 && e.shiftKey === true) {
            e.preventDefault();
            setMessages(messages => ({
                ...messages,
                content : messages.content + "\n"
            }))
        } else if(e.keyDown === 13 && messages.content === "") {
            e.preventDefault()
            alert("메모를 입력하세요")
        }
    }

    const handleClick = (e) => {
        if(!messages.content === "") {
            alert("메모를 입력하세요")
        } else {
            alert("메모가 저장되었습니다");
        }
    }


    return (
        <MainContainer>    
            <div>
                <h1>메모</h1>
                <div>
                    <textarea name="messages" 
                    onChange={inputMessagesChange} 
                    onKeyDown={hendleKeyDown} 
                    value={messages.content}></textarea>
                    <button  onClick={handleClick}>확인</button>
                </div>
            </div>
        </MainContainer>
    );
}
export default Note;