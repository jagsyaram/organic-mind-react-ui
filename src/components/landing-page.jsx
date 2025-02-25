import logo from "../assets/logo-organic-mind.jpg";

const LandingPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="bg-black rounded-t-lg p-6 flex items-center justify-center">
        <div className="text-white text-left">
          <h2 className="text-xl font-bold">Organic Mind</h2>
        </div>
        <div className="ml-auto">
          <img
            src={logo}
            alt="banner-logo"
            className="w-30 h-30"
          />
        </div>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Productive Mind</h2>
        <p className="text-gray-700 mb-6">
          With only the features you need, Organic Mind is customized for
          individuals seeking a stress-free way to stay focused on their goals,
          projects, and tasks.
        </p>
        <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-full mb-4">
          Get Started
        </button>
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-yellow-500">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
