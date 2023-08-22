import { FC } from "react";
import RiotButton from "../components/ArcadeBowButton";
import Section from "../components/Section";
import Polygons from "../components/section-we-are/Polygons";
import RedSquare from "../components/section-we-are/RedSquare";
import SectionHeadMotion from "../components/SectionHeadMotion";
import gamification from "../components/Images/gamification.png";

const WeAre: FC = () => (
  <Section blackVLine>
    <div className="relative w-full pt-[3.125rem]">
      <div className="relative pt-10 pb-5">
        <Polygons />

        {/* Large Title */}
        <h2
          className="text-[#0f1923] mb-9 py-3 font-tungstenBold uppercase overflow-hidden
                text-[3.375rem] md:text-8xl lg:text-[7.5rem]
                leading-[0.94] md:leading-[0.86]
                lg:pl-[8.5%]"
        >
          <SectionHeadMotion>GAMIFICATION</SectionHeadMotion>
        </h2>

        <div className="relative lg:flex lg:flex-wrap lg:items-center">
          {/* Paragraph */}
          <div className="lg:ml-[15%] lg:mb-20 lg:py-10 lg:max-w-[calc(25%)]">
            <h2
              className="font-dinw05 text-xl leading-tight text-[#383e3a]
                        my-4 lg:my-6"
            >
              DEFY THE LIMITS
            </h2>
            <p
              className="text-[#768079] font-dinw1g relative
                        pr-[10%] lg:pr-0
                        leading-snug lg:leading-normal
                        text-lg lg:text-base
                        lg:w-[102%]"
            >
              Blend your style and experience on a global, competitive stage.
              You have 13 rounds to attack and defend your side using sharp
              gunplay and tactical abilities. And, with one life per-round,
              you'll need to think faster than your opponent if you want to
              survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush.
              <RedSquare className="bottom-0 -left-1/3 w-2 h-2" />
            </p>
            <div className="text-center mt-12 lg:relative lg:-left-1/4 xl:left-0">
              <RiotButton accentBorder>PLAY THE DEMO</RiotButton>
            </div>
          </div>

          <div
            className="md:py-16 
            lg:w-[calc(50%)] lg:ml-[9.5%]
            py-11 lg:py-0"
          >
            <div
              className="relative
            lg:-ml-[6vw] lg:left-[7.5vw]"
            >
              {/* Squares */}
              <div
                className="hidden relative w-14 h-2
              lg:block"
              >
                <RedSquare className="w-2 h-2 left-0" />
                <RedSquare className="w-2 h-2 right-0" />
              </div>

              {/* Video Container */}
              <div className="relative group cursor-pointer lg:mt-7">
                <img src={gamification} alt="Logo" />

                {/* Aspect Ratio Adjustment */}
                <div className="lg:pt-[55%]"></div>

                <span className="absolute top-5 -left-[3.75%] px-[3.75%] bg-red text-white font-dinw1g font-bold">
                  PRODUCT DEMO
                </span>
              </div>
              <div
                className="bg-red w-28
              h-[3px] lg:h-[5px]"
              ></div>
            </div>
          </div>

          <RedSquare className="left-0 top-0 w-2 h-2 hidden lg:block" />
        </div>
      </div>
    </div>

    {/* Polygons on Large Screens */}
    <span
      className="absolute border-solid bottom-0 left-0 border-l-red border-t-[transparent] z-10
    lg:border-t-[5vw]
    lg:border-l-[7.3vw]
    "
    ></span>
    <div className="absolute w-20 bottom-0 right-0 bg-red z-10 h-1 hidden lg:block"></div>
  </Section>
);

export default WeAre;
