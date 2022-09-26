import InputField from "@/components/InputField";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import axios from "axios";
import apiPrefix from "@/api/ApiPrefix";
import toast from "react-hot-toast";
import data from "@/store/DummyData";

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  hsCode: yup.string().required().label("HS code"),
  price: yup.string().required().label("Price"),
  vat: yup.number().required().label("Vat"),
  quantity: yup.number().required().label("Quantity"),
  location: yup.string().required().label("Location"),
});

const Create = () => {
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
        toast.success("Product created successfully");
      },
      onError: (error, variables, context) => {
        // An error happened!
        toast.error("Product created Failed");
        console.log("An error >>", error);
      },
    }
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });

  // {
  //     name: "Red Cod Fillets - 225g",
  //     hsCode: "0268-1517",
  //     price: 4243,
  //     vat: 15,
  //     quantity: 7,
  //     location: "38035 Novick Alley",
  //     create_at: "2022-02-04T09:14:29Z",
  //   }

  const handleOnSubmit = (payload: any) => {
    var newDate = new Date("October 15, 1996 05:35:32");
    var isoDate = newDate.toISOString();
    const payloadData = { ...payload, create_at: isoDate };
    data.unshift(payloadData);
  };
  return (
    <DefaultLayout>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="wrapper grid gap-4 py-10"
      >
        <InputField
          label="Name"
          name="name"
          placeholder="Enter Product Name"
          hasError={Boolean(errors.name)}
          rest={register("name")}
        />
        <InputField
          label="HS code"
          name="hsCode"
          placeholder="Enter HS Code"
          hasError={Boolean(errors.hsCode)}
          rest={register("hsCode")}
        />
        <InputField
          label="Price"
          name="price"
          placeholder="Enter Price"
          hasError={Boolean(errors.price)}
          rest={register("price")}
        />
        <InputField
          type="number"
          label="Quantity"
          name="quantity"
          placeholder="Quantity of Product"
          hasError={Boolean(errors.quantity)}
          rest={register("quantity")}
        />
        <InputField
          type="number"
          label="Vat"
          name="vat"
          placeholder="Enter VAT"
          hasError={Boolean(errors.vat)}
          rest={register("vat")}
        />
        <InputField
          label="Location"
          name="location"
          placeholder="Enter Location"
          hasError={Boolean(errors.location)}
          rest={register("location")}
        />
        <div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default Create;
