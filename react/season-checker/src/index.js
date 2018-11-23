import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import SeasonError from "./SeasonError";
// 함수형
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(error)
//   );

//   return (
//     <div>
//       <SeasonDisplay />
//     </div>
//   );
// };

// 함수형을 클래스형으로 옮긴형태
class App extends React.Component {
  // constructor(props) {
  // super(props); //Component를 그대로 상속받기위함.
  //생성된 instance의 state
  // this.state = {
  state = {
    //위의 세줄대신 이렇게 생략할 수 있음.
    lat: null, //아직 모르지만 나중에 들어올것이다.
    errorMessage: "error~"
  };
  // }

  renderContent() {
    // 거부
    if (this.state.errorMessage && !this.state.lat) {
      return <SeasonError message={this.state.errorMessage}/>
      // return <div>Error: {this.state.errorMessage}</div>;
    }
    // 허용
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    // 허용 거부 안한상태
    return <Spinner message="huh?" />;
    //   <div>
    //     <p>위도(latitude): {this.state.lat}</p>
    //     <p>Error: {this.state.errorMessage}</p>

    //     <SeasonDisplay />
    //   </div>
    // );
  }

  // render는 실제로 뿌려주는 함수.
  render() {
    return (
      // <div style={{ border: "solid red 10px" }}>
      <div >
      {this.renderContent()}
      </div>
    );
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // componentDidUpdate() {
  //   console.log("컴포넌트 UPDATED & RE-rended");
  // }
}

ReactDOM.render(<App />, document.querySelector("#root"));
