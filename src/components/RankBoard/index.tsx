import React, { useState, useEffect } from "react";
import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setPage } from "../../features/users/usersSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Profile from "../PopupProfile";
import CircularProgress from "@mui/material/CircularProgress";

function RankBoard({ isForHome }: { isForHome: boolean }) {
  const dispatch = useDispatch();

  // Redux Store로부터 각종 필요한 데이터를 가져옵니다.
  const rank = useSelector((state: any) => state.users.userList);
  const hasMore = useSelector((state: any) => state.users.hasMore);
  const page = useSelector((state: any) => state.users.currentPage);

  // Home의 리더 보드라면 유저 리스트를 10개까지 만 잘라서 렌더링 해줍니다.
  const copyRank = isForHome ? [...rank].slice(0, 10) : [...rank];

  // 렌더링 할 유저리스트 컴포넌트를 생성합니다.
  const userLists = copyRank.map((el: any, idx: number) => (
    <UserList key={idx} userData={{ ...el, idx }}></UserList>
  ));

  // 프로필 클릭 여부 state
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  // 클릭한 유저 정보를 담는 state
  const [clickedUser, setClickedUser] = useState({});

  // 처음 데이터 20개만 useEffect로 불러옵니다.
  useEffect(() => {
    if (rank.length === 0) {
      dispatch(getUserData(0));
    }
  }, []);

  // 이후 나머지 데이터는 무한 스크롤 핸들러를 통해 불러옵니다.
  const fetchUsers = () => {
    setTimeout(() => {
      if (hasMore) {
        dispatch(setPage());
        dispatch(getUserData(page));
      }
    }, 1000);
  };

  // 리더보드를 위한 무한 스크롤로 구현된 유저리스트 입니다.
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

  // 여백을 누르면 프로필을 닫는 이벤트 핸들러입니다.
  window.addEventListener("click", (e: any) => {
    if (e.target.nodeName === "SECTION") {
      setIsOpenProfile(false);
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
