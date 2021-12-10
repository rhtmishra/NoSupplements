import React, { useState, useEffect } from "react";
import Person from "./Person";
import * as ReactBootstrap from "react-bootstrap";

// const nperson = (cvalue) => {
//   return (
//     <Person
//       key={cvalue.id}
//       name={cvalue.name}
//       email={cvalue.email}
//       contact={cvalue.phone}
//       website={cvalue.website}
//       username={cvalue.username}
//       onSelect={deleteItems}
//     />
//   );
// };

const Container = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setLoading(true);
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteItems = (id) => {
    setUsers((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      {loading ? (
        users.map((cvalue, index) => {
          return (
            <Person
              id={index}
              key={cvalue.id}
              name={cvalue.name}
              email={cvalue.email}
              contact={cvalue.phone}
              website={cvalue.website}
              username={cvalue.username}
              onSelect={deleteItems}
            />
          );
        })
      ) : (
        <>
          <ReactBootstrap.Spinner animation="border" size="sm" />
          <ReactBootstrap.Spinner animation="border" />
          <ReactBootstrap.Spinner animation="grow" size="sm" />
          <ReactBootstrap.Spinner animation="grow" />
        </>
      )}
    </div>
  );
};

export default Container;
