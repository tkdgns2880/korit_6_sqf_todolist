import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

// jsx 안에 <></> = 프레그먼트
// 프레그먼트 = 
// 배열의 비구조할당은 직접 이름을 넣어서 들고올수 있다
// const [ 1, 2, ...apple ] = [ 1, 2, 3, 4, 5]
// 비구조활당 후 배열의 남은 값을 한곳에 담고 싶으면 (...변수명)
// ... = 레스트
// List<> = 제네릭 / 제네릭에는 자료형만 담을 수 있다
// 언디파인 = 값이 정의되지 않았다
// 자바스크립트는 자료형을 변수뒤에 넣어준다 
// {} 객체 안에서 key값을 속성이라고 부른다
// jsx 안에 null 값을 넣을려면 텍스트(문자)열 처리를 해야 담을 수 있다
// < 컴퍼먼트명 /> = 컴퍼먼트
// props 값이 바뀌면 재렌더링된다 부모가 변경되면 자식들도 재렌더링된다(스위치문과 비슷)
// useEffect(() => {}, []) = 배열안에 객체의 값이 변경될때마다 렌더링된다
// index.js에 root.render() 컴퍼먼트들이 렌더링된다
// RecoilRoot, BrowserRouter = children 들어가 있다
// 디폴트할때 = 구조분해후 새로운변수를 선언해줄때는 :
// const - 값이 바뀌지 않는 상수(주소)를 만들어줄때 사용 
// let - 변수를 만들어줄때 사용
// ! - 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);

reportWebVitals();
