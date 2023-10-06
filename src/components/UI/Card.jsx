import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardItem = ({ children }) => {
  return (
    <>
      <Card
        className="transition ease-in-out delay-150 md:hover:-translate-y-3"
        sx={{ maxWidth: 375 }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default CardItem;
