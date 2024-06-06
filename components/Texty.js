
// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Texty = () => {
  return (
    <div className="pt-[140px] max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0">
    <p className="font-semibold text-[28px] sm:text-5xl bricolage-grotesque-font leading-snug sm:leading-[60px]">
      <span className="text-[#111111]">
        Ameliore ton quotidien avec <span  className="text-yellow-500 font-extrabold">Tunisian Pass</span>
      </span>
      <br />
      <span className="text-[#999999]">
      Profitez d’un accès à de nombreux avantages dans la restauration, le fitness, le bien-être, la santé, la beauté, et plus encore.
      </span>
    </p>
  </div>
  );
};

export default Texty;
