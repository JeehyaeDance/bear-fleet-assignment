import { Circle, CircleOutlined } from "@mui/icons-material";

type Props = {
  isOnline: boolean;
};

export function StatusIcon({ isOnline }: Props) {
  return isOnline ? <Circle color="success" /> : <CircleOutlined />;
}
