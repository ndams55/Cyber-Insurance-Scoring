import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Col, Row, Space, Upload } from 'antd';

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

export const FileUpload = ({ onFinish }: { onFinish: () => void }) => {
  const submit = () => {
    onFinish();
  };
  return (
    <Container>
      <h2>Chargez les fichiers suivants</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Company Extract : </Col>
        <Col span={16}>
          <Upload
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 300 }}>
              Company Extract
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Security policy : </Col>
        <Col span={16}>
          <Upload
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 300 }}>
              Security policy
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Business balance sheet : </Col>
        <Col span={16}>
          <Upload
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 300 }}>
              Business balance sheet
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={8}>Income statement : </Col>
        <Col span={16}>
          <Upload
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 300 }}>
              Income statement
            </Button>
          </Upload>
        </Col>
      </Row>

      <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='primary' onClick={submit}>
          Soumettre
        </Button>
      </Space>
    </Container>
  );
};
