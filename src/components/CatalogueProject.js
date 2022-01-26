import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";

function CatalogueProject() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setLoading(false);
        setError("");
        console.log(res.data);
        setPosts(res.data);
        setCatalogue(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setPosts([]);
        setCatalogue([]);
        setError("Kindly check your internet connection");
      });
  }, []);
  posts.splice(82, 117);
   
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CATALOGUE</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <div className="header">
            <FilterDropdown posts={posts} setCatalogue={setCatalogue} />
            <SortDropdown catalogue={catalogue} setCatalogue={setCatalogue} />
          </div>
          <div className="layout">
            {catalogue.map((item, index) => (
              <li key={item.id}>
                <CardComponent item={item} index={index+1} />
              </li>
            ))}
          </div>
        </div>
      )}
      {error ? error : null}
    </div>
  );
}
export default CatalogueProject;
