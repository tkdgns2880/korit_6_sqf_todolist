import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodoMonthGroup({ month, todos }) {
    return <>
        <h2>{month}월</h2>
        <div>
            {
                todos.map( todo  => <></>)
            }
        </div>
    </>
}

function TodoYearGroup({ year, monthOfCalendarData }) {
    const entriesOfMonth = Object.entries(monthOfCalendarData);
    return <>
        <h2>{year}년</h2>
        <div>
            {
                entriesOfMonth.map(([ month, todos ]) => 
                <TodoMonthGroup month={month} todos={todos} />)
                // entries 를 이용하여 monthOfCalendarData 안에 있는 month, todos 객체를 가져와 렌더링 한다
            }
        </div>
    </>
}

// 밑에 function 은 노출되면 안되서 function 새로 만들어준다
function TodoCalendar({ calendarData }) { 
    // todoCalendar 에 calendarData 프롭스(props)로 받는다

    const entriesOfCalendarData = Object.entries(calendarData);
    
    return (
        <div >
            {
                entriesOfCalendarData.map(([ year, monthOfCalendarData ]) => 
                <TodoYearGroup year={year} monthOfCalendarData={monthOfCalendarData} />)
                // entries 를 이용하여 calendarData 안에 있는 year, monthOfCalendarData 객체를 가져와 렌더링 한다
            }
        </div>
    );
}
export default TodoCalendar;