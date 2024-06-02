import './Menu.css';

const Menu = () => {
  const menu = [...new Array(3)];
  return (
    <div className="menu-container">
      {menu.map((_, index) => (
        <div className="menu-item" key={index}></div>
      ))}
    </div>
  );
};

export default Menu;
