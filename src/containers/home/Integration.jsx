import { CardItem, Typography } from "@/components";

const Integration = () => {
  return (
    <>
      <section id="integration" className="grid justify-center px-5 gap-10 py-14 md:px-10 md:gap-20 md:my-20 md:py-20">
        <Typography variant="h1">Integration</Typography>
        <div className="flex flex-wrap justify-center gap-10">
          <CardItem>
            <div>
              {" "}
              <Typography variant="h2">JavaScript</Typography>
            </div>
            <div className="py-5">
              {" "}
              <Typography variant="p">
                Make a Post Request Manually to Your Form Url, and Send Request
                Body, if you have any other Side Effects to carry out on form
                submission.
              </Typography>
            </div>
          </CardItem>
          <CardItem>
            <div>
              {" "}
              <Typography variant="h2">HTML Forms</Typography>
            </div>
            <div className="py-5">
              {" "}
              <Typography variant="p">
                Add Your Form Url to Your HTML form action, and set the method
                to post.
              </Typography>
            </div>
          </CardItem>
        </div>
      </section>
    </>
  );
};

export default Integration;
