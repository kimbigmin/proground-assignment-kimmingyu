import { Dispatch, SetStateAction } from "react";

export interface User {
  image: string;
  serialNumber: string;
  price: string;
  isBlocked?: boolean;
  index: string | number;
}

export interface UserList {
  userList: User[];
  hasMore: boolean;
  isLoading: boolean;
  currentPage: number;
}

export interface ProfileProps {
  userData: User;
  setIsOpenProfile: Dispatch<SetStateAction<boolean>>;
}

export interface StatusBoxProps {
  type: "dailyScore" | "estimatedWalk";
  statusValue: string;
}

export interface TitleProps {
  title: string;
  moreBtn?: string;
}

export interface RankBoardProps {
  isForHome: boolean;
}
