'use client';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import { PaginationTable, PaginationTableProps } from './PaginationTable';
import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-material.min.css';

export const PAGINATION_DEFAULT = {
  pageSize: 10,
  currentPage: 1
};

type AgGridCustomProps<T> = GridOptions<T> &
  PaginationTableProps & {
    className?: string;
  };

const AgGridCustom = <T extends object = any>(
  props: AgGridCustomProps<T>,
  ref: React.ForwardedRef<AgGridReact>
) => {
  const {
    total = 0,
    className,
    currentPage = PAGINATION_DEFAULT.currentPage,
    pageSize = PAGINATION_DEFAULT.pageSize,
    onPageChange
  } = props;

  const columnDefs = useMemo(
    () =>
      props.columnDefs?.map((col) => ({
        ...col,
        cellClass: clsx('text-gray-5', (col as ColDef).cellClass),
        headerClass: clsx('text-gray-4 font-bold bg-gray-1', col.headerClass)
      })),
    [props.columnDefs]
  );

  return (
    <div className={className}>
      <AgGridReact
        ref={ref}
        pagination={false}
        suppressExcelExport
        columnDefs={columnDefs}
        domLayout="autoHeight"
        className="ag-theme-material !font-primary text-sm !text-body"
        getRowStyle={(params) => {
          const rowNode = params.node;
          const lastChild = rowNode.lastChild;
          if (lastChild)
            return {
              borderBottom: '0'
            };

          return undefined;
        }}
        {...props}
      />
      {onPageChange && (
        <PaginationTable
          total={total}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};
export default forwardRef(AgGridCustom) as <T extends object = any>(
  props: AgGridCustomProps<T> & { ref: React.ForwardedRef<AgGridReact> }
) => JSX.Element;
