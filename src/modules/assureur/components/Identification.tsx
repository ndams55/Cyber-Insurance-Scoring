import styled from '@emotion/styled';
import { Col, Input, Row, Select } from 'antd';

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

export const Identification = ({
  onChange,
  setCompany,
}: {
  onChange: (field: any, val: any) => void;
  setCompany: (field: any, val: any) => void;
}) => {
  return (
    <Container>
      <h2>Identification</h2>
      <div className='content'>
        <Row>
          <Col span={10}>Raison sociale du proposant : </Col>
          <Col span={14}>
            <Input
              placeholder='raison sociale du proposant'
              onChange={(e) => setCompany('socialReason', e.target.value)}
            />{' '}
          </Col>
        </Row>
        <Row>
          <Col span={10}>Adresse de la société : </Col>
          <Col span={14}>
            <Input
              placeholder='adresse de la société'
              onChange={(e) => setCompany('address', Number(e.target.value))}
            />
          </Col>
        </Row>
        <Row>
          <Col span={10}>Secteur d'activité : </Col>
          <Col span={14}>
            <Select
              placeholder="secteur d'activité"
              style={{ width: '100%' }}
              onChange={(e) => onChange('SEC_ACT', e)}
            >
              <Select.Option value='Informatique'>Informatique</Select.Option>
              <Select.Option value='Cyber sécurité'>
                Cyber sécurité
              </Select.Option>
              <Select.Option value='Audit des systèmes'>
                Audit des systèmes
              </Select.Option>
            </Select>{' '}
          </Col>
        </Row>
        <Row>
          <Col span={10}>Nombre d'employés : </Col>
          <Col span={14}>
            <Input
              placeholder='nombre employés'
              onChange={(e) => onChange('NBRE_EMPL', Number(e.target.value))}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
