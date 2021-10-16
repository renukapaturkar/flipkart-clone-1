import logo from './logo.svg';
import './App.css';
import { ProductListing } from './components/ProductListing';
import { SortBy } from './components/SortBy';
import { Filters } from './components/Filters';

function App() {
  return (
    <>
    <h1 className="bg-blue-500 h-12 font-bold text-white p-2">Flipkart Clone</h1>
    <SortBy/>
    <div className="flex p-4">
      <Filters/>
      <ProductListing/>
    </div>
    </>
  );
}

export default App;
