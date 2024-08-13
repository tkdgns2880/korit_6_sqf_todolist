import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';

function MonthGroup({monthG}) {
    const monthEntries = Object.entries(monthG);
    return (
        <ul>
            {
                monthEntries ?.map(([ month, todos ]) => {
                    return <li key={month}>
                        <h3>{month}월</h3>
                        <TodoInfo todos={todos} />
                    </li>
                })
            }
        </ul>
    );
}
export default MonthGroup;