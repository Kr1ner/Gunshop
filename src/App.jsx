import background from '/src/assets/gunstore_background.png'

function App() {
  return (
    <div style={{backgroundImage:`url(${background})`}} className="m-0 w-screen h-[284.444444444vh] flex flex-column justify-center items-center bg-cover bg-no-repeat overflow-x-hidden">
      <h1 className='font-mono font-extralight text-xl'>despacito</h1>
    </div>
  )
}

export default App
