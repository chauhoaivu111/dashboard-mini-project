"use client";
import { Context } from "../components/AuthProvider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

export default function defaultDashboard() {
  const { user } = Context();
  return (
    <Stack direction="row" sx={{ padding: "50px" }}>
      <Chip icon={<FaceIcon />} label={user} />
    </Stack>
  );
}
