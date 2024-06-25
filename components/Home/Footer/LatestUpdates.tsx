import SocialIcons from "./SocialIcons";
import AccreditedBy from "./AccreditedBy";

const LatestUpdates = () => {
  return (
    <div className="w-full">
      {/* <h3 className="text-darkBlue mb-3 text-xl font-bold">
        Get the latest updates
      </h3>

      <div className="mx-auto max-w-screen-md sm:text-center">
        <form action="#">
          <div className="items-center mx-auto mb-3 max-w-screen-sm flex">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-5 w-full text-xl font-medium text-center text-white bg-brownCust hover:bg-orangeCust rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div> */}
      <h3 className="text-darkBlue mb-1.5 text-xl font-bold">Follow us on:</h3>
      <SocialIcons />
      <AccreditedBy />
    </div>
  );
};

export default LatestUpdates;
