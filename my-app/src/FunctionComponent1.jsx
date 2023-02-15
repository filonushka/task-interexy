import React from "react";
import { useState, useEffect, useMemo } from "react";
import { getCharacter } from "./api/characterApi";
import CardComponent from "./Card/Card";

function FunctionComponent1() {
  // const [name, setName] = useState("Valeriya");
  // const [counter, setCounter] = useState(0);
  const [cards, setCardsData] = useState([]);
  // const [input, setInput] = useState("");
  // const inputRef = React.useRef();

  useEffect(() => {
    getCharacter().then((res) => setCardsData(res.results));
  }, []);
  console.log(cards);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setName("New Name");
  //   }, 3000);
  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, []);

  // const memorizedValue = useMemo(() => {
  //   console.log("useMemo");
  //   return counter + 100;
  // }, [counter]);

  // const memorizedValue = () => {
  //   console.log("callback");
  //   return counter + 100;
  // };

  // const handleClick = (e) => {
  //   setName(input);
  //   setInput("");
  // };
  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     setName(inputRef.current.value);
  //     setInput("");
  //   }
  // };

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrement = () => {
  //   setCounter(counter - 1);
  // };
  const memoCards = useMemo(() => {
    return (
      <div>
        {cards.map((card) => (
          <p>
            <CardComponent
              name={card.name}
              image={card.image}
              gender={card.gender}
              species={card.species}
              status={card.status}
              cardId={card.id}
            ></CardComponent>
          </p>
        ))}

        {/* <h3>{name}</h3>
      <input
        placeholder="Enter new name"
        value={input}
        ref={inputRef}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleClick}>Change name</button>
      <div>
        <h3>{memorizedValue()}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div> */}
      </div>
    );
  }, [cards]);

  return <div>{cards.length ? memoCards : "Cards are loading..."}</div>;
}

export default FunctionComponent1;
