import styled from '@emotion/styled';
import { Alert, Checkbox, Space } from 'antd';
import { useState } from 'react';

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
    width: 50%;
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

export const Donnees = () => {
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <Container>
      <h2>Données</h2>
      <div className='content'>
        <p>
          Nombre de personnes à propos desquelles vous êtes de collecter et/ou
          de tenir les données sensibles*
        </p>
        <Alert
          type='info'
          message={
            <p>
              *données sensibles{' '}
              <ol>
                <li>
                  Numéro de sécurité sociale, permis de conduire ou passport
                </li>
                <li>Données bancaires (carte de crédit etc.) </li>
                <li>
                  Données relatives à la race, l'éthnie, l'orientation sexuelle,
                  la santé, conviction réligieuses ou philosophiques, opinions,
                  politiques, engagement syndicaux{' '}
                </li>
              </ol>{' '}
            </p>
          }
          style={{ marginBottom: 30 }}
        />

        <table>
          <tr>
            <th>Nombre</th>
            <th>Classe </th>
          </tr>
          {DATA.map((item) => (
            <tr id={item.classe}>
              <td>{item.label}</td>
              <td>
                <Space>
                  {item.classe}{' '}
                  <Checkbox
                    checked={selectedClass === item.classe ? true : false}
                    onChange={() => setSelectedClass(item.classe)}
                  />
                </Space>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

const DATA = [
  {
    label: '< 100,000',
    classe: 'Classe A',
  },
  {
    label: '100,000 - 500,000',
    classe: 'Classe B',
  },
  {
    label: '500,001 - 1,000,000',
    classe: 'Classe C',
  },
  {
    label: '1,000,001 - 6,000,000',
    classe: 'Classe D',
  },
  {
    label: '> 6,000,000',
    classe: 'Classe E',
  },
];
