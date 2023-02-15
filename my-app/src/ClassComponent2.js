import React from "react";
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

class ClassComponent2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: props.numbers,
    };
  }

  componentDidMount() {
    // this.setState.id = setTimeout(
    //   () =>
    //     this.setState({
    //       numbers: [...this.state.numbers, { num: 6, class: "cl6" }],
    //     }),
    //   3000
    // );
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
      </div>
    );
  }
}

export default ClassComponent2;
