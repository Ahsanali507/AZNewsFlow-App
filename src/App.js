import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App=()=>{
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

    return (
      <>
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={18} country='us' category='general'/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={18} country='us' category='business'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={18} country='us' category='entertainment'/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={18} country='us' category='health'/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={18} country='us' category='sports'/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={18} country='us' category='science'/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={18} country='us' category='technology'/>}></Route>
        </Routes>
      </div>
      </Router>
      </>
    )
}

export default App;


