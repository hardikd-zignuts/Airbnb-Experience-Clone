import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import person from './assets/person-1.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <Card
            img={person}
            starCount={5.0}
            reviewCount={6}
            country="USA"
            title='Life lessons with Katie Zaires'
            price="$450"
          />
          <Card
            img={person}
            starCount={5.0}
            reviewCount={6}
            country="USA"
            title='Life lessons with Katie Zaires'
            price="$450"
          />
          <Card
            img={person}
            starCount={5.0}
            reviewCount={6}
            country="USA"
            title='Life lessons with Katie Zaires'
            price="$450"
          />
          <Card
            img={person}
            starCount={5.0}
            reviewCount={6}
            country="USA"
            title='Life lessons with Katie Zaires'
            price="$450"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
