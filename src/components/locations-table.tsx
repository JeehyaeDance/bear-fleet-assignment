import styled from "@emotion/styled";
import { Button, Checkbox, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import { Location } from "../mocks/db";
import { StatusIcon } from "./status-icon";
import { useFetch } from "../hooks/use-fetch";
import { Star } from "./star";
import { useEffect, useState } from "react";

type Props = {
  data: Location[];
};

const RobotRowWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const NameRowWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeaderWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export function LocationsTable({ data }: Props) {
  const { data: res } = useFetch<{ location_ids: number[] }>(
    "/starred_location_ids",
    "GET",
  );

  const [locationStarIds, setLocationStarIds] = useState<number[]>([]);

  useEffect(() => {
    if (res) {
      setLocationStarIds(res.location_ids);
    }
  }, [res]);

  const dataWithStars = data.map((item) => ({
    ...item,
    isStarred: locationStarIds.includes(item.id),
  }));

  const onClickStar = (id: number) => {
    let newStarIds = [...locationStarIds];

    if (newStarIds.includes(id)) {
      newStarIds = newStarIds.filter((num) => num !== id);
    } else {
      newStarIds = [...newStarIds, id];
    }

    setLocationStarIds(newStarIds);

    fetch("/starred_location_ids", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStarIds),
    });
  };

  const columns: GridColDef[] = [
    {
      field: "actions",
      type: "actions",
      width: 86,
      getActions: (params) => [
        <Checkbox />,
        <Star
          locationId={params.row.id}
          isStarred={locationStarIds.includes(params.row.id)}
          onClick={onClickStar}
        />,
      ],
    },
    {
      field: "name",
      headerName: "Locations",
      flex: 1,
      renderHeader: (params) => (
        <HeaderWrapper>{params.colDef.headerName}</HeaderWrapper>
      ),
      renderCell: (params) => (
        <NameRowWrapper>
          {params.row.robot ? (
            <Button
              sx={{ borderRadius: "8px" }}
              disableElevation
              fullWidth
              variant="contained"
            >
              <Typography variant="subtitle1" component="span">
                {params.value}
              </Typography>
            </Button>
          ) : (
            <Button
              sx={{ borderRadius: "8px" }}
              disableElevation
              fullWidth
              disabled
            >
              <Typography>{params.value}</Typography>
            </Button>
          )}
        </NameRowWrapper>
      ),
    },
    {
      field: "robot",
      headerName: "Robots",
      flex: 1,
      renderHeader: (params) => (
        <HeaderWrapper>{params.colDef.headerName}</HeaderWrapper>
      ),
      renderCell: (params) => (
        <RobotRowWrapper>
          {params.value ? (
            <>
              <StatusIcon isOnline={params.value.is_online} />
              <Typography variant="subtitle1" component="span">
                {params.value.id}
              </Typography>
            </>
          ) : (
            <Link variant="body1" href="#">
              Add
            </Link>
          )}
        </RobotRowWrapper>
      ),
    },
  ];

  return <DataGrid rows={dataWithStars} columns={columns} />;
}
