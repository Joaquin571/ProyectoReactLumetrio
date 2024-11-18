import React, { useState } from "react";

function DataList({ items }) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Lista de datos</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Incrementar: {count}</button>
    </div>
  );
}

export default DataList;
