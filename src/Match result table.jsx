import React from "react";

const MatchResultTable = ({ matches }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Match Score</th>
      </tr>
    </thead>
    <tbody>
      {matches.length ? (
        matches.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{(p.score * 100).toFixed(1)}%</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="2">No suitable matches found.</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default MatchResultTable;
