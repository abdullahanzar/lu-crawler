import { Card, CardHeader, Chip, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Filter({ items, setItems, allItems }) {
  const [filters, setFilter] = useState([]);
  const filterBy = [
    "Question Paper",
    "Midsem Question Paper",
    "Notes",
    "Forms",
    "News",
    "Books",
    "BCA",
    "MCA",
    "B.Tech",
    "M.Tech",
    "B.Com.",
    "B.A.",
    "Law",
    "Others",
  ];
  useEffect(() => {
    if (filters.length === 0) {
      setItems(allItems);
      return;
    }

    const lowerCaseFilters = filters.map((filter) =>
      filter.toLowerCase().replace(/\./g, "")
    );

    const filteredItems = allItems.filter((item) => {
      const itemProps = [item.type, item.course, item.name].map((prop) =>
        prop.toLowerCase().replace(/\./g, "")
      );

      return lowerCaseFilters.some((filter) => itemProps.includes(filter));
    });

    setItems(filteredItems);
  }, [filters, allItems, setItems]);

  return (
    <Stack alignItems={"center"}>
      <Card sx={{ maxWidth: "85%" }}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          sx={{ m: 2 }}
          flex
          flexWrap={"wrap"}
        >
          {filterBy.map((filter, index) => {
            return (
              <Chip
                key={index}
                style={
                  filters.includes(filter.toLowerCase().replace(/\./g, ""))
                    ? { margin: "10px", background: "black", color: "white" }
                    : { margin: "10px" }
                }
                label={filter}
                variant={
                  filters.includes(filter.toLowerCase().replace(/\./g, ""))
                    ? "filled"
                    : "outlined"
                }
                clickable
                onClick={() => {
                  setFilter((prev) => {
                    const lowercaseAndSymbolRemoved = filter
                      .toLowerCase()
                      .replace(/\./g, "");
                    if (prev.includes(lowercaseAndSymbolRemoved)) {
                      return prev.filter(
                        (item) => item !== lowercaseAndSymbolRemoved
                      );
                    } else {
                      return [...prev, lowercaseAndSymbolRemoved];
                    }
                  });
                }}
              />
            );
          })}
        </Stack>
      </Card>
    </Stack>
  );
}
