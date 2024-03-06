import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState ([]); 
  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input>
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            handleKeyPres={(e) => {
              if (e.keyCode === "Enter"){
          setTodos (todos.concat([inputValue]));
          setInputValue ("") }}
        }
            placeholder="What do you need?" 
        </li>
        <li>
          Walk the dog <i class="fas fa-trash"></i>{" "}
        </li>
        <li>
          Pay taxes <i class="fas fa-trash"></i>{" "}
        </li>
        <li>
          Go on vacation <i class="fas fa-trash"></i>{" "}
        </li>
        <div> 23 tasks </div>
      </ul>
    </div>
  );
};

export default Home;
