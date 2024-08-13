/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

function MainLayout({children}) { // props 는 속성에만 넣을수 있다
    // console.log(props) props 안에는 children 속성이 들어가 있다
    const [ clock, setClock] = useState("0:00");

    const [ text, setText ] = useState([]);

    useEffect(() => { // 빈배열시 1번 배열의 값이 있을시 반복
        setInterval(() => {
        // setInterval 설정한 매초마다 실행시켜준다
            const now = new Date();
            const hours = now.getHours();
            const minutes = (Math.floor(now.getMinutes() / 10) === 0 ? "0" : "") + now.getMinutes();
            // const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes(); 위와 동일한 코드
            // toLocaleTimeString 현제 위치까지 파악해서 시간을 설정해준다
            setClock(`${hours}:${minutes}`); // slice(3, 8) 는 몇번부터 몇번까지 보여줄지 설정해준다
        }, 1000); 
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}><IoCellularSharp /><IoIosWifi /><IoIosBatteryFull /></div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;