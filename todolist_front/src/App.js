import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Global } from "@emotion/react";
import { reset } from "./styles/common";
import DandP from "./pages/DandP/DandP";
import MainLayout from "./components/MainLayout/MainLayout";
import TodoAll from "./pages/TodoAll/TodoAll";
import Note from "./pages/Note/Note";
// 배열의 비구조할당은 직접 이름을 넣어서 들고올수 있다
// const [ 1, 2, ...apple ] = [ 1, 2, 3, 4, 5]
// 비구조활당 후 배열의 남은 값을 한곳에 담고 싶으면 (...변수명)
// List<> = 제네릭 / 제네릭에는 자료형만 담을 수 있다
// 언디파인 = 값이 정의되지 않았다
// 자바스크립트는 자료형을 변수뒤에 넣어준다 
// {} 객체 안에서 key값을 속성이라고 부른다
// jsx 안에 null 값을 넣을려면 텍스트(문자)열 처리를 해야 담을 수 있다
// < 컴퍼먼트명 /> = 컴퍼먼트
// props 값이 바뀌면 재렌더링된다 부모가 변경되면 자식들도 재렌더링된다(스위치문과 비슷)
// 


function App() {
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <Routes>
                    <Route path="/todo/*" element={<Dashboard />} />
                    <Route path="/login" element={<></>} />
                    <Route path="/join" element={<></>} />
                    <Route path="/dp" element={<DandP />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/note" element={<Note />} />
                </Routes>
            </MainLayout>
        </>
    );
}
export default App;
