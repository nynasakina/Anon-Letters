import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./sidebar.css";
const Sidebar = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/categories");
      console.log(res);
      setCat(res.data);
    };
    getCat();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          className="sidebarImg"
          src="https://pic.onlinewebfonts.com/svg/img_357472.png"
          alt="Img"
        />
        <p>
          There is something honest and pure about writing a letter. Letters
          have an intentional reader and are crafted with purpose, time and
          dignity. They can be playful, serious, funny, nostalgic, parodical,
          profound, poignant or confessionary. They can be open letters to
          society or personal letters to the people you love, miss or never met.
          Letters may be addressed to someone else but they are a sounding board
          for ourselves. In a world where we often struggle to connect and
          listen to each other, letters can fill that gap, whether you choose to
          send them anywhere or not.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <li key={c} className="sidebarListItem">
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
