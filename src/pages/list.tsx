import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Table } from "antd";
import data from "@/store/DummyData";

const { Column } = Table;

const List = () => {
  return (
    <DefaultLayout>
      <div className="wrapper py-20">
        <Table dataSource={data}>
          <Column title="Product Name" dataIndex="pName" key="pName" />
          <Column title="HS Code" dataIndex="hsCode" key="hsCode" />
          <Column title="Location" dataIndex="location" key="location" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column
            title="Quantity"
            dataIndex="quantity"
            key="quantity"
            align="center"
          />
          <Column
            title="Vat"
            dataIndex="vat"
            key="vat"
            render={(vat) => {
              return <span>{vat}%</span>;
            }}
          />
          <Column
            title="Purchase"
            dataIndex="hsCode"
            align="center"
            key="hsCode"
            render={(hsCode) => {
              return <button className="btn-primary">Purchase</button>;
            }}
          />
          <Column
            title="Sale"
            dataIndex="hsCode"
            align="center"
            key="hsCode"
            render={(hsCode) => {
              return <button className="btn-secondary">Sale</button>;
            }}
          />
          <Column
            title="Edit"
            dataIndex="hsCode"
            align="center"
            key="hsCode"
            render={(hsCode) => {
              return (
                <button
                  className="text-primary disabled:text-primary/60 disabled:cursor-not-allowed"
                  disabled
                >
                  Edit
                </button>
              );
            }}
          />
          <Column
            title="Delete"
            dataIndex="hsCode"
            align="center"
            key="hsCode"
            render={(hsCode) => {
              return (
                <button
                  className="text-red-500 hover:text-red-600 disabled:text-red-300 disabled:cursor-not-allowed"
                  disabled
                >
                  Delete
                </button>
              );
            }}
          />
        </Table>
      </div>
    </DefaultLayout>
  );
};

export default List;
