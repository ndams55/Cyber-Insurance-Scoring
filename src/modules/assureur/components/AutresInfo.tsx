import styled from '@emotion/styled';
import { Col, Input, Row } from 'antd';

const Container = styled.div`
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
`;

export const AutreInfo = ({
  onChange,
}: {
  onChange: (field: any, val: any) => void;
}) => {
  return (
    <Container>
      <h2>Autres informations (Know you client) </h2>
      <div className='content'>
        <Row>
          <Col span={10}>Ratio de solvabilité : </Col>
          <Col span={14}>
            <Input
              placeholder='ratio de solvabilité'
              onChange={(e) =>
                onChange('R_SOLVABILITE', Number(e.target.value))
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={10}>Taux de couverture de la dette : </Col>
          <Col span={14}>
            <Input
              placeholder='taux de couverture de la dette'
              onChange={(e) =>
                onChange('TAUX_COUVERTURE_DETTE', Number(e.target.value))
              }
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
