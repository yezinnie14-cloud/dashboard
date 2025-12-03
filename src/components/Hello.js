import './Login.css';
const Hello = ({user, onLogout}) => {
  
  return (
    <div id="hello-page">
        <h2>Hello!{user}</h2>
        <h3>What is your main focus for today?</h3>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Hello