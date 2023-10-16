import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
    const [amount,setAmount] = usestate(0)
    const [from , setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setconvertedAmount] = usestate(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)  //extracting all keys from the returned object by the useCurrencyInfo hook in the currencyInfo variable using Object fxn

    const swap = () => {
      setFrom(to)
      setTo(from)
      setconvertedAmount(amount)
      setAmount(convertedAmount)
    }

    const convert = () => {
      setconvertedAmount(amount * currencyInfo[to])
    }
     //accessing the currency from the stored list of keys in the currencyInfo variable using the to keyword

     return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1178540565/vector/stock-market-or-forex-trading-graph-in-graphic-concept-for-financial-investment-or-economic.jpg?s=612x612&w=0&k=20&c=iMbyjS3Wm7swrK4JOmA-gyTKCNPh1OwAIaplwKlxl7g=')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={{options}}
                              onCurrencyChange={(currency) => setAmount(amount)}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
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
                              amount={convertedAmount}
                              currencyOptions={{options}}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={from}
                              amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App