import Link from "next/link";
import Typography from "../Fonts/Typography";

const Logo = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Typography variant="h2">
            {" "}
            <span className="text-orange-600">Form</span>
            <span className="text-purple-800">linx</span>
          </Typography>{" "}
        </Link>
        <Typography variant="p.medium">
          by <Link href="/">CODELLINS </Link>
        </Typography>
      </div>
    </>
  );
};

export default Logo;
