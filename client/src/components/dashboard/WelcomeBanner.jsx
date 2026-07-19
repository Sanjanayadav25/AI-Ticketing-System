function WelcomeBanner() {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-lg">

      <h1 className="text-4xl font-bold">
        AI Ticketing Dashboard
      </h1>

      <p className="mt-3 text-indigo-100 max-w-xl">
        Upload company knowledge, analyze employee tickets,
        generate AI-powered resolutions, and monitor your
        enterprise support system from one dashboard.
      </p>

    </div>
  );
}

export default WelcomeBanner;