import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
const Transections = () => {
  const [data, setData] = useState([]);
  const getNBATeamData = async () => {
    await axios.get("https://www.balldontlie.io/api/v1/teams").then((res) => {
      setData(res.data.data);
    });
  };
  useEffect(() => {
    getNBATeamData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "city", headerName: "City", width: 150 },
    { field: "abbreviation", headerName: "Abreviation", width: 150 },
    { field: "conference", headerName: "Conference", width: 150 },
    { field: "devision", headerName: "Devision", width: 150 },
  ];
  const rows = data.map((row) => ({
    id: row.id,
    city: row.city,
    abbreviation: row.abbreviation,
    conference: row.conference,
    devision: row.devision,
  }));
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2>Customers</h2>
          <h2>Welcome Back, Ilyas</h2>
        </div>
        <div className="p-4" style={{ height: 1000, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
      </div>
    </>
  );
};

export default Transections;
