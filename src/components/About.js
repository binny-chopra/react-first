import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Web Series</h2>
      {/* <User name={"Binny Chopra function"} /> */}
      <UserClass name={"Binny Chopra class"} />
    </div>
  );
};

export default About;
