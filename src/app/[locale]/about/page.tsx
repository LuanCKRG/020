import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations("AboutUs");
  const Keys: ["section1", "section2", "section3"] = [
    "section1",
    "section2",
    "section3",
  ];

  return (
    <div className="w-full flex flex-col gap-4 items-center px-6 py-28">
      <h1 className="text-4xl sm:text-6xl font-inter font-medium text-center">
        {t("title")}
      </h1>

      <p className="text-sm sm:text-base font-lato text-primary tracking-wide max-w-lg mt-4 text-center">
        {t("content")}
      </p>
      <div className="flex flex-col gap-6 mt-6">
        {Keys.map((key, index) => (
          <div key={index} className="mt-8 glassmorphism px-8 py-8">
            <h2 className="text-sm sm:text-lg font-inter text-orange-500 font-semibold">
              {t(`${key}.title`)}
            </h2>
            <p className="break-words text-sm sm:text-base font-lato text-primary tracking-wide max-w-[900px] mt-2 text-center">
              {t(`${key}.content`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default About;
