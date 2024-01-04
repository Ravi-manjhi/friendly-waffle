import { HiMiniStar } from "react-icons/hi2";

function ProductReview({
  title,
  rating,
  desc,
  time,
  productImg,
  userImg,
  userTitle,
  useDesc,
}) {
  return (
    <div className="review-container">
      <img
        src={productImg || "/images/no-image.jpg"}
        alt="laptop"
        className="product-img"
      />
      <div className="product-container">
        {/* product details */}

        <div className="product-info">
          <div className="product-details">
            <h4 className="title">{title}</h4>
            <p className="desc">{desc}</p>
          </div>

          <div className="review-details">
            <h5 className="review-title">Reviewed</h5>
            <h4 className="review-time">{time}</h4>
          </div>
        </div>

        {/* user review */}
        <div className="user-container">
          <div className="user-star">
            {Array.from({ length: rating }).map((_, index) => {
              return <HiMiniStar key={index} size={32} fill="yellow" />;
            })}
            {Array.from({ length: 5 - rating }).map((_, index) => {
              return <HiMiniStar key={index} size={32} fill="grey" />;
            })}
          </div>

          <div className="user-review">
            <h4 className="title">{userTitle}</h4>
            <p className="desc">{useDesc}</p>
          </div>

          <div className="image-container">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <img
                  className="user-img"
                  key={index}
                  src={userImg || "/images/no-image.jpg"}
                  alt="laptop"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
