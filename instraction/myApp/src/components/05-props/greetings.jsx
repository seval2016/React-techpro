import Welcome from "./welcome";

const Greetings = () => {
  return (
    <div>
      <h1>Props</h1>

      <Welcome firstName="John" lastName="Doe" />
      <Welcome firstName="Kevin" lastName="White" textColor="blue" />
      <Welcome firstName="Joseph" lastName="Yellow" textColor="orange"/>
    </div>
  );
};

export default Greetings;
