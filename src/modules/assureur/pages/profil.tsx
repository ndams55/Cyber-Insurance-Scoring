import styled from '@emotion/styled';
import { Drawer } from '../../shared/SidebarContainer';

const Container = styled.div`
  padding-bottom: 20px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CompanyProfil = () => {
  return (
    <Drawer>
      <Container>
        <h2>Profil de l'entreprise</h2>
      </Container>
    </Drawer>
  );
};
