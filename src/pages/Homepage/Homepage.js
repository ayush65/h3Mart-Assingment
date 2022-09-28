/** @format */

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TableData from "../../components/Tabledata/TableData";
import TableInfo from "../../components/TableInfo/TableInfo";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <TableInfo />
      <TableData />
    </div>
  );
};

export default Homepage;
