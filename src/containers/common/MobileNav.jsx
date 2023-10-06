import { ButtonItem, Logo, Typography } from "@/components";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Define the action component
  const action = (
    <div className="fixed right-10 top-20">
      <ButtonItem variant="normal">
        <Link
          className="hover:text-orange-300"
          href="https://formlinx.onrender.com/login"
        >
          <Typography variant="p.medium">Login</Typography>
        </Link>
        &nbsp; &#47; &nbsp;
        <Link
          className="hover:text-orange-300"
          href="https://formlinx.onrender.com/signup"
        >
          <Typography variant="p.medium">Sign Up</Typography>
        </Link>
      </ButtonItem>
    </div>
  );

  return (
    <>
      <section className="flex md:hidden bg-white ">
        <div className="flex w-full fixed z-10 bg-slate-50 justify-between p-5 md:p-10">
          <Logo />
          <div>
            {!open ? (
              <MenuIcon
                className="text-gray-900"
                onClick={handleClick}
                fontSize="large"
              />
            ) : (
              <CloseIcon
                className="text-gray-900"
                onClick={handleClose}
                fontSize="large"
              />
            )}
            <Snackbar open={open} onClose={handleClose}>
              {action}
            </Snackbar>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileNavbar;
