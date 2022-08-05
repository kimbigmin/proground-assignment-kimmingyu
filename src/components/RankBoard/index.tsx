import React from "react";
import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";

function RankBoard() {
  return (
    <Style.Layout>
      <Title title="Leader Board" moreBtn="View All" />
      <div className="rank-container">
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
      </div>
    </Style.Layout>
  );
}

export default RankBoard;
