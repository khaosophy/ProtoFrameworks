import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className='mt-4'>Hello World</h1>
      </div>
      <Footer />
    </>
  )
}

export default App;