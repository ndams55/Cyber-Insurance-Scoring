import styled from '@emotion/styled';
import { Button } from 'antd';
import { Drawer } from '../../shared/SidebarContainer';

const Container = styled.div`
  padding-bottom: 20px;
`;

export const Entreprises = () => {
  return (
    <Drawer>
      <Container>
        <Button>Créer entreprise</Button>
      </Container>
    </Drawer>
  );
};
