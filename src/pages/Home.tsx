import { forwardRef } from "react";

const Home = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div ref={ref} className="home">
      <h1>&lt;home&gt;</h1>

      <p>Less of a portfolio, more of a blog.</p>

      <h1>&lt;/home&gt;</h1>
    </div>
  );
});

export default Home;