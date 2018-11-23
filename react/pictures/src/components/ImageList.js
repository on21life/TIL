import React from "react";

// this.props는 클래스에서 접근할때고 함수는 인자로받음.
export default function ImageList(props) {
  const images = props.images.map(image => {
    // key라는 프로퍼티를 이용해서 잦은 setState로 인한 re render를 방지함.
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.description} />;
      </div>
    );
  });
  console.log(props.images);
  return <div>{images}</div>;
}
