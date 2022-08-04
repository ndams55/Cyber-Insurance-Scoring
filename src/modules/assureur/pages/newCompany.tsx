import styled from '@emotion/styled';
import { Steps } from 'antd';
import { useState } from 'react';
import { Drawer } from '../../shared/SidebarContainer';
import { CompanyInfo } from '../components/CompanyInfo';
import { FileUpload } from '../components/FileUpload';

const Container = styled.div`
  padding-bottom: 20px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NewCompany = () => {
  const [step, setStep] = useState(0);

  return (
    <Drawer>
      <Container>
        <Steps current={step}>
          <Steps.Step
            title='Chargement des fichiers'
            description="Chargez les fichiers de l'entreprise."
          />
          <Steps.Step
            title='Validation du formulaire'
            description='Validez les formulaires pré rempli.'
          />
        </Steps>
        <div className='content'>
          {step === 0 ? (
            <FileUpload onFinish={() => setStep(1)} />
          ) : (
            <CompanyInfo />
          )}
        </div>
      </Container>
    </Drawer>
  );
};
