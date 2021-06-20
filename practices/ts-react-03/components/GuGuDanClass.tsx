import * as React from "react";

interface IGuGuDanClass {
  a: number;
  b: number;
  res: string;
  ans: string;
}
const getRandomNumber = () => Math.ceil(Math.random() * 9);
export default class GuGuDanClass extends React.Component<{}, IGuGuDanClass> {
  state = {
    a: getRandomNumber(),
    b: getRandomNumber(),
    res: "",
    ans: "",
  };
  inputRef: HTMLInputElement | null = null;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ans: e.target.value });
  };

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state);
    // if (parseInt(this.state.ans) === this.state.a * this.state.b) {
    //   this.setState({
    //     res: "정답",
    //     a: getRandomNumber(),
    //     b: getRandomNumber(),
    //   });
    // } else {
    //   this.setState({ res: "오답" });
    // }
    // this.inputRef?.focus();
  }
  mySubmit3(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state);
  }
  mySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { a, b, ans, res } = this.state;
    return (
      <div>
        <h2>
          {a}*{b} = ?
        </h2>
        <form onSubmit={this.mySubmit3}>
          정답은?
          <input
            ref={(e) => (this.inputRef = e)}
            type="text"
            value={ans}
            onChange={this.onChange}
          ></input>
          정답여부: {res}
        </form>
      </div>
    );
  }
}
