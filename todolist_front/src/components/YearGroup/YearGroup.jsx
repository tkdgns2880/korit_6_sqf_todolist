import React from 'react';
import MonthGroup from '../MonthGroup/MonthGroup';

function YearGroup({calendarData}) {
    const calendarDataEntries = Object.entries(calendarData);

    return (
        <ul>
            {
                calendarDataEntries ?.map(([ year, monthG ]) => {
                    // calendarDataEntries ? 값이 비어 있으면 값이 나오지 않는다
                    // map을 이용해 비구조활당으로 key, value 의 배열을 가져온다
                    return <li key={year}>
                        <h2>{year}년</h2>
                        {/* <MonthGroup monthEntries={Object.entries(month)} /> */}
                        <MonthGroup monthG={monthG} />
                    </li>
                })
            }
        </ul>
    );
}
export default YearGroup;