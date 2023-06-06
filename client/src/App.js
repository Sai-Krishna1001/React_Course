import logo from './logo.svg';
import './App.css';
import ProfilePics from '../src/images/MyProfile.jpg';

import DemoComponent from './components/DemoComponent'

function App() {
  return (
    <div className='App'>
     <DemoComponent name='Daisy' country='Brazil'/>
     <DemoComponent name='krishna' country='India'/>
     <DemoComponent name='John' country='America'/>
     <DemoComponent name='Alexa' country='UK'>
        <p>I am a react developer</p>
        <p>I am 23 years old</p>
        <img src = {ProfilePics} width="100px" height="100px"></img>
     </DemoComponent>
    </div>
  );
}

export default App;
