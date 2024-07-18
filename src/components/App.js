// import logo from './logo.svg';
import { useState } from 'react';
import './../css/App.css';
import Header from './landingpage/Header';
import Footer from './landingpage/Footer';
import { calendar } from './data/calendar';
import Table from './resusable/Table';

function App() {
  const [show, setShowCalendar] = useState(0)
  const handleCalendarState=()=>{
    setShowCalendar(!show)
  }
  return (
    <div className="App">
      <Header/>
      <div className='main-body' style={{display:'flex',flexDirection:'column',  alignItems:'center' }}>
        {show==1 && <Table data={calendar}/>}
        <button className='button' onClick={handleCalendarState}>{show==0 ? 'Show Calendar':'Hide Calendar'}</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
