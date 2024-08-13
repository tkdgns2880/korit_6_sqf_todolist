/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const parent = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;
const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    padding: 20px 40px;
    width: 150px;
    height: 50px;
    background-color: white;

    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start;
    }
    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }
    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }
`;
const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    background-color: white;
    flex-shrink: 0;
    &:nth-of-type(1) {
        flex-shrink: 2;
        background-color: yellow;
    }
    &:nth-of-type(2) {
        /* flex-grow: 1; // 여백을 채우는 명령어 */
        background-color: green;
    }
    &:nth-of-type(3) {
        background-color: purple;
    }
`;
const inputBox = css`
    position: relative; // relative 기준으로 잡을때 사용
    /* 예) <div css=relative> </div> css 에 포지션을 네거티브로 주고 기준점을 잡는다. */
`;
const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;
    & + button { // 형제들 ~ 형제 +
        position: absolute;
        // absolute  
        // relative 현재 자기위치에서 움직임 (left)사용 못함
        top: 50%;
        right: 10px;
        z-index: 0;
        transform: translateY(-50%);
        background-color: pink;
        
    }
`;
function DandP(props) {
    return (
        <>
            <div css={parent}>
                <label css={child}>1</label>
                <label css={child}>2</label>
                <label css={child}>3</label>
                <label css={child}>4</label>
                <label css={child}>5</label>
                <div css={inputBox}>
                    <input type="text" css={input}/>
                    <button>OK</button>    
                </div>
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>
    );
}

export default DandP;