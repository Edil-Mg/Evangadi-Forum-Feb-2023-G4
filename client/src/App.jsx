import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes,Link} from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import Profile from './pages/profile/Profile'
import Question_and_answer from './pages/question_and_answer/Question_and_answer'

//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';




function App() {


  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<>
                                <Home />
                              </>} />
        <Route path='/landing' element={<>
                                <Landing />
                              </>} />
        <Route path='/profile' element={<>
                                <Profile />
                              </>} />

        <Route path='/questionandanswer' element={<>
                                <Question_and_answer />
                              </>} />

      </Routes>

      <Footer />


    </div>

  )
}

export default App
