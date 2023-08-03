import { Profile } from "./Profile/Profile";
import user from "data/user.json"
import { Statistics } from "components/Statistics/Statistics.jsx";
import data from "data/data.json"
export const App = () => {
  return (
    <>
     <Profile 
     username={user.username}
    tag={user.tag}
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats}
     />
     <Statistics 
     title="Upload stats"
     stats={data}/>
    </>
  );
};
