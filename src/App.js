import "./App.css";
import { useState } from "react";
import CustomHooks from "./customHooks";
import A from "./A";
import B from "./B";
function App() {
  const [typedName, setTypedName] = useState();
  const [random, setRandom] = useState(3);
  const [data, setData] = useState([
    {
      id: 1,
      name: "himanshu",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      name: "shekhar",
      like: 0,
      dislike: 0,
    },
  ]);
  const addData = () => {
    setRandom(random + 1);
    setData((prev) => [
      ...prev,
      { id: random, name: typedName, like: 0, dislike: 0 },
    ]);
  };
  console.log(data);
  const handleSort = () => {
    setData([...data].sort((a, b) => b.like - a.like));
  };
  const handleDelete = (id) => {
    setData(data.filter((prev) => prev.id !== id));
  };
  const handleLike = (id, like) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, like: like + 1 } : item
    );
    setData(new_data);
  };
  const handleDislike = (id, dislike) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, dislike: dislike + 1 } : item
    );
    setData(new_data);
  };
  return (
    <>
      <h2>Playing with object using hooks</h2>
      <div>
        <button onClick={handleSort}>Sort</button>
      </div>
      <input
        type="text"
        placeholder="add here"
        onChange={(e) => setTypedName(e.target.value)}
      />
      <button onClick={addData}>Add</button>
      {data.map((ele) => (
        <div key={ele.id} className="main_div">
          <h2>{ele.name}</h2>
          <p>👍 - {ele.like} </p>
          <p>👎 - {ele.dislike}</p>
          <button onClick={() => handleDelete(ele.id)}>Delete</button>
          <button onClick={() => handleLike(ele.id, ele.like)}>Like</button>
          <button onClick={() => handleDislike(ele.id, ele.dislike)}>
            Dislike
          </button>
        </div>
      ))}

<A />
<B />
    </>
  );
}
export default App;