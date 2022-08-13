import * as Style from "./style";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function Navbar() {
  return (
    <Style.Layout>
      <ul>
        <li className="toggle point">
          <EmojiEventsOutlinedIcon sx={{ color: "red" }} />
          <p>Point</p>
        </li>
      </ul>
    </Style.Layout>
  );
}

export default Navbar;
