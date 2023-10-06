import { PaperItem, Typography } from "@/components";
import { useEffect, useState } from "react";

const Snippet = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const codeString = `
<form
    action="https://formlinx.onrender.com/api/form/{form_id}"
    method="post"
    name="emailForm"
>
    <label for="email">Your Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
    />
    <button type="submit">Submit</button>
 </form>

`;

  return (
    <>
      <section
        id="getstarted"
        className="flex sm:justify-center overflow-x-auto md:py-10"
      >
        <PaperItem>
          {/**  <span className="inline-flex w-full md:justify-end px-5 pt-5 ">
            <button onClick={handleCopyClick}>
              {isCopied ? (
                <Typography variant="h2">✅</Typography>
              ) : (
                <Typography variant="h2">📋</Typography>
              )}
            </button>
          </span> */}
          <div>
            <pre className="px-5">
              <code>{codeString}</code>
            </pre>
          </div>
        </PaperItem>
      </section>
    </>
  );
};

export default Snippet;
