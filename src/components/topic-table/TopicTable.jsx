import React from "react";

export const TopicTable = (props) => {
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
          {props.topic.map((key) => {
            return (
              <tr>
                <td>{key.props.topic.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
