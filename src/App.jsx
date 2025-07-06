import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'



function App() {
  const [Amount, setAmount] = useState(0)
  const [from,setfrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [ConvertedAmount,SetConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setfrom(to)
    setTo(from)
    SetConvertedAmount(Amount)
    setAmount(ConvertedAmount)
  }
  
  const convert = () => {
  console.log("currencyInfo:", currencyInfo);
  console.log("to:", to);
  console.log("Rate:", currencyInfo[to]);
  SetConvertedAmount(Amount * currencyInfo[to]);
};




  
  return (
        <div
            className="w-screen  flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange-background_115579-579.jpg?semt=ais_items_boosted&w=740')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                      e.preventDefault();
                        convert(); 
                       }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
  label="From"
  amount={Amount}                       
  onAmountchange={(amount) => setAmount(amount)}
  currencyOptions={options}
  onCurrencychange={(currency) => setfrom(currency)} 
  selectcurrency={from}                
  amountDisable={false}
  currencyDisable={false}
/>
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                           <InputBox
  label="To"
  amount={ConvertedAmount}             
  onAmountchange={() => {}}           
  currencyOptions={options}
  onCurrencychange={(currency) => setTo(currency)}
  selectcurrency={to}
  amountDisable={true}               
  currencyDisable={false}
/>
                        </div>
                        <button type="submit" className="w-full bg-red-600 text-green-400 px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
