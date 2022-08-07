import React from "react";
import { useState, useEffect } from "react";
import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";
import axios from "axios";

function RankBoard() {
  const [rank, setRank] = useState([]);

  const getRank = async () => {
    try {
      const res = await axios(
        `https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/?limit=${30}&offset=${500}`
      );
      if (res.status === 200) {
        setRank(res.data);
      } else {
        throw new Error("데이터를 정상적으로 받아오지 못했습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRank();
  }, []);

  const userLists = rank.map((el: any) => <UserList userData={el}></UserList>);
  return (
    <Style.Layout>
      <Title title="Leader Board" moreBtn="View All" />
      <div className="rank-container">{userLists}</div>
    </Style.Layout>
  );
}

export default RankBoard;
