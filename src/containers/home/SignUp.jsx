import { ButtonItem, Typography } from "@/components";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <section className="bg-white flex justify-center py-10 my-10">
        <div className="grid gap-10 justify-items-center">
          <div className="text-center">
            <Typography variant="h2">Ready to get started ?</Typography>
            <div className="py-2">
              <Typography variant="p">Grab your form_ID.</Typography>
            </div>
          </div>
          <div>
            <ButtonItem linkSrc={"https://formlinx.onrender.com/signup"}>
              Get started
            </ButtonItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
