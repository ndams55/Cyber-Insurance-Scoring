import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Entreprises } from './modules/assureur/pages/entreprise';
import { Questionnaire } from './modules/assureur/pages/questionnaire';
import { LoginPage } from './modules/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='login' element={<LoginPage />} />

        <Route path='assureur'>
          <Route path='entreprise' element={<Entreprises />} />
          <Route path='souscription' element={<Questionnaire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
