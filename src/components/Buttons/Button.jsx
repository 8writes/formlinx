import Button from "@mui/material/Button";

const ButtonItem = ({ children, linkSrc, variant }) => {
let className = "";

  switch (variant) {
    case "animation":
      className = "bg-purple-800 hover:bg-orange-600";
      break;
    case "normal":
      className = "bg-purple-800 hover:bg-purple-800";
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
        variant="contained"
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
