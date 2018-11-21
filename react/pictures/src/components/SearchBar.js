import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    keyword: ""
  };
  // 위와 동일
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }
  // onInputChange(event){
  //   console.log(event.target.value);
  // }

  // onInputClick(event){
  //   console.log('Click!')
  // }
  componentDidUpdate() {
    console.log(this.state);
  }
  // removeBadWords(word) {
  //   if (word === "똥") return "금";
  // }
  removeBadWords(word) {
    // 이녀석 또한 콜백이 필요하다.
    this.setState({ keyword: word }, () => {
      if (/.*fuck.*/i.test(this.state.keyword)) {
        this.setState({
          keyword: this.state.keyword.replace(/fuck/i, "NOPE")
        });
      }
    });
  }

  
  onFormSubmit = event => {
  // 기본적으로 적용된 디폴트값을 작동하지 않게 해줌.
    event.preventDefault();
    this.props.onUserSubmit(this.state.keyword);
    // console.log(this.state.keyword);
  };

  render() {
    return (
      <div className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="keyword">Search</label>
          <input
            id="keyword"
            type="text"
            // onChange={e => console.log(e.target.value)}
            // onChange={this.onInputChange}
            // onChange={e =>this.setState({ keyword: e.target.value.toUpperCase() })}
            onChange={e => this.removeBadWords(e.target.value)}
            // onClick={this.onInputClick}
            // value="hi"
            // 계속 렌더되기때문에 브라우저에서 hi를 지우는것을 시도하더라도 지워지지 않는것을 볼 수 있다.
            value={this.state.keyword}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
