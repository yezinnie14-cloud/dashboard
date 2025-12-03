import { useState } from "react";

const TodoForm = ({ onSave }) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //기존 기능 방지 
        onSave(task);
        setTask('');
    }
    // const handleKeyDown = (e) => {
    //     if (e.code === 'KeyA') {
    //         setView(task); //전송이 되면 보여지는 입력값 저장
    //     }
    // }
    return (
        <div id="todo-form">
            {/* <h2>Today</h2> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }}
                    className="todo-input"
                // onKeyDown={handleKeyDown}
                />
            </form>

        </div>
    )
}

export default TodoForm