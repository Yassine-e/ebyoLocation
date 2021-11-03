import logo from '../../logo.svg';
import '../../App.css';
import NavVertical from '../navVertical'
import NavBar from '../navBar'
import Title from '../dashboard/title'
import AreaChart from "../area charts/Area Chart";


function App() {
  return (
    <div className="App" style={{display:'flex'}}>

    <NavVertical/>
    <div style={{width:'100%'}}>
      <NavBar/>
      <Title/>
      <div className='row' style={{display:'flex',padding:"1%",margin:'0'}}>
        <div className='col-sm-4' >
          <Title/>
        </div>
        <div className='col-sm-8' ><AreaChart /></div>
      </div>
    </div>


    </div>
  );
}

export default App;
