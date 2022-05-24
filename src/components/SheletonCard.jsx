import Skeleton from "react-loading-skeleton";

const SheletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="left-col">
          <Skeleton  width={40} height={40} />
        </div>
        <div className="right-col">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    ));
};
export default SheletonCard;