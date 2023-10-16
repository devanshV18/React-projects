import { useState , useCallback , useEffect , useRef } from 'react'
 


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //refHook

  const passRef = useRef(null)


  const passwordGenerator = useCallback(() => {
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*-+[]{}~`"

      for (let i = 1; i<= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)
    
    },[length, numberAllowed, charAllowed, setPassword])

  const copytoClip = useCallback(() => {
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0,5) to select in a range
    window.navigator.clipboard.writeText(password)
  },[password])


    useEffect(() => {
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-orange text-center my-3'>PASSWORD GENERATOR</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
            />

            <button 
            onClick={copytoClip}
            className='bg-sky-600 hover:bg-sky-800 text-white px-3 py-0.5 shrink-0'>
              Copy
            </button>
        </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length} //pushing default length value using jsx
              className='curson-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
              <div className='flex items-center gap-x-l'>
              <input type="checkbox"
               defaultChecked={numberAllowed}
               id='numberInput'
              
               onChange={() => {setnumberAllowed((prev) => !prev);
              }}
              />

              <label htmlFor="numberInput">Characters</label>
              </div>

              <div className='flex items-center gap-x-l'>
              <input type="checkbox"
               defaultChecked={charAllowed}
               id='charInput'
              
               onChange={() => {setcharAllowed((prev) => !prev);
              }}
              />

              <label htmlFor="numberInput">Numbers</label>
              </div>

          </div>
        </div>
    </>
  )
}

export default App
