import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Entreprises } from './modules/assureur/pages/entreprise';
import { NewCompany } from './modules/assureur/pages/newCompany';
import { CompanyProfil } from './modules/assureur/pages/profil';
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
          <Route path='newCompany' element={<NewCompany />} />
          <Route path='souscription' element={<Questionnaire />} />
          <Route path='profil' element={<CompanyProfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
