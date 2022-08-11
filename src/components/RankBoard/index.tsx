import React, { useState, useEffect } from "react";
import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setPage } from "../../features/users/usersSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Profile from "../Profile";
import CircularProgress from "@mui/material/CircularProgress";

function RankBoard({ isForHome }: { isForHome: boolean }) {
  const rank = useSelector((state: any) => state.users.userList);
  const hasMore = useSelector((state: any) => state.users.hasMore);
  const page = useSelector((state: any) => state.users.currentPage);
  const dispatch = useDispatch();

  const copyRank = isForHome ? [...rank].slice(0, 10) : [...rank];

  const userLists = copyRank.map((el: any, idx: number) => (
    <UserList key={idx} userData={{ ...el, idx }}></UserList>
  ));

  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [clickedUser, setClickedUser] = useState({});

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
      loader={
        <div className="loading">
          <CircularProgress size="2rem" />
          <h4>Loading</h4>
        </div>
      }
    >
      {userLists}
    </InfiniteScroll>
  ) : (
    <h3>No Records</h3>
  );

  window.addEventListener("click", (e: any) => {
    if (e.target.nodeName === "SECTION") {
      setIsOpenProfile(false);
    }

    if (e.target.className === "profile-box") {
    }
  });

  return (
    <Style.Layout isForHome={isForHome} isOpen={isOpenProfile}>
      {isForHome ? <Title title="Leader Board" moreBtn="View All" /> : null}
      <div
        className="rank-container"
        onClick={(e: any) => {
          const $li = e.target.closest("li");
          const { index } = $li.dataset;

          setIsOpenProfile(true);
          setClickedUser({ ...rank[index], index });
        }}
      >
        {isForHome ? userLists : userListForBoard}
      </div>
      {isOpenProfile ? (
        <Profile userData={clickedUser} setIsOpenProfile={setIsOpenProfile} />
      ) : null}
    </Style.Layout>
  );
}

export default RankBoard;
