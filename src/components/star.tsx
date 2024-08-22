import { StarBorderRounded, StarRateRounded } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useFetch } from "../hooks/use-fetch";
import { useState } from "react";

type Props = {
  isStarred: boolean;
  onClick: (id: number) => void;
  locationId: number;
};

export function Star({ isStarred, onClick, locationId }: Props) {
  return (
    <Checkbox
      checked={isStarred}
      onClick={() => onClick(locationId)}
      icon={<StarBorderRounded />}
      checkedIcon={<StarRateRounded />}
    />
  );
}
