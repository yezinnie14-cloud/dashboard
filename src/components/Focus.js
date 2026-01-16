import Clock from './Clock';
import './Focus.css';
const Focus = ({todo, onStop}) => {
  return (
    <div className='focus-overlay'>
      <div className='focus-inner'>
        <Clock/>
       <button className='stop-btn'>Stop</button>
      </div>
    </div>
  )

}

export default Focus