import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constant";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hasScroll, setHasScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      setActive("");
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        setActive("");
      });
    };
  }, []);

  const nav = navLinks.map((link) => {
    return (
      <div
        key={link.id}
        onClick={() => {
          setActive(link.title);
        }}
        className={`flex flex-col  ${
          active === link.title
            ? "text-[#FB4C47] font-extrabold  "
            : "text-[#035755] "
        }`}
      >
        <a
          className={`${active !== "link.title" ? "pb-2" : ""}`}
          href={`#${link.id}`}
        >
          {link.title}
        </a>
        <div
          className={`bg-[#fb4c47] w-2 h-2 rounded-full  self-center ${
            active === link.title ? "flex" : "hidden"
          }`}
        />
      </div>
    );
  });

  return (
    <>
      <nav
        className={`flex justify-between  w-full px-10 py-6  
        `}
      >
        <div className="flex items-center gap-2 font-extrabold">
          <Link
            to={"/"}
            id="logo"
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src="/assets/logo.png" alt="logo" />
            <span className="font-caveat font-extrabold text-[36px] hidden lg:flex cursor cursor-pointer">
              COVID-19
            </span>
          </Link>
        </div>

        <div className="w-fit gap-8 items-center hidden lg:flex">{nav}</div>

        {/* burger and close button (for mobile) */}
        <div
          className="h-8 w-8 flex self-center lg:hidden "
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <RxCross2 className="h-8 w-8 flex self-center lg:hidden " />
          ) : (
            <RxHamburgerMenu className="h-8 w-8 flex self-center lg:hidden " />
          )}
        </div>
      </nav>
      {/* menu modal */}
      {open && (
        <div className=" fixed top-20 z-[30] right-2 ">
          <div className="bg-white p-3 w-[150px] h-[320px] flex-col border-white border-[2px] shadow-lg rounded-3xl gap-4">
            {navLinks.map((nav) => (
              <div
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer p-2 my-4 text-[16px] ${
                  active === nav.title
                  ? "text-[#FB4C47] font-extrabold  "
                  : "text-[#035755] "
                }`}
                onClick={() => {
                  setOpen(!open);
                  setActive(nav.id);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };
