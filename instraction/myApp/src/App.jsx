/*import HelloReact from "./components/01-hello/hello-react";
import HelloWorld from "./components/01-hello/hello-world";
import Jsx1 from "./components/02-jsx/jsx2"
import Jsx2 from "./components/02-jsx/jsx2";
import Jsx3 from "./components/02-jsx/jsx3";
import Jsx4 from "./components/02-jsx/jsx4";
import Jsx5 from "./components/02-jsx/jsx5";
import Jsx6 from "./components/02-jsx/jsx6";
import Jsx7 from "./components/02-jsx/jsx7";
import Style1 from "./components/03-style/style1";
import Style2 from "./components/03-style/style2";
import Style3 from "./components/03-style/style3";
import Style4 from "./components/03-style/style4";
import Style5 from "./components/03-style/style5";
import Clock1 from "./components/04-clock1/clock1";
import Clock2 from "./components/06-clock2/clock2";
import Image from "./components/07-images/image";
import Gallery from "./components/08-image-gallery/gallery";
*/

import ProfileCard from "./components/09-profile-card/profile-card";

const App = () => {
  return (
    <div>
      {/*<HelloReact />
      <HelloWorld />
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Jsx6/>
      <Jsx7/>
      <Style1/>
      <Style2/> 
      <Style3/>
      <Style4/>
      <Style5/>
      <Clock1/>
      <Greetings/>
      <Products/>
      <Clock2 textColor="brown" bgColor="aqua" hideTime={false}/>
  <Clock2 textColor="yellow" bgColor="navy" hideTime={true}/>
  <Image/>
  <Gallery/>      <ReactBootstrap />
      */}

      <ProfileCard
        avatar="/img/profile.jpg"
        name="Susan Doe"
        location="Brussels, Belgium"
        shot="14"
        followers="121"
        following="25"
      />


    </div>
  );
};

export default App;
