import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

export default function Home() {
  const features = [
    {
      title: "Pass on the knowledge",
      subtitle:
        "Once you have learnt to make your money work for you, pass on your knowledge to friends and family. Help them in wealth creation",
    },
    {
      title: "Do your own research",
      subtitle:
        "When you have some time, do a slight research of possible coins or assets to invest into. This could be stock, real estate, cryptocurrency or commodity. Make sure any of the assets you want to invest is familiar to you.",
    },
    {
      title: "Set a benchmark",
      subtitle:
        "Determine the amount of money you can comfortably say goodbye to for 5-10 years. Find an exchange and keep sending it there at the end of each month",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Wealth Building Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven methods to grow your wealth systematically and sustainably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Track Your Progress
              </h2>
              <p className="text-gray-600 mb-6">
                Our dashboard provides real-time insights into your investment
                performance across all asset classes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Visualize your portfolio allocation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Track historical performance
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Get personalized recommendations
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/maxim-hopman.jpg"
                alt="Dashboard Preview"
                className="w-full h-auto animate-float rounded-none border-none shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 animate-fade-in">
            Ready to Start Your Wealth Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Join thousands of investors who are building their financial future
            with our platform.
          </p>
          <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg animate-slide-up">
            Get Started for Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
