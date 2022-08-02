import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AssureurDashboard } from './modules/assureur/pages/dashboard';
import { LoginPage } from './modules/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='assureur'>
          <Route path='souscription' element={<AssureurDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
