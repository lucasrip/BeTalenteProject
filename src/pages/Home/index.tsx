import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Isearch from "../../types/search";
import { HomeContainer } from "./style";

export default function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useState<Isearch>({
    filterBy: "",
    value: "",
  });

  async function getData(search: Isearch) {
    const searchData = search.filterBy + "=" + search.value;

    const response = await fetch(
      `http://localhost:3000/employees?${searchData}`,
      {
        method: "GET",
      }
    );
  
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    getData(search);
  }, [search]);
  return (
    <HomeContainer>
      <Header />
      <Table
        title="Funcionários"
        items={data}
        tableHeads={["foto", "nome", "cargo", "data de admisão", "telefone"]}
        filterBy={["name", "cargo", "telefone"]}
        setSearchData={setSearch}
      />
    </HomeContainer>
  );
}
