const TodoList = ({todos,onDel,onToggle}) => {
    // const handleChange = ()=>{

    // }
  return (
    <ul id="todo-list">
        {
            todos.map((list,idx)=>{
                return (
                <li key={idx}>
                    <input type="checkbox"
                    onChange={()=>{onToggle(list.id)}}
                    checked={list.done}
                    />
                   <span style={{
                    textDecoration: list.done ? 
                    "line-through":"none",
                    textDecorationColor : list.done ? "rgb(0,0,0,0.4)" : "none",
                    textDecorationThickness : list.done ? "8px" : "none"
                   }}>{list.todo}</span>
                   <button onClick={()=>{onDel(list.id)}}>×</button>
                    </li>)
            })
        }
    </ul>
  )
}

export default TodoList