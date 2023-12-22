const DisclaimerPage = () => {
  return (
    <div className="min-h-screen p-8 flex justify-center items-center">
      <div className="glassmorphism h-fit max-w-screen-md px-8 py-6 border-2 border-blue-500 rounded-md">
        <h1 className="text-orange-500 text-xl font-semibold">Disclaimer:</h1>
        <p className="mt-2 text-primary text-center sm:text-justify">
          Investment Information The content provided on this website is for
          informational purposes only and should not be construed as financial
          advice or a recommendation to buy, sell, or hold any investment. The
          information presented here is based on the author's personal opinions
          and research, which may not always be accurate or complete. Before
          making any investment decisions, it is crucial to conduct your own
          research and consider seeking independent financial advice. Remember
          that past performance does not indicate future results, and the value
          of investments may fluctuate. Always be aware of the risks associated
          with investing, and carefully evaluate your financial situation and
          investment objectives before making any decisions. The website owner
          and contributors do not assume any responsibility for financial losses
          or other consequences that may result from using the information
          provided on this site. Users are encouraged to verify the accuracy of
          the information and consult with a qualified financial professional
          for personalized advice. By accessing this website, you acknowledge
          and agree that you are solely responsible for any investment decisions
          you make and that the information presented here is not a substitute
          for professional financial advice tailored to your individual
          circumstances.
        </p>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default DisclaimerPage;
