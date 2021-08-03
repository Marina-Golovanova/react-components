import React from "react";
import { Layout } from "../layout/Layout";
import { SearchBar } from "../searchBar/SearchBar";

import "./app.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      <SearchBar />
    </Layout>
  );
};
