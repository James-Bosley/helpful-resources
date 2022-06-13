import React from "react";

const TopicTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {props.topics.map((key) => {
            return (
              <tr>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.resources}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TopicTable;
