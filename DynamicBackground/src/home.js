import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./home.css";
export default function Home() {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [colors, setColors] = useState("#FF5733, #33FF57, #5733FF", "#F78F26");
  const [gridItems, setGridItems] = useState([]);
  const DynamicGrid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
    gap: 2px;
  `;
  function generateGridItems() {
    const colorArray = colors.split(",").map((color) => color.trim());
    const items = [];

    for (let i = 0; i < rows * columns; i++) {
      const randomColor =
        colorArray[Math.floor(Math.random() * colorArray.length)];
      items.push({ id: i, color: randomColor });
    }

    setGridItems(items);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValidColorCode = (color) => /^#[0-9A-Fa-f]{6}$/i.test(color);
    if (name === "rows") {
      const parsedRows = parseInt(value, 10) || 1;
      if (parsedRows > 0) {
        setRows(parsedRows);
      } else {
        console.error("Invalid value for rows.");
      }
    } else if (name === "columns") {
      const parsedColumns = parseInt(value, 10) || 1;
      if (parsedColumns > 0) {
        setColumns(parsedColumns);
      } else {
        console.error("Invalid value for columns.");
      }
    } else if (name === "colors") {
      const colorArray = value.split(",").map((color) => color.trim());
      if (colorArray.every(isValidColorCode)) {
        setColors(colorArray);
      } else {
        console.error("Invalid color codes.");
      }
    }
  };
  useEffect(() => {
    generateGridItems();
  }, [rows, columns, colors]);

  return (
    <div className="color-grid-app">
      <div className="input-container">
        <label htmlFor="rows">Rows:</label>
        <input
          type="number"
          id="rows"
          name="rows"
          value={rows}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="columns">Columns:</label>
        <input
          type="number"
          id="columns"
          name="columns"
          value={columns}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="colors">Colors :</label>
        <input
          type="text"
          id="colors"
          name="colors"
          value={colors}
          onChange={handleInputChange}
        />
      </div>
      <DynamicGrid columns={columns} rows={rows}>
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="grid-item"
            style={{ backgroundColor: item.color }}
          ></div>
        ))}
      </DynamicGrid>
    </div>
  );
}
