import * as Style from "./style";
import Title from "../Title";
import StatusBox from "../StatusBox";

function DailyScore() {
  return (
    <Style.Layout>
      <div className="score-box">
        <Title title="Daily Score" />
        <StatusBox type="dailyScore" statusValue={"170232"} />
      </div>
    </Style.Layout>
  );
}

export default DailyScore;
