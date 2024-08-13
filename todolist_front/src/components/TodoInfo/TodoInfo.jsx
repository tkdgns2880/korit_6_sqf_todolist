import React from 'react';

function TodoInfo({todos}) {
    
    return (
        <ul>
            {
                todos ?.map(todo => (
                    // todo 하나당 li 한개씩 만들어진다
                    <li key={todo.todoId}>
                        <h4>제목 : {todo.title}</h4>
                        <pre>내용 : {todo.content}</pre>
                        <p>작성일 : {todo.todoDateTime}</p>
                        <p>important : {todo.important}</p>
                        <p>busy : {todo.busy}</p>
                        <p>status : {todo.status}</p>
                        <hr />
                        {/* <hr /> 밑줄 */}
                    </li>
                ))
            } 
        </ul>
    );
}
export default TodoInfo;