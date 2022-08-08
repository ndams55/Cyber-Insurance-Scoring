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

export const Antecedents = ({
  onChange,
}: {
  onChange: (field: any, val: any) => void;
}) => {
  return (
    <Container>
      <h2>Antécédents </h2>
      <div className='content'>
        <table>
          {ANTECEDENT.map((item) => (
            <tr id={item.id.toString()}>
              <td>{item.antecedent}</td>
              <td style={{ width: 150 }}>
                <Space>
                  <Radio.Group
                    onChange={(e) => {
                      console.log(item.antecedent, e.target.value);
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

const ANTECEDENT = [
  {
    id: 'VICTIME_SINISTRE',
    antecedent:
      "Durant les 5 dernières années, avez-vous subi un sinistre d'un coût total supérieur à 1 000 000 Fcfa (que celui-ci ait été indemnisé ou non).",
  },
  {
    id: 'OBJET_ENQUETES',
    antecedent:
      "Durant les 5 dernières années, avez-vous déjà fait l'objet d'une enquête d’un organisme chargé de veiller au respect des lois et des règlements en vigueur en ce qui concerne les domaines de la confidentialité, l’intégrité et l’accessibilité des données.",
  },
  {
    id: 'DEJA_ETE_ASSURE',
    antecedent:
      'Durant les 5 dernières années, avez-vous déjà été assuré par une cyber assurance ?',
  },
  {
    id: 'NBRE_RECLAMATIONS',
    antecedent:
      'Si oui, avez vous eu à faire des réclamations pendant votre période de couverture ? Indiquez le nombre de réclamations faites. ',
  },
  {
    id: 'MAJ_GARANTIE_DIM,MAJ_GARANTIE_AUG',
    antecedent:
      'Durant votre période de couverture, votre garantie d’assurance a-t-elle été mise à jour?  Si oui, précisez si la cause était une diminution ou une augmentation du risque.',
  },
];
