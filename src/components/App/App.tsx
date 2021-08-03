import React from "react";
import { Layout } from "../layout/Layout";
import { SearchBar } from "../searchBar/SearchBar";
import { CardsField } from "../cardsField/CardsField";

import "./app.scss";

export const App: React.FC = () => {
  return (
    <Layout>
      <SearchBar />
      <CardsField />
    </Layout>
  );
};
