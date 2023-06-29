import './App.css';
import Resume from './components/Resume'

function App() {

  const person = {
    name: 'ram kumar',
    email: 'ram@gmail.com',
    mobile: '854691356',
    address: 'bakudih , sahibganj, jharkhand, pin - 816101',
    skills: ['HTMl', 'CSS', 'Javascript'],
    school: {
      name: 'BHJP High School Bakudih',
      percentage: '89%',
      passingYear: '2014',
    },
    college: {
      name: 'Mahadeo Singh College Bhagalpur',
      percentage: '53%',
      passingYear: '2016',
    },
    personnalDetails: {
      fatherName: 'Bhado Marandi',
      dob: '02/02/1999',
      gender: 'male',
      nationality: 'indian',
      martialStatus: 'unmarried',
      language: 'Hindi,English',
      hobbies: 'reading books'
    }
    
  };

  return (
    <div className='App'>
      <Resume {...person} />
      
    </div>
  );
}

export default App;
