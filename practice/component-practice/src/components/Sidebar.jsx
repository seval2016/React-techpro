import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {
        <div>
          <span>Sidebar</span>
          <div className="sbr-boxes">
            <div className="sbr-box"></div>
            <div className="sbr-box"></div>
            <div className="sbr-box"></div>
            <div className="sbr-box"></div>
            <div className="sbr-box"></div>
            <div className="sbr-box"></div>
          </div>
        </div>
      }
    </aside>
  );
};

export default Sidebar;
