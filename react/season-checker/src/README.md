브라우저가 js 파일 불러온다.

<App /> 컴포넌트 생성

Geolocation API 가 위치정보를 받기 시작

React App이 JSX 리턴하며 HTML 렌더링

....

사용자 위치정보 GET

state 객체 업데이트는 무조건 this.setState() 로만 한다.

React Component의 state 업데이트를 눈치채고

React 가 해당 Comp의 render() 를 실행한다.

render() 가 바뀐 state를 담은 JSX 리턴.

React가 바뀐 JSX 렌더.

Lat: 존재/errorMessage: 없음 => Lat를 보여준다.

Lat: null/errorMessage: 존재 => errorMessage 보여준다.

Lat: null/errorMessage: 없음 => 로딩.


1.constructor(필수)
2.render(필수) 화면에 내용 나타남
3.componentDidMount(define, 화면에 나타나자마자 바로 호출 1time) update를 기다리는 중
4.
