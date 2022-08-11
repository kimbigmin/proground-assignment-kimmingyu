import React from "react";

import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData, setPage } from "../../features/users/usersSlice";
import InfiniteScroll from "react-infinite-scroll-component";

function RankBoard({ isForHome }: { isForHome: boolean }) {
  const rank = useSelector((state: any) => state.users.userList);
  const hasMore = useSelector((state: any) => state.users.hasMore);
  const page = useSelector((state: any) => state.users.currentPage);
  const dispatch = useDispatch();

  const copyRank = isForHome ? [...rank].slice(0, 10) : [...rank];

  const userLists = copyRank.map((el: any, idx: number) => (
    <UserList userData={{ ...el, idx }}></UserList>
  ));

  useEffect(() => {
    if (rank.length === 0) {
      dispatch(getUserData(0));
    }
  }, []);

  const fetchUsers = () => {
    setTimeout(() => {
      if (hasMore) {
        dispatch(setPage());
        dispatch(getUserData(page));
      }
    }, 1000);
  };

  const userListForBoard = rank ? (
    <InfiniteScroll
      dataLength={rank.length}
      next={fetchUsers}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {userLists}
    </InfiniteScroll>
  ) : (
    <h3>No Records</h3>
  );

  return (
    <Style.Layout isForHome={isForHome}>
      {isForHome ? <Title title="Leader Board" moreBtn="View All" /> : null}
      <div className="rank-container">
        {isForHome ? userLists : userListForBoard}
      </div>
    </Style.Layout>
  );
}

export default RankBoard;
