import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const Pricing = () => {
  const t = useTranslations("Pricing");

  const messages = {
    title1: t("title1"),
    title2: t("title2"),
    desc: t("desc"),
    sale: t("sale"),
    freeTrail: t("freeTrail"),
    subscribe: t("subscribe"),
    coupon: t("coupon"),
    code: t("code"),
    apply: t("apply"),
    error: t("error"),
  };

  return (
    <section className="w-full min-h-screen  max-w-5xl px-6 sm:px-10 mx-auto pt-28">
      <div className="w-full flex flex-col gap-4 items-center glassmorphism px-6 py-16">
        <h2 className="text-sm sm:text-lg font-inter text-orange-500 font-semibold">
          YIELDMASTER PRO
        </h2>

        <h1 className="text-4xl sm:text-6xl font-inter font-medium text-center">
          {messages.title1} <br /> {messages.title2}
        </h1>

        <p className="text-sm sm:text-base font-lato text-primary tracking-wide max-w-lg mt-4 text-center">
          {messages.desc}
        </p>

        <div className="px-6 py-2 bg-blue rounded-sm text-white text-xs font-inter font-semibold tracking-wide hidden">
          {messages.sale}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#7C81AD] dark:text-blue-200 mt-6">
          $199/yr
        </h1>

        <Link href="/signup" className="contained px-6 py-3">
          {messages.freeTrail}
        </Link>

        {/*<Link href="/pricing/checkout" className="btn-primary">
          {messages.subscribe}
        </Link>*/}
      </div>
    </section>
  );
};

export const dynamic = "force-dynamic";
export default Pricing;
