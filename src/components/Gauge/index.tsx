import * as Style from "./style";

function Gauge({ percent }: { percent: number }) {
  return (
    <Style.Layout percent={percent}>
      <span className="gauge">
        <p className="percent">{percent}%</p>
      </span>
    </Style.Layout>
  );
}

export default Gauge;
