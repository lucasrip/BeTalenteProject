import { Iemployees } from "../../types/data";
import {
  Header,
  NoItems,
  TableContainer,
  TableContent,
} from "./style";
import SearchdIcon from "../../assets/search.png";
import formatPhoneNumber from "../../utils/phoneFormat";
import { format } from "date-fns";
import CircloIcon from "../../assets/Circle.png";
import arowDowIcon from "../../assets/arrowDow.png";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Isearch from "../../types/search";

interface Iprops {
  title: string;
  items: Iemployees[] | undefined;
  tableHeads: string[];
  filterBy: string[];
  setSearchData: Dispatch<SetStateAction<Isearch>>;
}

export default function Table({
  title,
  items,
  tableHeads,
  filterBy,
  setSearchData,
}: Iprops) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchFilter, setSearchFilter] = useState<string>(filterBy[0]);

  function handleChangeValue(
    value: string,
    setValue: Dispatch<SetStateAction<string>>
  ) {
    setValue(value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchData({
      filterBy: searchFilter,
      value: searchValue,
    });
  }
  return (
    <TableContainer>
      <Header>
        <h1>{title}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <select
            name="filter"
            id="filter"
            value={searchFilter}
            onChange={(e) => handleChangeValue(e.target.value, setSearchFilter)}
          >
            {filterBy.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            id="value"
            placeholder="Pesquisar"
            onChange={(e) => handleChangeValue(e.target.value, setSearchValue)}
          />
          <button type="submit">
            <img
              src={SearchdIcon}
              alt="click aqui e digite oque voce esta procurando"
              title="input para se fazer pesquisa"
            />
          </button>
        </form>
      </Header>
      {items?.length ? (
        <TableContent>
          <thead>
            <tr>
              {tableHeads?.map((headName, index) => {
                return (
                  <th
                    scope="col"
                    key={index}
                    className={index > 1 ? "noMobile" : ""}
                  >
                    {headName}
                  </th>
                );
              })}

              <th className="openMoreInformations" key={"circleIcone"}>
                <img
                  src={CircloIcon}
                  alt="um circulo"
                  title="apenas um circulo"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => {
              const phone = formatPhoneNumber(item.phone);
              const admisionData = format(item.admission_date, "MM/dd/yyyy");
              return (
                <tr>
                  <td>
                    <img
                      src={item.image}
                      alt="foto do profissional"
                      title="foto do profissional"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td className="noMobile">{item.job}</td>
                  <td className="noMobile">{admisionData}</td>
                  <td className="noMobile">{phone}</td>
                  <td className="openMoreInformations">
                    <img
                      src={arowDowIcon}
                      alt="vermais informações sobre o profissional"
                      title="click para ver mais informações sobre o profissional"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TableContent>
      ) : (
        <NoItems>
          <strong> nenhum item encontrado</strong>
        </NoItems>
      )}
    </TableContainer>
  );
}
