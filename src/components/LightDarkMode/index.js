import { Component } from "react";
import "./index.css";

class LightDarkMode extends Component {
  state = {
    isClick: false,
  };

  onChange = () => {
    this.setState((prevState) => ({
      isClick: !prevState.isClick,
    }));
  };

  bouttonChange = () => {
    const { isClick } = this.state;

    return isClick ? "light mode" : "dark mode";
  };

  render() {
    const { isClick } = this.state;
    const changeBg = isClick ? "dark_container" : "light_container";

    return (
      <div className="bg_container">
        <div className={changeBg}>
          <h1 className="head">Click To chaneg mode</h1>
          <button className="button" onClick={this.onChange}>
            {this.bouttonChange()}
          </button>
        </div>
      </div>
    );
  }
}

export default LightDarkMode;
