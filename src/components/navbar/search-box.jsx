"use client";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import React, { useState } from "react";

const filter = createFilterOptions();

function SearchBox() {
  const [value, setValue] = useState();
  const dataset = ["BCA Question Papers", "", "", ""];

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Search "${inputValue}"`,
          });
        }

        return filtered;
      }}
      className="font-playfair"
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={dataset}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{
        width: 400,
        "& .MuiAutocomplete-inputRoot": {
          backgroundColor: "transparent", // Set background color of input root to transparent
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
          padding: "3px",
          paddingX: "10px",
          borderRadius: "24px", // Increase border radius for the search box
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // Add a box shadow
        },
      }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          variant="outlined"
          className="font-playfair"
          InputProps={{ ...params.InputProps, disableUnderline: true }}
          placeholder="Search Resources"
        />
      )}
    />
  );
}

export default SearchBox;
