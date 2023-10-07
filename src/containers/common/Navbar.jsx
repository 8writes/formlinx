import {  Logo, Typography } from "@/components";
import Card from "@mui/material/Card";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="hidden md:block ">
        <div className="flex justify-between p-5 md:p-10">
          <Logo />

          <div className="fixed right-14 top-10">
            <Card className="px-7 py-3 bg-gray-100" >
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
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
