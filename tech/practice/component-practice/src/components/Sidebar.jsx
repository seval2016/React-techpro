import "./Sidebar.css";

const Sidebar = () => {
  const sidebar=[...new Array(6)];

  return (
    <aside className="sidebar">
      {
        <div>
          <div className="sbr-boxes">
          {
            sidebar.map((_, index) => (
              <div className="sbr-box" key={index}></div>
            ))
          }
          </div>
        </div>
      }
    </aside>
  );
};

export default Sidebar;
