import styled from '@emotion/styled';
import { Alert, Button, Divider, Input } from 'antd';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

export type KeyType =
  | 'SEC_ACT'
  | 'CA_LAST'
  | 'CA_PREVISIONNEL'
  | 'CA_A_VENIR'
  | 'MARGE_BRUTE_EXPL'
  | 'NBRE_EMPL'
  | 'DATA_NBRE_PERS'
  | 'SAUVEGARDES_REG'
  | 'ANTIVIRUS_FIREWALL'
  | 'MISES_A_JOUR'
  | 'ANALYSE_VULNERABILITES'
  | 'LEAST_PRIVILEGE'
  | 'CONTROLE_ACCES'
  | 'CHARTE_MOT_DE_PASSE'
  | 'DONNEES_CRYPTEES'
  | 'STANDARD_PCI_DSS'
  | 'VERIF_SECU_PRESTATAIRES'
  | 'AUDIT_ANNUEL_PRESTATAIRES'
  | 'POLITIQUE_REF_SECU'
  | 'PLAN_CONTINUITE'
  | 'RTO_RPO_DEFINIS'
  | 'FORMATION_EMPLOYES'
  | 'VICTIME_SINISTRE'
  | 'OBJET_ENQUETES'
  | 'DEJA_ETE_ASSURE_MAJ_GARANTIE_AUG'
  | 'MAJ_GARANTIE_DIM'
  | 'NBRE_RECLAMATIONS'
  | 'R_SOLVABILITE'
  | 'TAUX_COUVERTURE_DETTE';

export type ValType = boolean | number | string;

export const Questionnaire = () => {
  const [company, setCompany] = useState<any>();
  const router = useNavigate();
  const [questionnaire, setQuestionnaire] = useState<any>({
    SEC_ACT: '',
    CA_LAST: 0,
    CA_PREVISIONNEL: 0,
    CA_A_VENIR: 0,
    MARGE_BRUTE_EXPL: 0,
    NBRE_EMPL: 0,
    DATA_NBRE_PERS: '',
    SAUVEGARDES_REG: false,
    ANTIVIRUS_FIREWALL: false,
    MISES_A_JOUR: false,
    ANALYSE_VULNERABILITES: false,
    LEAST_PRIVILEGE: false,
    CONTROLE_ACCES: false,
    CHARTE_MOT_DE_PASSE: false,
    DONNEES_CRYPTEES: false,
    STANDARD_PCI_DSS: false,
    VERIF_SECU_PRESTATAIRES: false,
    AUDIT_ANNUEL_PRESTATAIRES: false,
    POLITIQUE_REF_SECU: false,
    PLAN_CONTINUITE: false,
    RTO_RPO_DEFINIS: false,
    FORMATION_EMPLOYES: false,
    VICTIME_SINISTRE: false,
    OBJET_ENQUETES: false,
    DEJA_ETE_ASSURE: false,
    MAJ_GARANTIE_AUG: false,
    MAJ_GARANTIE_DIM: false,
    NBRE_RECLAMATIONS: 0,
    R_SOLVABILITE: 0,
    TAUX_COUVERTURE_DETTE: 0,
  });

  useEffect(() => {
    console.log(questionnaire);
    setCompany({ ...questionnaire });
  }, [questionnaire]);

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
        <Identification
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
          setCompany={(field: any, value: any) => {
            company[field] = value;
            setCompany({ ...company });
          }}
        />
        <ChiffreAffaire
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
        />
        <Donnees
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
        />
        <Questions
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
        />
        <Antecedents
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
        />
        <AutreInfo
          onChange={(field: any, value: any) => {
            questionnaire[field] = value;
            setQuestionnaire({ ...questionnaire });
          }}
        />
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
