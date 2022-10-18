import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayOut from './component/LayOut';
import Home from './component/Home'
import Get from './component/Get'
import Create from './component/Create'
import NoPage from './component/NoPage'

import './App.css';

function App() {
  return (
    <div className='App'>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="get" element={<Get />} />
          <Route path="post" element={<Create />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
