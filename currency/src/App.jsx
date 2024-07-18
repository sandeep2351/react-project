import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import useCurrency from './hooks/useCurrency';
import { Inputbox } from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const tempFrom = from;
    const tempTo=to;
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convert();
  };

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50'>
          <form onSubmit={handleSubmit}>
            <div className='w-full mb-1 text-9xl'>
              <Inputbox
                label="from"
                amount={amount}
                currencyoptions={options}
                onCurrencychange={(currency) => setFrom(currency)}
                onAmountchange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1 text-6xl'>
              <Inputbox
                label="to"
                amount={convertedAmount}
                currencyoptions={options}
                onCurrencychange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
