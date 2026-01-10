import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <>      
      <div>
        <UserProfile 
          name="Nelson Sylvanus"
          age={35}
          bio="Frontend engineer learning React at ALX."
        />

      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
