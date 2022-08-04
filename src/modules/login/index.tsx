import styled from '@emotion/styled';
import { Button, Form, Image, Input, notification, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import back from '../../assets/images/login.jpg';
import { ROUTES } from '../../routes';
import { BLUE } from '../../shared/colors';
import { defaultImage } from '../../shared/defaultImage';
import { signIn } from './network';

const SignInContainer = styled.div`
  min-height: 100vh;
  background-image: url(${back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    > div {
      background-color: white;
      width: 300px;
      height: 510px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 20px;
    }
  }

  @media (min-width: 768px) {
    padding: 0px;
    > div {
      > div {
        width: 400px;
      }
    }
  }
`;

export const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();

  return (
    <SignInContainer>
      <div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              alt='logo'
              src={back}
              height={120}
              width={120}
              preview={false}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              fallback={defaultImage}
            />
          </div>
          <Form
            layout='vertical'
            form={form}
            labelCol={{ span: 20 }}
            wrapperCol={{ span: 25 }}
            scrollToFirstError
            size='large'
            onFinish={async (data) => {
              setIsLoading(true);
              const { email, password } = data;
              router(ROUTES.ASSUREUR.ENTREPRISE);

              await signIn(email, password)
                .then((data) => {
                  if (data.success) {
                    notification.success({
                      message: 'Succès',
                      description: data.message,
                    });
                  } else {
                    notification.error({
                      message: 'Erreur',
                      description: data.message,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                  notification.error({
                    message: 'Erreur',
                    description: 'Une erreur est survenu',
                  });
                });
              setIsLoading(false);
            }}
          >
            <Form.Item
              label='Adresse mail'
              name='email'
              hasFeedback
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Le champ email est obligatoire',
                },
              ]}
            >
              <Input placeholder='adresse mail' type='email' />
            </Form.Item>
            <Form.Item
              label='Mot de passe'
              name='password'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Le champ mot de passe et obligatoire',
                },
              ]}
            >
              <Input.Password placeholder='mot de passe' />
            </Form.Item>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                color: 'red',
              }}
            >
              <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Mot de passe oublié ?
              </p>
            </div>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                loading={isLoading}
                style={{
                  width: '100%',
                  borderColor: 'transparent',
                  marginBottom: 20,
                }}
              >
                Se connecter
              </Button>

              <Space
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                }}
              >
                <p>Vous n'avez pas de compte ?</p>
                <p
                  style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    color: BLUE,
                    textAlign: 'center',
                  }}
                  onClick={() => router(ROUTES.REGISTRATION)}
                >
                  Créez en un tout de suite
                </p>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </SignInContainer>
  );
};
