import { useEffect, useState } from "react";

export default function App() {
  const [data, set_data] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        set_data(data);
      });
  }, []);
  return <div>{typeof data.members === "undefined" ? <p>Loading ....</p> : data.members.map((item, idx) => <p key={idx}>{item}</p>)}</div>;
}
