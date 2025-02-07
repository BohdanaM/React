import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSwapiCharacter = createAsyncThunk(
  "swapi/fetchCharacter",
  async (characterId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/${characterId}/`
      );
      if (!response.ok) throw new Error("Character not found");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    character: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCharacter: (state) => {
      state.character = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiCharacter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.character = null;
      })
      .addCase(fetchSwapiCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.character = action.payload;
      })
      .addCase(fetchSwapiCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCharacter } = swapiSlice.actions;
export default swapiSlice.reducer;
