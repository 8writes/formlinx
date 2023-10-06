import Link from "next/link";
import { Typography } from "@/components";

const Footer = () => {
  return (
    <>
      <section className="flex justify-center my-10">
        <Typography variant="p.medium">Copyright © 2023 Formlinx.</Typography>
        <Typography variant="p.medium">
          &nbsp; Page by <Link href="https://twitter.com/8mmnuel">eight.</Link>{" "}
        </Typography>
      </section>
    </>
  );
};

export default Footer;
