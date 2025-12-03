import { useEffect, useState } from "react"
import Hello from "./components/Hello"
import Login from "./components/Login"
import Weather from "./components/Weather"
import Todos from "./components/Todos"
import Quotes from "./components/Quotes"
import "./App.css";
import Timer from "./components/Timer"
import Clock from "./components/Clock"
import Focus from "./components/Focus"

const App = () => {
  const [userName, setUserName] = useState(null);
  const [mode, setMode] = useState("base");

  const handleLogin = (data) => {
    localStorage.setItem("USER_NAME", data);
    setUserName(data);
  };
  //로그아웃 함수
  const handleLogout = () => {
    // localStorage.removeItem("USER_NAME");
    localStorage.clear();
    // setUserName('');
    //전체 페이지 새로고침
    window.location.reload();
  };


  useEffect(() => {
    //로컬 스토리지에 userName이 있는지 체크
    const saved = localStorage.getItem("USER_NAME");
    setUserName(saved);
  }, []);


  return (
    <div id="app">
      <div className="center-block">
        <Weather />
        {mode !== "timer" && <Clock />}
        {mode === "base" && (
          <>
            {
              userName ? 
             ( <Hello user={userName} onLogout={handleLogout} /> ) : (<Login onLogin={handleLogin} />)
            }
            <Quotes />
          </>
        )}

        <div className="today-wrapper">
          <Todos />
          {mode === "focus" && (
            <>
              <Focus />
              <Quotes />
            </>
          )}
          </div>
          {mode === "timer" && (
            <>
              <Timer />
              <Quotes />
            </>
          )}
        </div>
        {/* <Focus /> */}
      <div className="left-btn">
        <button className="focus-btn"
         onClick={()=> setMode((prev)=> (prev === "focus" ? "base" : "focus"))}
        >Focus</button>
        <button className="timer-btn"
          onClick={() => setMode((prev) =>(prev === "timer" ? "base" : "timer"))}>
          Timer
        </button>
      </div>
      {mode === "base" && (
         <div className="today-wrapper">
          <Todos/>
          </div>
      )}
        
      </div>

  );
};

export default App