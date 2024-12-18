import React from "react";
import Layout from "../components/common/Layout";
import CardCustom from "../components/CardCustom";

const HomePage = () => {
  return (
    <Layout>
      <h1>Welcome to Nexcent</h1>
      <p>Explore our products below:</p>
      <CardCustom />
    </Layout>
  );
};

export default HomePage;
