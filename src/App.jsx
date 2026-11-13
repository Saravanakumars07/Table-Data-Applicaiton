import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rows, setRows] = useState([]);

  const handleAdd = () => {
    if (place.trim() === "" || name.trim() === "" || age.trim() === "") return;

    setRows([...rows, { place: place.trim(), name: name.trim(), age: age.trim() }]);
    setPlace("");
    setName("");
    setAge("");
  };

  const handleClear = () => {
    setPlace("");
    setName("");
    setAge("");
  };

  const handleRemove = (indexToRemove) => {
    setRows(rows.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Add People to Table</h1>
        <p className="subtitle">Enter Place, Name, and Age, then click Add.</p>

        <div className="row">
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="btn-row">
          <button type="button" className="add-btn" onClick={handleAdd}>
            Add
          </button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {rows.length === 0 ? (
          <p className="empty">No entries yet. Add your first row!</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, index) => (
                <tr key={index}>
                  <td>{r.place}</td>
                  <td>{r.name}</td>
                  <td>{r.age}</td>
                  <td>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;