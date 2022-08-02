import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AssureurDashboard } from './modules/assureur/pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AssureurDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
