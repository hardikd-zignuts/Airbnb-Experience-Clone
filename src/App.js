import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          {
            data.map((item) => {
              return <Card
                img={item.coverImg}
                key={item.id}
                starCount={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
