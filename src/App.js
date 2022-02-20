import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Separate from './separate';

function App() {
const card = Separate.map(item => {
  return (
      <Card 
        title={item.title}
        location={item.location}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />  
    )
})
  return (
    <div>
      <Navbar />
      {card}
    </div>
  );
}

export default App;
