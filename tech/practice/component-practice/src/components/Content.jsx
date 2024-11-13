//content'e external css ekleme

import "./Content.css";

const Content = () => {
  const boxes = [...new Array(6)];
  return (
    <div className="content">
      {
        <div>
          <div className="boxes">
            {boxes.map((_, index) => (
              <div className="box" key={index}></div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Content;
