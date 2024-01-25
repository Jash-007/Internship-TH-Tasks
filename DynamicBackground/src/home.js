import React, { useState, useEffect } from 'react'
import './home.css'
export const Home = () => {
    const [rows, setRows] = useState(3);
    const [columns, setColumns] = useState(3);
    const [colors, setColors] = useState('#FF5733, #33FF57, #5733FF', '#F78F26');
    const [gridItems, setGridItems] = useState([]);

    function generateGridItems() {
        const colorArray = colors.split(',').map(color => color.trim());
        const items = [];

        for (let i = 0; i < rows * columns; i++) {
            const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            items.push({ id: i, color: randomColor });
        }

        setGridItems(items);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'rows') {
            setRows(parseInt(value, 10) || 1);
        } else if (name === 'columns') {
            setColumns(parseInt(value, 10) || 1);
        } else if (name === 'colors') {
            setColors(value);
        }

        // setGridItems(generateGridItems());
    };
    useEffect(() => {
        generateGridItems();
    }, [rows, columns, colors]);


    return (
        <div className="color-grid-app">
            <div className="input-container">
                <label htmlFor="rows">Rows:</label>
                <input type="number" id="rows" name="rows" value={rows} onChange={handleInputChange} />

                <label htmlFor="columns">Columns:</label>
                <input type="number" id="columns" name="columns" value={columns} onChange={handleInputChange} />

                <label htmlFor="colors">Colors :</label>
                <input type="text" id="colors" name="colors" value={colors} onChange={handleInputChange} />
            </div>

            <div className="grid-container" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows},1fr)` }}>
                {gridItems.map(item => (
                    <div key={item.id} className="grid-item" style={{ backgroundColor: item.color }}></div>
                ))}
            </div>
        </div>
    );
}
