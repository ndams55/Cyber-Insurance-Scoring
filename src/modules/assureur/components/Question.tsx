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
      'Utilisez vous des antivirus et/ou des firewalls mis à jour tous les 30 jours au moins ?',
  },
];
