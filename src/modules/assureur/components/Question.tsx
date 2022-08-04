import styled from '@emotion/styled';
import { Radio, Space } from 'antd';

const Container = styled.div`
  p {
    font-size: 16px;
  }

  > h2 {
    font-family: Montserrat;
  }

  > .content {
    margin-left: 30px;
    margin-bottom: 20px;

    > .ant-row {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 5px;
  }

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 15px;
  }

  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 16px;
  }
`;

export const Questions = () => {
  return (
    <Container>
      <h2>Questions</h2>
      <div className='content'>
        <table>
          {QUESTIONS.map((item) => (
            <tr id={item.id.toString()}>
              <td>{item.question}</td>
              <td style={{ width: 150 }}>
                <Space>
                  <Radio.Group
                    onChange={(e) => {
                      console.log(item.question, e.target.value);
                    }}
                  >
                    <Radio value='oui'>Oui</Radio>
                    <Radio value='non'>Non</Radio>
                  </Radio.Group>
                </Space>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

const QUESTIONS = [
  {
    id: 1,
    question:
      'Utilisez-vous un antivirus et un firewall mis à jour au moins tous les 30 jours ?',
  },
  {
    id: 2,
    question:
      'Mettez-vous à jour les logiciels et les systèmes que vous utilisez au moins tous les 30 jours ? ',
  },
  {
    id: 3,
    question:
      'Conduisez-vous des tests d’analyse de vulnérabilité régulièrement ?',
  },
  {
    id: 4,
    question:
      'Avez vous recours à des comptes administrateurs pour des usages basiques (navigation sur internet, utilisation d’une boîte mail), car ceux-ci sont des comptes sans privilèges administrateurs.',
  },
  {
    id: 5,
    question:
      'Restreignez-vous les accès de vos employés à votre système d’information et aux informations sur la base de ce dont ils ont besoin pour travailler ? De plus, leurs accès sont-ils systématiquement coupés lorsque vos employés quittent votre entreprise ?',
  },
  {
    id: 6,
    question:
      'Avez-vous une charte qui explique les caractéristiques d’un bon mot de passe (comme ne pas utiliser les mots de passe similaires ou facile à retrouver) pour tous vos systèmes ? ',
  },
  {
    id: 7,
    question:
      'Les données que vous stockez sont-elles cryptées lorsqu’elles sont : Sur votre réseau ? Sur les périphériques de stockage mobiles ou terminaux mobiles ?',
  },
  {
    id: 8,
    question:
      'Si vous acceptez les paiements par carte bancaire, êtes-vous conforme au standard PCI DSS 3.2 ou avez-vous recours à un fournisseur qui y est conforme ?',
  },
  {
    id: 9,
    question:
      'Vérifiez-vous le niveau de cyber-sécurité de vos nouveaux prestataires au moins une fois par an ?',
  },
  {
    id: 10,
    question:
      'Faites-vous des audits de cybersécurité chez vos prestataires au moins une fois par an ?',
  },
  {
    id: 11,
    question:
      'Avez-vous mis en place une politique de gestion des données personnelles et de sécurité informatique applicable à l’ensemble des services et filiales de l’entreprise ?',
  },
  {
    id: 12,
    question:
      'Avez vous mis en place un plan (que vous testez régulièrement) de reprise/continuation d’activités en cas d’incident sur vos systèmes d’information ?',
  },
  {
    id: 13,
    question:
      'Avez vous mis en place des objectifs de temps de récupération / reprises d’activités (RTO) et/ou des objectifs de point de récupération (RPO) en cas de sinistre, estimés à plus de 12h ?',
  },
  {
    id: 14,
    question:
      'Avez-vous mis en place un programme de formation / sensibilisation à la cybersécurité pour vos employés ?',
  },
];
