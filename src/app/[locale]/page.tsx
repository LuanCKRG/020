import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import help from "@/assets/help.svg";
import join from "@/assets/join.svg";
import people from "@/assets/people.svg";
import newsletter from "@/assets/newsletter.svg";
import Image from "next/image";
import FaqCard from "@/components/FaqCard";

const Home = () => {
  const t = useTranslations("Hero");
  const text = useTranslations("WhyUs");
  const tFaq = useTranslations("Faq");
  const tNewsletter = useTranslations("Newsletter");

  const keys: [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
  ] = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
  ];

  return (
    <>
      <main className="showcase dark:text-black">
        <div className="w-full max-w-7xl min-h-screen flex flex-col gap-2 justify-center items-center sm:items-start px-6 sm:px-10 ">
          <div className="flex items-center gap-2 sm:mt-20">
            <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full grid place-items-center bg-black">
              <p className="text-xs sm:text-sm font-inter font-semibold text-white">
                ym.
              </p>
            </div>

            <h3 className="font-lato text-base sm:text-xl font-bold uppercase">
              Yieldmaster
            </h3>
          </div>

          <h1 className="font-inter text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wider">
            {t("invest")}
          </h1>

          <h1 className="font-inter text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wider text-center sm:text-start">
            {t("smartly")}
          </h1>

          <div className="flex gap-4 mt-6 flex-col items-center sm:flex-row">
            <Link
              href="/signup"
              className="contained dark:bg-black dark:text-white px-8 py-3"
            >
              {t("start")}
            </Link>

            <Link
              href="#WhyUs"
              className="outlined px-8 py-3 text-black !bg-transparent"
            >
              {t("learn")}
            </Link>
          </div>
        </div>
      </main>
      <section
        className=" flex flex-col gap-6 px-6 sm:px-10 w-full max-w-5xl mx-auto pt-16"
        id="WhyUs"
      >
        <h2 className="text-center font-inter text-xl sm:text-2xl font-semibold text-primary">
          {text("whyUs")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-8">
          <div className="col-span-1 row-span-1 sm:row-span-2 h-full w-full min-h-[20rem] glassmorphism flex flex-col items-center gap-6 p-6 font-inter">
            <h3 className="text-base sm:text-lg text-title font-semibold tracking-wide">
              {text("forAll")}
            </h3>

            <Image
              src={people}
              alt="For All"
              width={200}
              height={200}
              className="w-2/5 object-contain"
            />

            <p className="text-sm sm:text-base font-lato text-primary font-medium tracking-wide text-justify leading-5">
              {text("forAllDesc")}
            </p>
          </div>

          <div className="col-span-1 row-span-1 sm:row-span-2 h-full w-full min-h-[20rem] glassmorphism flex flex-col items-center gap-6 p-6 font-inter">
            <h3 className="text-base sm:text-lg text-title font-semibold tracking-wide">
              {text("help")}
            </h3>

            <Image
              src={help}
              alt="We Help You"
              width={200}
              height={200}
              className="w-2/5 object-contain"
            />

            <p className="text-sm sm:text-base font-lato text-primary font-medium tracking-wide text-justify leading-5">
              {text("helpDesc")}
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 row-span-1 h-full w-full min-h-[10rem] glassmorphism flex flex-col items-center gap-6 p-6 font-inter">
            <h3 className="text-base sm:text-lg text-title font-semibold tracking-wide">
              {text("join")}
            </h3>

            <div className="flex gap-6 sm:gap-10 flex-col sm:flex-row items-center sm:items-start w-full">
              <Image
                src={join}
                alt="Join Us"
                width={200}
                height={200}
                className="w-2/5 sm:w-2/12 object-contain"
              />

              <p className="text-sm sm:text-base font-lato text-primary font-medium tracking-wide text-justify leading-5">
                {text("joinDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-6 px-6 sm:px-10 w-full max-w-5xl mx-auto mt-12">
        <h2 className="text-center font-inter text-xl sm:text-2xl font-semibold text-title">
          FAQ
        </h2>

        <div className="flex flex-col">
          {keys.map((key, i) => (
            <FaqCard
              question={tFaq(`${key}.question`)}
              answer={tFaq(`${key}.answer`)}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 sm:px-10 w-full max-w-5xl mx-auto mt-16 items-center">
        <Image
          src={newsletter}
          alt="Newsletter"
          width={200}
          height={200}
          className="w-9/12 sm:w-6/12"
        />

        <h2 className="text-center font-inter text-xl sm:text-2xl font-semibold text-primary">
          {tNewsletter("title")}
        </h2>

        <form className="flex items-center flex-col gap-4 sm:flex-row sm:gap-0 w-full max-w-lg">
          <input
            type="email"
            className="w-full border border-primary py-2 px-6 bg-transparent text-primary text-base font-semibold font-inter"
            placeholder={tNewsletter("placeholder")}
          />

          <button
            type="submit"
            className="px-4 py-2 whitespace-nowrap bg-orange text-white border border-orange text-base font-semibold font-inter hover:bg-opacity-80"
          >
            {tNewsletter("subscribe")}
          </button>
        </form>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";
export default Home;
