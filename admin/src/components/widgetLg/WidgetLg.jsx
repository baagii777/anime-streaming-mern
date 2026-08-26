import "./widgetLg.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetLg() {
  const [paidUsers, setPaidUsers] = useState([]);

  useEffect(() => {
    const getPaidUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setPaidUsers(res.data);
      } catch (err    ) {
        console.log(err);
      }
    };
    getPaidUsers();
  }, []);


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {paidUsers.map((user)=>(
        <tr key={user._id} className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={user.profilePic || "https://www.redditstatic.com/avatars/avatar_default_02_0DD3BB.png"}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{user.username}</span>
          </td>
          <td className="widgetLgDate">11 Dec 2023</td>
          <td className="widgetLgAmount">7500₮</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
