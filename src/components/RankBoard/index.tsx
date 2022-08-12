import React, { useState, useEffect } from "react";
import * as Style from "./style";
import UserList from "../UserList";
import Title from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setPage } from "../../features/users/usersSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Profile from "../PopupProfile";
import CircularProgress from "@mui/material/CircularProgress";
import { RootState } from "../../store";
import { User } from "../../types/type";

function RankBoard({ isForHome }: { isForHome: boolean }) {
  const dispatch = useDispatch();

  // Redux Store로부터 각종 필요한 데이터를 가져옵니다.
  const {
    userList: rank,
    hasMore,
    currentPage: page,
  } = useSelector((state: RootState) => state.users);

  // Home의 리더 보드라면 유저 리스트를 10개까지 만 잘라서 렌더링 해줍니다.
  const copyRank = isForHome ? [...rank].slice(0, 10) : [...rank];

  // 렌더링 할 유저리스트 컴포넌트를 생성합니다.
  const userLists = copyRank.map((el: User, index: number) => (
    <UserList key={el.serialNumber} userData={{ ...el, index }}></UserList>
  ));

  // 프로필 클릭 여부 state
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  // 클릭한 유저 정보를 담는 state
  const [clickedUser, setClickedUser] = useState<User>();

  // 처음 유저리스트가 비어있을 때 데이터 20개만 useEffect로 불러옵니다.
  useEffect(() => {
    if (rank.length === 0) {
      dispatch(getUserData(0));
    }
  }, []);

  // 이후 나머지 데이터는 무한 스크롤 핸들러를 통해 불러옵니다.
  const fetchUsers = () => {
    setTimeout(() => {
      if (hasMore && rank.length <= 180) {
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
        rank.length <= 180 && (
          <div className="loading">
            <CircularProgress size="2rem" />
            <h4>Loading</h4>
          </div>
        )
      }
    >
      {userLists}
    </InfiniteScroll>
  ) : (
    <h3>No Records</h3>
  );

  // 여백을 누르면 프로필을 닫는 이벤트 핸들러입니다.
  window.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === "SECTION") {
      setIsOpenProfile(false);
    }
  });

  // 유저리스트 클릭 핸들러 - (리더보드에서만 핸들러 실행)
  const handleListClick = (e: React.MouseEvent): void => {
    if (!isForHome) {
      const target = e.target as HTMLElement;
      const $li = target.closest("li") as HTMLLIElement;
      const { index } = $li.dataset;
      setIsOpenProfile(true);
      if (index) {
        setClickedUser({ ...rank[+index], index });
      }
    }
  };

  return (
    <Style.Layout isForHome={isForHome} isOpen={isOpenProfile}>
      {isForHome ? <Title title="Leader Board" moreBtn="View All" /> : null}
      <div className="rank-container" onClick={handleListClick}>
        {isForHome ? userLists : userListForBoard}
      </div>
      {isOpenProfile && clickedUser ? (
        <Profile userData={clickedUser} setIsOpenProfile={setIsOpenProfile} />
      ) : null}
    </Style.Layout>
  );
}

export default RankBoard;
