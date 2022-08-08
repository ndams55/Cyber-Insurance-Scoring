import styled from '@emotion/styled';
import { Button, Space, Tooltip } from 'antd';
import { FaClipboardList, FaPen, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { CompanyEntity } from '../../entities/company';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { Drawer } from '../../shared/SidebarContainer';
import { DataTable } from '../../shared/Table';

const Container = styled.div`
  padding-bottom: 20px;
`;

export const Entreprises = () => {
  const router = useNavigate();

  const columns = [
    {
      title: "Nom de l'entreprise",
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Adresse',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: "Date d'enregistrement",
      dataIndex: 'date',
      key: 'date',
      render: DateFrHrWithTime,
    },
    {
      title: 'Action',
      key: 'action',
      render: function fiche(cell: any, row: CompanyEntity) {
        return (
          <Space>
            <Tooltip title='Modifier'>
              <Button
                icon={<FaPen size={13} />}
                type='primary'
                shape='circle'
              />
            </Tooltip>

            <Tooltip title='Supprimer'>
              <ButtonWithModal
                buttonText={<FaTrash size={13} />}
                buttonProps={{
                  danger: true,
                  shape: 'circle',
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                }}
                modalProps={{ title: "Supprimer l'entreprise" }}
              >
                {(closeModal) => (
                  <div>
                    <h3>Voulez vraiment supprimer l'entreprise</h3>

                    <Space style={{ marginTop: 15 }}>
                      <Button onClick={closeModal}>Fermer</Button>
                      <Button
                        type='primary'
                        danger
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Confirmer
                      </Button>
                    </Space>
                  </div>
                )}
              </ButtonWithModal>
            </Tooltip>

            <Tooltip title='Souscription'>
              <Button
                icon={<FaClipboardList size={15} />}
                type='primary'
                onClick={() => router(ROUTES.ASSUREUR.SOUSCRIPTION)}
                shape='circle'
              />
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <Drawer>
      <Container>
        <h3>Listes des entreprises assurés</h3>

        <DataTable<CompanyEntity>
          columns={columns}
          data={
            [
              {
                id: '1',
                name: 'Megasoft',
                address: 'Bastos',
                date: '2022-06-28T18:10:18.113849Z',
              },
              {
                id: '2',
                name: 'Yowyob',
                address: 'Melen',
                date: '2022-01-02T16:13:18.113849Z',
              },
              {
                id: '3',
                name: 'SmartDs',
                address: 'Omnisport',
                date: '2022-07-08T08:40:18.113849Z',
              },
            ] as any
          }
          buttons={
            <Button
              type='primary'
              onClick={() => router(ROUTES.ASSUREUR.NEW_COMPANY)}
            >
              Nouvelle souscription
            </Button>
          }
          filterFunction={(comp: CompanyEntity, filterValue: string) =>
            comp.name.toLowerCase().includes(filterValue.toLowerCase())
          }
        />
      </Container>
    </Drawer>
  );
};
