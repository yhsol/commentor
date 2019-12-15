import React, { useEffect } from "react";
import axios from "axios";

function Nasa() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => console.log(response.data));
    return () => {};
  }, []);

  return <div></div>;
}

export default Nasa;
