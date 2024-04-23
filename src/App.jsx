import './App.css';
import BillInput from './assets/components/billinput/billinput';
import Result from './assets/components/result/result';

function App() {
  return (
    <div className='flex'>
      <BillInput />
      <Result />
    </div>
  );
}

export default App;
