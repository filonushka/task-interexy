import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

// function App(props) {
//   const numbers = props.numbers;
//   console.log(numbers);
//   const listItems = numbers.map((el) => {
//     return (
//       <li key={el.num} className={el.class}>
//         {el.num}
//       </li>
//     );
//   });

//   return <ul>{listItems}</ul>;
// }

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: props.numbers,
    };
  }

  componentDidMount() {
    const id = setTimeout(() => {
      this.setState({
        numbers: [...this.state.numbers, { num: 6, class: "cl6" }],
      });
      console.log("render");
    }, 3000);
    this.setState({ id });
    console.log("ComponentDidMount");
  }

  componentWillUnmount() {
    clearTimeout(this.state.id);
    console.log("ComponentWillUnmount");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.numbers.map((el) => {
            return (
              <li key={el.num} className={el.class}>
                {el.num}
              </li>
            );
          })}
        </ul>

        <NavLink to="/next">Go to next page</NavLink>

        <Button
          name={"Add to the List"}
          handleClick={() => {
            console.log("add");
            let next = this.state.numbers.length + 1;
            this.setState({
              numbers: [
                ...this.state.numbers,
                { num: next, class: `cl+${next}` },
              ],
            });
          }}
        />
        <Button
          name={"Remove from the List"}
          handleClick={() => {
            console.log("remove");
            this.setState({
              numbers: [
                ...this.state.numbers.slice(0, this.state.numbers.length - 1),
              ],
            });
          }}
        />

        <NavLink to="/cards">Go to cards page</NavLink>
      </div>
    );
  }
}

export default ClassComponent;
