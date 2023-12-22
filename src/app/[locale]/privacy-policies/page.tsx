import { useTranslations } from "next-intl";

const PrivacyPoliciesPage = () => {
  const t = useTranslations("PrivacyPolicy");

  const Keys: [
    "policy1",
    "policy2",
    "policy3",
    "policy4",
    "policy5",
    "policy6",
    "policy7",
    "policy8",
  ] = [
    "policy1",
    "policy2",
    "policy3",
    "policy4",
    "policy5",
    "policy6",
    "policy7",
    "policy8",
  ];

  return (
    <section className="w-full min-h-screen max-w-5xl px-6 sm:px-10 mx-auto pt-28">
      <h1 className="text-xl text-primary font-semibold">{t("title")}</h1>

      <div className="flex flex-col gap-6 w-full mt-6">
        {Keys.map((key, index) => (
          <div key={index} className="glassmorphism px-6 py-4 select-none">
            <h2 className="text-title text-base font-semibold font-inter mb-2">
              {t(`${key}.title`)}
            </h2>
            <p className="break-words text-sm font-medium text-lato tracking-wide leading-5 text-primary/70 ">
              {t(`${key}.content`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const dynamic = "force-dynamic";
export default PrivacyPoliciesPage;
