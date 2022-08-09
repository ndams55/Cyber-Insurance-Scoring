import styled from '@emotion/styled';
import { Button, Col, Input, Row, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

const Container = styled.div`
  min-width: 600px;
  margin-bottom: 50px;

  > h2 {
    font-family: Montserrat;
    margin-bottom: 30px;
    text-align: center;
  }
  .ant-row {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const CompanyInfo = ({ back }: { back: () => void }) => {
  const router = useNavigate();

  const submit = () => {
    router(ROUTES.ASSUREUR.SOUSCRIPTION);
  };

  return (
    <Container>
      <h2>Company Information</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Company : </Col>
        <Col span={16}>
          <Input placeholder='company' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Business sector : </Col>
        <Col span={16}>
          <Input placeholder='business sector' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Turnover : </Col>
        <Col span={16}>
          <Input placeholder='turnover' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Backup : </Col>
        <Col span={16}>
          <Input placeholder='backup' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Firewall : </Col>
        <Col span={16}>
          <Input placeholder='firewall' />
        </Col>
      </Row>

      <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={back}>Retour</Button>
        <Button type='primary' onClick={submit}>
          Soumettre
        </Button>
      </Space>
    </Container>
  );
};
