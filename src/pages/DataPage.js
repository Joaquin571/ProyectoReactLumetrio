import React, { useEffect, useState } from "react";

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 10))); // Obtén solo los primeros 10
  }, []);

  return (
    <div>
      <h1>Datos desde la API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
