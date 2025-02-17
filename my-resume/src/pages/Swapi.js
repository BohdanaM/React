import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiCharacter, clearCharacter } from "../redux/swapiSlice";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

const StarWarsInfo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { character, loading, error } = useSelector((state) => state.swapi);

  const handleFetch = () => {
    if (input.trim()) {
      dispatch(fetchSwapiCharacter(input.trim()));
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        minHeight: "100vh",
        paddingBottom: "60px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        SWAPI
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter character ID"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            marginRight: 2,
            height: "40px",
            "& .MuiInputBase-root": {
              height: "100%",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ padding: "8px 16px", fontSize: "14px", height: "40px" }}
          color="primary"
          onClick={handleFetch}
        >
          Get info
        </Button>
      </Box>

      {loading && <Typography variant="body1">Loading...</Typography>}
      {error && (
        <Typography variant="body1" sx={{ color: "red" }}>
          {error}
        </Typography>
      )}

      {character && (
        <Paper
          sx={{
            backgroundColor: "#f4f4f4",
            padding: 2,
            textAlign: "left",
            marginTop: 2,
          }}
        >
          <pre>{JSON.stringify(character, null, 2)}</pre>
        </Paper>
      )}

      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: "#f5693e",
          padding: "6px 16px",
          fontSize: "14px",
          height: "40px",
        }}
        color="secondary"
        onClick={() => dispatch(clearCharacter())}
      >
        Clear
      </Button>
    </Box>
  );
};

export default StarWarsInfo;
