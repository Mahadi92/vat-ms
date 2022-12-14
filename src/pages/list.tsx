import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Table } from "antd";
import data from "@/store/DummyData";
import axios from "axios";
import apiPrefix from "@/api/ApiPrefix";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { AppStorage } from "@/hooks/AppStorage.class";

const { Column } = Table;

const List = () => {
  const [productsData, setProductsData] = useState(null || []);

  const { isLoading, mutate } = useMutation(
    (payload: any) => {
      const data = axios.post(`${apiPrefix}/create`, {
        ...payload,
      });
      return data;
    },
    {
      onSuccess: (data, variables, context) => {
        // refetch();
        toast.success("Category successfully created");
      },
      onError: (error, variables, context) => {
        // An error happened!
        toast.error("Category not created");
        console.log("An error >>", error);
      },
    }
  );

  const handlesubmit = () => {
    mutate(data[0]);
    // data.map((item) => {
    //   mutate(item);
    // });
  };
  return (
    <DefaultLayout>
      <div className="wrapper py-20">
        {data && (
          <Table dataSource={data || []}>
            <Column title="Product Name" dataIndex="name" key="name" />
            <Column title="HS Code" dataIndex="hsCode" key="hsCode" />
            <Column title="Location" dataIndex="location" key="location" />
            <Column
              title="Price"
              dataIndex="price"
              key="price"
              align="center"
            />
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
              align="center"
              render={(vat) => {
                return <span>{vat}%</span>;
              }}
            />
            {/* <Column
              title="Purchase"
              dataIndex="hsCode"
              align="center"
              key="hsCode"
              render={(hsCode) => {
                return (
                  <button
                    onClick={() => handlesubmit()}
                    className="btn-primary"
                  >
                    Purchase
                  </button>
                );
              }}
            /> */}
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
                  <button className="text-primary disabled:text-primary/60 disabled:cursor-not-allowed">
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
                  <button className="text-red-500 hover:text-red-600 disabled:text-red-300 disabled:cursor-not-allowed">
                    Delete
                  </button>
                );
              }}
            />
          </Table>
        )}
      </div>
    </DefaultLayout>
  );
};

export default List;
