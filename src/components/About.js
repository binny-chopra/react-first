import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
// import User from "./User";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-lg font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>Web Series</h2>
      {/* <User name={"Binny Chopra function"} /> */}
      <UserClass name={"Binny Chopra class"} />
    </div>
  );
};

export default About;
