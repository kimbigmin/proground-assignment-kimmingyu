import React from "react";
import * as Style from "./style";

function UserList() {
  return (
    <Style.Layout>
      <div className="info">
        <p className="rank">{1}</p>
        <img
          src="https://images.unsplash.com/photo-1659686928263-5020563f143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2381&q=80"
          alt="ddd"
        />
        <p className="nick-name">{"이든"}</p>
      </div>
      <p className="score">{27.04}</p>
    </Style.Layout>
  );
}

export default UserList;
