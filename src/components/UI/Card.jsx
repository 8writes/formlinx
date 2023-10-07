import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardItem = ({ children }) => {
  return (
    <>
      <span className="transition ease-in-out delay-150 md:hover:-translate-y-3">
        <Card sx={{ maxWidth: 375, minHeight: 250 }}>
          <CardContent>{children}</CardContent>
        </Card>
      </span>
    </>
  );
};

export default CardItem;
