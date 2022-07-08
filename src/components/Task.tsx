import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

interface ITask {
  title: string;
  description: string;
  isDone: boolean;
  date?: Date;
}

export const Task: React.FC<ITask> = ({ title, description, isDone, date }) => {
  return (
    <Container
      sx={{
        border: "1px solid #000000",
        height: "80px",
        margin: "10px 0px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight="500"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
          variant="h6"
        >
          {title}
        </Typography>
        <Typography color="GrayText">May 26, 2022</Typography>
      </Stack>
      <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {description}
      </Typography>
    </Container>
  );
};
