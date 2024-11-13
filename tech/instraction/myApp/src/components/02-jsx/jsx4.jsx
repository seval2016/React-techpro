// Javascript yazilabilir

const Jsx4 = () => {
  // Javascript yazilabilir
  // Bu bolumde IF-ELSE yapilari  kullanilabilir

  const isAdmin = false;
  let content = "";
  if (isAdmin) {
    content = <h2>Admin User</h2>;
  } else {
    content = <h2>Customer User</h2>;
  }
  
  return <div>{content}</div>;
};
export default Jsx4;
