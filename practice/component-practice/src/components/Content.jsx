//content'e external css ekleme

import "./Content.css";

const Content = () => {
  return (
    <main className="content">
      {
        <div>
          <span>Content</span>
          <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      }
    </main>
  );
};

export default Content;
