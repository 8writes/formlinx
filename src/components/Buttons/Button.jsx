import Button from "@mui/material/Button";

const ButtonItem = ({ children, linkSrc, variant }) => {
let className = "";

  switch (variant) {
    case "animation":
      className =
        "shadow-lg shadow-gray-500/40 px-5 py-2 bg-purple-800 text-white hover:bg-orange-600";
      break;
    case "normal":
      className =
        "shadow-lg shadow-gray-500/40  px-5 py-2 bg-purple-800 text-white hover:bg-purple-800";
      break;
  default:
      break;
  }

  return (
    <>
      <Button
        onMouseEnter={() => {
          if (variant === "animation") {
            document.getElementById("apiText").className = "text-orange-600";
            document.getElementById("htmlText").className = "text-purple-800";
          }
        }}
        onMouseLeave={() => {
          if (variant === "animation") {
            document.getElementById("apiText").className = "text-purple-800";
            document.getElementById("htmlText").className = "text-orange-600";
          }
        }}
        variant="text"
        href={linkSrc}
        size="large"
        className={className}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonItem;
