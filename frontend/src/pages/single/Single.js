import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/Singlepost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
    <SinglePost/> <Sidebar />
    </div>
  );
};

export default Single;
