import {
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const FILTERS = [
  { value: "all-locations", label: "All Locations" },
  { value: "starred", label: "Starred" },
];

export const DEFAULT_FILTER = FILTERS[0].value;

type Props = {
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
};

export function LocationsFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onChange={onChange}>
      {FILTERS.map((item) => (
        <MenuItem value={item.value} key={item.value}>
          <ListItemText primary={item.label} />
        </MenuItem>
      ))}
    </Select>
  );
}
