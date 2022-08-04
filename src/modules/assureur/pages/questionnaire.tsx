import styled from '@emotion/styled';
import { Alert, Button, Divider, Input } from 'antd';
import { Drawer } from '../../shared/SidebarContainer';
import { Antecedents } from '../components/Antecedents';
import { AutreInfo } from '../components/AutresInfo';
import { ChiffreAffaire } from '../components/ChiffreAffaire';
import { Donnees } from '../components/Donnee';
import { Identification } from '../components/Identification';
import { Questions } from '../components/Question';

const Container = styled.div`
  padding-bottom: 20px;

  > .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      font-family: Montserrat;
      text-align: center;
      font-size: 25px;
      margin-bottom: 5px;
    }
  }

  > h2 {
    font-family: Montserrat;
  }

  > p {
    font-size: 16px;
  }

  > .button {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Questionnaire = () => {
  return (
    <Drawer>
      <Container>
        <div className='heading'>
          <h1>Questionnaire de souscription</h1>
          <Divider style={{ height: 2, backgroundColor: 'black', margin: 0 }} />
        </div>
        <Alert
          type='info'
          message={
            <p style={{ margin: 0 }}>
              <strong>Important : </strong> Le remplissage du présent formulaire
              suppose vous avez effectué une analyse de risque au préalable au
              sein de votre entreprise
            </p>
          }
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <Identification />
        <ChiffreAffaire />
        <Donnees />
        <Questions />
        <Antecedents />
        <AutreInfo />
        <h2 style={{ marginTop: 50 }}>Déclaration</h2>
        <p>
          Je sousigné <Input style={{ width: 150, margin: '0px 10px' }} />{' '}
          occupant la fonction de{' '}
          <Input style={{ width: 150, margin: '0px 10px' }} /> au sein de
          l'entreprise, déclare que toutes les informations remplies ci dessous
          sont exactes.
        </p>

        <div className='button'>
          <Button type='primary' size='large'>
            Soumettre
          </Button>
        </div>
      </Container>
    </Drawer>
  );
};
