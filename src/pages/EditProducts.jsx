import React, { useEffect } from "react";
import FormEditProducts from "../components/FormEditProducts";
import Layout from "./Layout";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlices";
const EditProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, user, navigate]);
  return (
    <div>
      <Layout>
        <FormEditProducts />
      </Layout>
    </div>
  );
};

export default EditProducts;
