import styled from '@emotion/styled';
import { Button, Col, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

const Container = styled.div`
  min-width: 600px;

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

export const CompanyInfo = () => {
  const router = useNavigate();

  const submit = () => {
    router(ROUTES.ASSUREUR.SOUSCRIPTION);
  };

  return (
    <Container>
      <h2>Company Information</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company : </Col>
        <Col span={10}>
          <Input placeholder='company' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Business sector : </Col>
        <Col span={10}>
          <Input placeholder='business sector' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Turnover : </Col>
        <Col span={10}>
          <Input placeholder='turnover' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Backup : </Col>
        <Col span={10}>
          <Input placeholder='backup' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Firewall : </Col>
        <Col span={10}>
          <Input placeholder='firewall' />
        </Col>
      </Row>

      <Button type='primary' size='large' onClick={submit}>
        Soumettre
      </Button>
    </Container>
  );
};
