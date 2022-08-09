import styled from '@emotion/styled';
import { Button, Steps } from 'antd';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
  const router = useNavigate();

  return (
    <Drawer>
      <Container>
        <Button
          icon={<FaChevronLeft style={{ margin: '5px 5px 0 0' }} />}
          size='large'
          shape='circle'
          onClick={() => router(-1)}
          style={{ marginBottom: 30 }}
        />

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
            <CompanyInfo back={() => setStep(0)} />
          )}
        </div>
      </Container>
    </Drawer>
  );
};
