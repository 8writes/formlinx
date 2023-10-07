import { ButtonItem, Typography } from "@/components";

const Hero = () => {
  return (
    <>
      <section className="bg-white py-28 md:py-10">
        <div className="flex justify-center ">
          <div className="grid gap-5 md:gap-10 justify-items-center text-center py-5 md:py-10 px-5 md:px-10">
            <div className="max-w-5xl ">
              <Typography variant="h1">
                &lt;{" "}
                <span id="htmlText" className=" text-orange-600">
                  {" "}
                  HTML
                </span>{" "}
                forms, but they actually work.
                <span className="text-orange-600"> / </span>
                &gt;
              </Typography>
            </div>
            <div className="max-w-3xl py-7">
              <Typography variant="h2">
                Build your form. Submit to our
                <span id="apiText" className="text-purple-800">
                  {" "}
                  API
                </span>
                . <br></br> We will handle the rest.
              </Typography>
            </div>
            <div>
              <ButtonItem variant="animation" linkSrc={"#integration"}>
                Get Started
              </ButtonItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
