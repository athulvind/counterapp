
import './App.css'
import Counter from './components/counter'


function App() {
 

  return (
    <>
      <h1 className='text-center my-5  fw-bold'>Counter App</h1>
      <div style={{minHeight:"70vh"}} className='d-flex justify-content-center'>
     <Counter/>
      </div>
    </> 
  )
}

export default App
