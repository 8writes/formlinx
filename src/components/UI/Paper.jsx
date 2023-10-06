import Paper from "@mui/material/Paper";

const PaperItem = ({ children }) => {
  return (
    <>
      <div >
        <Paper className="bg-gray-100" elevation={16}>{children}</Paper>
      </div>
    </>
  );
};

export default PaperItem;
