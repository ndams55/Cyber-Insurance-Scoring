import styled from '@emotion/styled';
import { Input, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Key } from 'antd/lib/table/interface';
import { ReactNode, useState } from 'react';
import { BLUE } from '../../../shared/colors';
import { DateFrHrWithTime } from '../DateToFrench';

const DataTableContainer = styled.div`
  th {
    background-color: ${BLUE} !important;
    color: white !important;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    zoom: 1;
  }
`;

export const DataTable = <T extends { id: string }>({
  data,
  columns,
  loading,
  selectedRowKeys,
  onSelectedRowKeysChange,
  filterFunction,
  buttons,
  expandable,
  expandField,
}: {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  selectedRowKeys?: Key[];
  onSelectedRowKeysChange?: (newSelectedRowKeys: Key[]) => any;
  filterFunction?: (dataItem: T, filterValue: string) => boolean;
  buttons?: ReactNode;
  expandable?: boolean;
  expandField?: string;
}) => {
  const [filterValue, setFilterValue] = useState('');
  const dataToShow = data?.filter((dataItem) =>
    filterFunction ? filterFunction(dataItem, filterValue) : true,
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  };

  return (
    <DataTableContainer>
      <Space style={{ marginBottom: 10 }}>
        <Input
          placeholder='Filtrer'
          style={{ width: 300 }}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {buttons}
      </Space>
      <Table
        rowSelection={selectedRowKeys ? rowSelection : undefined}
        dataSource={dataToShow}
        columns={columns}
        loading={loading}
        expandable={
          expandable && expandField
            ? {
                expandedRowRender: (row: any) => (
                  <span>
                    {'Categorie creee le : '}
                    {DateFrHrWithTime(row[expandField])}
                  </span>
                ),
              }
            : {}
        }
        size='small'
        bordered
      />
    </DataTableContainer>
  );
};
