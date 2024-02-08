import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./home.css";
export default function Home() {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [color, setColor] = useState("#ffffff");
  const [colors, setColors] = useState([
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#F78F26",
  ]);
  const [gridItems, setGridItems] = useState([]);
  useEffect(() => {
    generateGridItems();
  }, []);
  const DynamicGrid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
    gap: 2px;
  `;
  const GridDisplay = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.color};
  `;
  function generateGridItems() {
    const items = [];
    for (let i = 0; i < rows * columns; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      items.push({ id: i, color: randomColor });
    }
    setGridItems(items);
  }
  function onDelete(index) {
    setColors((prev) => {
      let remainColors = [];
      remainColors = prev.filter((c, i) => i !== index);
      return remainColors;
    });
    generateGridItems();
  }
  function colorChangeHandler(index, newColor) {
    setColors((prev) => {
      let updatedColors = [];
      updatedColors = updatedColors.concat(prev);
      updatedColors[index] = newColor;
      return updatedColors;
    });
    generateGridItems();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
    }
    generateGridItems();
  };
  // useEffect(() => {
  //  generateGridItems()
  // }, [rows, columns, colors]);

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
        <div id="colors" className="color-container">
          {/* <input
          type="color"
          id="colors"
          name="colors"
          value={color}
          onChange={handleColorChange}
        /> */}
          <button
            className="cus-btn cus-style"
            onClick={() => {
              setColors([...colors, color]);
            }}
          >
            Add
          </button>
          {colors.map((color, index) => {
            return (
              <div className="color-picker-div" key={index}>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => colorChangeHandler(index, e.target.value)}
                />{" "}
                {colors.length > 1 && (
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(index)}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <DynamicGrid columns={columns} rows={rows}>
        {gridItems.map((item) => (
          <GridDisplay key={item.id} color={item.color} />
        ))}
      </DynamicGrid>
    </div>
  );
}
