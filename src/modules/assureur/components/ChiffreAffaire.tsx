import styled from '@emotion/styled';
import { Input, Space } from 'antd';

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
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  td {
    border: 2px solid #dddddd;
    text-align: center;
    padding: 10px;
  }

  th {
    border: 2px solid #dddddd;
    text-align: center;
    padding: 8px;
    font-size: 18px;
    font-weight: normal;
  }
`;

export const ChiffreAffaire = () => {
  return (
    <Container>
      <h2>Chiffre Affaire</h2>
      <div className='content'>
        <p>Montant du chiffre d'affaire réalisé :</p>

        <table>
          <tr>
            <th>Dernier exercice</th>
            <th>Exercice en cours (prévisionnel) </th>
            <th>Exercice à venir</th>
          </tr>
          <tr>
            <td>
              <Input.Group compact>
                <Input style={{ width: '60%' }} suffix='FCFA' />
              </Input.Group>
            </td>
            <td>
              <Input.Group compact>
                <Input style={{ width: '60%' }} suffix='FCFA' />
              </Input.Group>
            </td>
            <td>
              <Input.Group compact>
                <Input style={{ width: '60%' }} suffix='FCFA' />
              </Input.Group>
            </td>
          </tr>
        </table>

        <Space>
          <p style={{ margin: 0 }}>
            Pourcentage moyen de la marge brute d'exploitation (les 03 dernières
            années)
          </p>
          <Input style={{ width: 100 }} size='large' suffix='%' />
        </Space>
      </div>
    </Container>
  );
};
