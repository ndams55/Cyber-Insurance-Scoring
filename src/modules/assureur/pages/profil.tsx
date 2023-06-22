import styled from '@emotion/styled';
import { CustomProgress } from '../../shared/Progress';
import { Drawer } from '../../shared/SidebarContainer';

const Container = styled.div`
  padding-bottom: 20px;
  > h2 {
    text-align: center;
    font-size: 25px;
    font-family: Montserrat;
  }

  .info {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin: 10px 0px 35px 0px;
    padding: 20px;

    > h3 {
      font-family: Montserrat;
    }
  }

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
        <h2>Cyber Insurance scoring Dashboard</h2>

        <div className='info'>
          <h3>General Information</h3>
          <div>
            <p>Company Name : </p>
            <p>Sector of activity : </p>
            <p>Chiffre d'affaire : </p>
            <p>Marge brute d'exploitation : </p>
          </div>
        </div>

        <CustomProgress />
      </Container>
    </Drawer>
  );
};
