import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import YearGroup from '../../components/YearGroup/YearGroup';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ calendar, setCalendar ] = useState([]);
    // calendar = jsx 역활

    useEffect(() => {
        const object = {
        // 객체는 반복을 못돌리니까 반복을 돌리기 위해서는 entries를 이용해서 반복을 돌린다
          "a" : {
            "test1" : 10,
            "test2" : 20,
            "test3" : 30,
            "test4" : 40,
          },

          "b" : {
            "test5" : 50,
            "test6" : 60,
            "test7" : 70,
            "test8" : 80,
          }
        }
        // console.log(Object.entries(object));
        // entries 를 사용해 객체를 리스트로 변환시켜 반복을 돌려준다
        // 0번 인덱스가 key 값이고 1번 인덱스가 
        const objectList = Object.entries(object)
        for(let obj of objectList) {
            // object = obj 객체명만 변경시켜준것
            const key = obj[0];
            const value = Object.entries(obj[1]);
            // entries 를 이용해 key 값 안의 값을 불러온다
            console.log("key : " + key);
            console.log("value : " + value);

            for(let e of value) {
                console.log(e);
                const key2 = e[0];
                const value2 = e[1];
                console.log("key2 : " + key2);
                console.log("value2 : " + value2);
            }
        }
    }, [])

    useEffect(() => {
        // const preYears = todolistAll.todolist.map(todo => todo.todoDateTime.slice(0, 4))
        const calendarData = {};

        for(let todo of todolistAll.todolist) {
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);

            if(!calendarData[year]) {
                calendarData[year] = {};
            }
            if(!calendarData[year][month]) {
                calendarData[year][month] = [];
            }
            calendarData[year][month].push(todo);
        
        }
        // const calendarDataEntries = Object.entries(calendarData);
        // entries 로 반복을 돌려준다
        setCalendar(<YearGroup calendarData={calendarData} />)
    }, [todolistAll]);

    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <BackButtonTop setShow={setShow} />
                <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                {calendar}
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;