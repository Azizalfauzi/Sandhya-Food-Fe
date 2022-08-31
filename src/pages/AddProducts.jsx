import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddProducts from "../components/FormAddProducts";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlices";
const AddProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <div>
      <Layout>
        <FormAddProducts />
      </Layout>
    </div>
  );
};

export default AddProducts;
