import axios from "axios";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../util/api.mjs";
import { getArticleList } from "../../util/api.mjs";

export const TopicTable = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/content`);
    if (response) {
      const products = response.data;
      setProducts(products);
    }
  };

  const data = useMemo(
    () => [
      {
        title: "React",
        introduction:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
        topics: [
          {
            name: "JSX",
            description: "",
            resources: [
              "https://reactjs.org/docs/introducing-jsx.html",
              "https://reactjs.org/docs/jsx-in-depth.html",
              "https://reactjs.org/docs/lists-and-keys.html",
              "https://reactjs.org/docs/fragments.html",
              "https://create-react-app.dev/docs/adding-images-fonts-and-files/",
            ],
          },
          {
            name: "Props",
            description:
              "One of React's core concepts is splitting UI into small pieces called components. In order to connect components together, we need a way to pass information between them. Props are how data is passed into components.",
            resources: [
              "https://reactjs.org/docs/components-and-props.html",
              "https://reactjs.org/docs/lists-and-keys.html",
            ],
          },
          {
            name: "Handling Events",
            description:
              "Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase,  With JSX you pass a function as the event handler, rather than a string.",
            resources: [
              "https://reactjs.org/docs/handling-events.html",
              "https://www.freecodecamp.org/news/the-best-way-to-bind-event-handlers-in-react-282db2cf1530/",
            ],
          },
        ],
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "title",
        accessor: "title",
      },
      {
        Header: "introduction",
        accessor: "introduction",
      },
      {
        Header: "Topics",
        accessor: "topics",
      },
    ],
    []
  );

  const productsData = useMemo(() => [...products], [products]);
  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0]).map((key) => {
            return { Header: key, accessor: key };
          })
        : [],
    [products]
  );
  const tableInstance = useTable({
    columns: productsColumns,
    data: productsData,
  });
  const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance;
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Table {...getTableProps}>
      <TableHead>
        {headerGroups.headers.map((headerGroup) => {
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.map((column) => (
              <TableHeader {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHeader>
            ))}
          </TableRow>;
        })}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableData {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </TableData>
              ))}{" "}
              ;{" "}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
