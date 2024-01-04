import ProductReview from "../../components/shared/ProductReview";

function Home() {
  return (
    <div className="cart-container">
      <h3>My Reviews</h3>
      <div className="cart-review">
        <ProductReview
          title="OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)"
          rating={4}
          desc="Powered by the Snapdragon® Gen 1 Mobile Platform , the OnePlus 11R 5G"
          time="Today"
          productImg="/images/oneplus phone.jpg"
          userImg="/images/phone review.jpg"
          userTitle="Most Affordable > Midrange 📷💯"
          useDesc="Love the phone. Display is awesome. Ui feels smooth and snappy. But while playing BGMI if I get a call the phone lags a bit. Battery performance is decent. Charging is fast. Camera quality is average. Main sensor takes good photos but ultra wide and macro camera performance is not good as per price. Overall a value for money phone under 40k.
          OnePlus is also providing lifetime screen replacement so you can trust the brand."
        />

        <ProductReview
          title="MSI Sword 15 A12VF"
          rating={5}
          desc="MSI Sword 15 A12VF, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (8GBx2/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4060, 8GB GDDR6/White/2.25Kg), A12VF-401IN"
          time="2 day ago"
          productImg="/images/laptop.jpg"
          userImg="/images/laptop review.jpg"
          userTitle="Excellent laptop for gaming!"
          useDesc="After using rigorously for 3 months I can say this is very good gaming laptop. I bought it in 82k with offers. The specifications laptop have is great with the price it asks. I will definitely suggest this laptop if you need decent graphic card in which you can almost play all games with beautiful settings. I have apply transparent cover to it with lining so please ignore it."
        />

        <ProductReview
          title="MYGOFLIGHT iPad Flight Bag PLC Sport"
          rating={3}
          desc="I checked these bags out at Sun n Fun earlier this year"
          time="2 month ago"
          productImg="/images/bag-review.jpg"
          userImg="/images/bag-review.jpg"
          userTitle="Excellent Bag, but a little tight on space!"
          useDesc="If you're a Pilot or Student this is absolute Bang for a Buck! The best of the best!!! Neve saw this king of attention to details. Best for CFI's for sure. Buy and don't look back! Everything in the bag is luxury and heavy duty as you want to expect from this kind of expensive item. Unlike Brightline, where everything is thin and flimsy this one is just built for pilot by pilot. One thing they can improve is to do a smaller version, just for headset and iPad + bottle. But no complaints, everyone have a different needs and they achieve most of the pilot requirements."
        />
      </div>
    </div>
  );
}

export default Home;
