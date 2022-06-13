import React from "react";
import "./TopicTable.scss";

const TopicTable = (props) => {
  return (
    <div>
      <table className="table">
        {/* <thead className="table__header-wrapper"> */}
        <div className="table__wrapper">
          <tr className="table__header-row">
            <th className="table__header table__header-1">Name</th>
          </tr>
          <tr className="table__header-row">
            <th className="table__header table__header-2">Description</th>
          </tr>
          <tr className="table__header-row">
            <th className="table__header table__header-3">Resources</th>
          </tr>
        </div>
        {/* </thead> */}
        <tbody>
          {props.topics.map((key) => {
            return (
              <tr className="table__row-body">
                <td className="table__details table__details--1 ">
                  {" "}
                  {key.name}
                </td>
                <td className="table__details table__details--2">
                  {key.description}
                </td>
                <td className="table__details table__details--3">
                  {key.resources.map((link) => {
                    return (
                      <ul>
                        <li className="table__list">
                          <a
                            className="table__list-link"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link}
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TopicTable;
