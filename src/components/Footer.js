const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

const Footer = () => {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <span className="text-gray-900">CuciKereta.my</span>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <span
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <span className="text-center mt-12 font-normal !text-gray-700">
          &copy; {CURRENT_YEAR} Made by The Team.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
