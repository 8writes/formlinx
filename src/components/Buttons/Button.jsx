import Button from "@mui/material/Button";

const ButtonItem = ({ children, linkSrc, variant }) => {
let className = "";

  switch (variant) {
    case "animation":
      className = "";
      break;
    case "normal":
      className = "";
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
        color="secondary"
        size="large"
        className={className}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonItem;
