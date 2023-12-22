import { useTranslations } from "next-intl"

const TermsOfUsePage = () => {
  const t = useTranslations('Tos')

  const phrases: [
    "phase1",
    "phase2",
    "phase3",
    "phase4",
    "phase5",
    "phase6",
    "phase7",
    "phase8"
  ] = [
    "phase1",
    "phase2",
    "phase3",
    "phase4",
    "phase5",
    "phase6",
    "phase7",
    "phase8"
  ]

  return (
      <section className='w-full min-h-screen  max-w-5xl px-6 sm:px-10 mx-auto z-10 pt-28 relative'>
        <h1 className='text-xl text-primary font-semibold'>
          {t('title')}
        </h1>

        <div className='flex flex-col gap-6 w-full mt-6'>
          {phrases.map(
            (phase, key) => (
              <div className='glassmorphism px-6 py-4'>
                <p className='text-sm font-medium text-lato tracking-wide leading-5 first-letter:text-orange text-primary/70 first-letter:text-3xl first-letter:font-bold select-none'>
                  {t(phase)}
                </p>
              </div>
            )
          )}
        </div>


      </section>
  )
}

export const dynamic = 'force-dynamic'
export default TermsOfUsePage