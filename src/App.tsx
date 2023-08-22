import React, { Suspense } from "react";
import "./App.scss";
import Header from "./components/header";
import Preloader from "./components/Preloader";
import Hero from "./sections/Hero";

const Act2 = React.lazy(() => import("./sections/Act2"));

const News = React.lazy(() => import("./sections/News"));
const WeAre = React.lazy(() => import("./sections/WeAre"));

function App() {
  return (
    <>
      <main className="relative pt-[80px]">
        <Header />
        <Hero />
        <Suspense fallback={<Preloader />}>
          <News />
          <Act2 />
          <WeAre />
        </Suspense>
      </main>
    </>
  );
}

export default App;
