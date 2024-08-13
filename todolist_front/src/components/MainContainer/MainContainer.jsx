/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";
import ReactModal from "react-modal";
import RegisterModal from "../RegisterModal/RegisterModal";

function MainContainer({ children }) {
    const [ modalElement, setModalElement ] = useState(<></>);
    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef){
            setModalElement(<RegisterModal containerRef={containerRef} />);
        }
    }, [containerRef])

    return (
        <div css={s.container} ref={containerRef} >
            {modalElement}
            {children}
        </div>
    );
}

export default MainContainer;

// const handleDown = useCallback((e) =>  setScroll({
//     // useCallback 를 사용하면 함수(재사용하기 위한 기능)정의를 한번만 해놓으면 된다
//     startY : e.clientY,
//     isDown : true,
// }), []); 
// const handleUp = useCallback((e) =>  setScroll({
//     startY : 0,
//     isDown : false,
// }), []); 
// const handleMove = (e) => {
//     if(scroll.isDown){
    
//         let moveY = (e.clientY - scroll.startY * -1);

//         const scrollTop = containerRef.current.scrollTop;
//         containerRef.current.scrollTop = scrollTop + moveY;
//     };