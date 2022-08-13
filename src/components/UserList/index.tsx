import * as Style from "./style";
import block from "../../assets/block.png";
import { User } from "../../types/type";
import convertNumber from "../../utils/convertNumber";

function UserList({ userData }: { userData: User }) {
  const userInfo = userData.isBlocked
    ? { image: block, serialNumber: "Blocked_User" }
    : userData;

  return (
    <Style.Layout data-index={userData.index}>
      <>
        <p className="rank">{+userData.index + 1}</p>
        <div className="info">
          <img src={userInfo.image} alt="user-logo" />
          <p className="nick-name">{userInfo.serialNumber}</p>
        </div>
        <p className="score">{convertNumber(userData.price)}</p>
      </>
    </Style.Layout>
  );
}

export default UserList;
