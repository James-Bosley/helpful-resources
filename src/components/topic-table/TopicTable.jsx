import React from "react";
import "./TopicTable.scss";

const TopicTable = (props) => {
  return (
    <div>
      <table>
        <thead className="table__header-wrapper">
          <tr className="table__header-row">
            <th className="table__header">Name</th>
            <th className="table__header">Description</th>
            <th className="table__header">Resources</th>
          </tr>
        </thead>
        <tbody>
          {props.topics.map((key) => {
            return (
              <tr className="table__row-body">
                <td className="table__details"> {key.name}</td>
                <td className="table__details">{key.description}</td>
                <td className="table__details">
                  {key.resources.map((link) => {
                    return (
                      <ul>
                        <li>
                          <a href={link} target="_blank" rel="noreferrer">
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
