import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos os direitos reservados © "}
      <Link color="inherit" href="https://www.pmerechim.rs.gov.br/">
        PM Erechim
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
