import InputField from "@/components/InputField";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  hsCode: yup.string().required().label("HS code"),
  price: yup.string().required().label("Price"),
  quantity: yup.number().required().label("Quantity"),
  location: yup.string().required().label("Location"),
});

const Create = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });
  return (
    <DefaultLayout>
      <form className="wrapper grid gap-4 py-10">
        <InputField label="Name" name="name" placeholder="Enter Product Name" />
        <InputField label="HS code" name="hsCode" placeholder="Enter HS Code" />
        <InputField label="Price" name="price" placeholder="Enter Price" />
        <InputField
          type="number"
          label="Quantity"
          name="quantity"
          placeholder="Quantity of Product"
        />
        <InputField label="Vat" name="vat" placeholder="Enter VAT" />
        <InputField
          label="Location"
          name="location"
          placeholder="Enter Location"
        />
        <div>
          <button className="btn-primary">Submit</button>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default Create;
