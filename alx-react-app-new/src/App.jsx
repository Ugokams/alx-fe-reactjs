import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>      
      <div>
        <Header />
      </div>
      
      <div>
        <UserProfile 
          name="Alice"
          age={25}
          bio="Loves hiking and photography"
        />

      </div>

      <div>
        <Counter />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
