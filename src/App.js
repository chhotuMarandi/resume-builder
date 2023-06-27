import './App.css';
import Resume from './components/Resume'

function App() {

  const person = {
      name: 'ram kumar',
      email: 'ram@gmail.com',
      mobile: '854691356',
      address: 'bakudih , sahibganj, jharkhand, pin - 816101'
  }

  return (
    <div className='App'>
      <Resume {...person} />
      
    </div>
  );
}

export default App;
