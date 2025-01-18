import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const paginationmine = createAsyncThunk(
  "mine/paginationmine",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/minepaginationdata`,
        {
          offset,
          search,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationactivity = createAsyncThunk(
  "mine/paginationactivity",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/activitypaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationplusactivity = createAsyncThunk(
  "mine/paginationplusactivity",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/activitypluspaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationnotactivity = createAsyncThunk(
  "mine/paginationnotactivity",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/activitynotpaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationmanage = createAsyncThunk(
  "mine/paginationmanage",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/managepaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationplusmanage = createAsyncThunk(
  "mine/paginationplusmanage",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/managepluspaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationnotmanage = createAsyncThunk(
  "mine/paginationnotmanage",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/managenotpaginationdata`,
        {
          offset,
          search,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationstock = createAsyncThunk(
  "mine/paginationstock",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/stockpaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationplusstock = createAsyncThunk(
  "mine/paginationplusstock",
  async ({ offset, search, pagination }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/stockpluspaginationdata`,
        {
          offset,
          search,
          pagination,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationnotstock = createAsyncThunk(
  "mine/paginationnotstock",
  async ({ offset, search }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/stocknotpaginationdata`,
        {
          offset,
          search,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addmine = createAsyncThunk(
  "mine/addmine",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/mineadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlemine = createAsyncThunk(
  "mine/singlemine",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/minesingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatemine = createAsyncThunk(
  "cms/updatemine",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/mineupdatedata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const statusmine = createAsyncThunk(
  "seo/minestatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/minestatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletemine = createAsyncThunk(
  "mine/deletemine",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/minedeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const mineSlice = createSlice({
  name: "minedata",
  initialState: {
    loading: false,
    activitydata: [],
    activitypdata: [],
    activityndata: [],
    managedata: [],
    managepdata: [],
    managendata: [],
    stockdata: [],
    stockpdata: [],
    stockndata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Pagination Get Mine Data ------------------ //
    builder.addCase(paginationmine.pending, (state) => {
      state.loading = true;
      state.activitydata = [];
      state.error = "";
    });
    builder.addCase(paginationmine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationmine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Mine Data ------------------ //

    // ------------------ Pagination Get Activity Data ------------------ //
    builder.addCase(paginationactivity.pending, (state) => {
      state.loading = true;
      state.activitydata = [];
      state.error = "";
    });
    builder.addCase(paginationactivity.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationactivity.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Activity Data ------------------ //

    // ------------------ Pagination Active Get Activity Data ------------------ //
    builder.addCase(paginationplusactivity.pending, (state) => {
      state.loading = true;
      state.activitypdata = [];
      state.error = "";
    });
    builder.addCase(paginationplusactivity.fulfilled, (state, action) => {
      state.loading = false;
      state.activitypdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationplusactivity.rejected, (state, action) => {
      state.loading = false;
      state.activitypdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Active Get Activity Data ------------------ //

    // ------------------ Pagination Unactive Get Activity Data ------------------ //
    builder.addCase(paginationnotactivity.pending, (state) => {
      state.loading = true;
      state.activityndata = [];
      state.error = "";
    });
    builder.addCase(paginationnotactivity.fulfilled, (state, action) => {
      state.loading = false;
      state.activityndata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationnotactivity.rejected, (state, action) => {
      state.loading = false;
      state.activityndata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Unactive Get Activity Data ------------------ //

    // ------------------ Pagination Get Manage Data ------------------ //
    builder.addCase(paginationmanage.pending, (state) => {
      state.loading = true;
      state.managedata = [];
      state.error = "";
    });
    builder.addCase(paginationmanage.fulfilled, (state, action) => {
      state.loading = false;
      state.managedata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationmanage.rejected, (state, action) => {
      state.loading = false;
      state.managedata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Manage Data ------------------ //

    // ------------------ Pagination Active Get Manage Data ------------------ //
    builder.addCase(paginationplusmanage.pending, (state) => {
      state.loading = true;
      state.managepdata = [];
      state.error = "";
    });
    builder.addCase(paginationplusmanage.fulfilled, (state, action) => {
      state.loading = false;
      state.managepdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationplusmanage.rejected, (state, action) => {
      state.loading = false;
      state.managepdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Active Get Manage Data ------------------ //

    // ------------------ Pagination Unactive Get Manage Data ------------------ //
    builder.addCase(paginationnotmanage.pending, (state) => {
      state.loading = true;
      state.managendata = [];
      state.error = "";
    });
    builder.addCase(paginationnotmanage.fulfilled, (state, action) => {
      state.loading = false;
      state.managendata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationnotmanage.rejected, (state, action) => {
      state.loading = false;
      state.managendata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Unactive Get Manage Data ------------------ //

    // ------------------ Pagination Get Stock Data ------------------ //
    builder.addCase(paginationstock.pending, (state) => {
      state.loading = true;
      state.stockdata = [];
      state.error = "";
    });
    builder.addCase(paginationstock.fulfilled, (state, action) => {
      state.loading = false;
      state.stockdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationstock.rejected, (state, action) => {
      state.loading = false;
      state.stockdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Stock Data ------------------ //

    // ------------------ Pagination Active Get Stock Data ------------------ //
    builder.addCase(paginationplusstock.pending, (state) => {
      state.loading = true;
      state.stockpdata = [];
      state.error = "";
    });
    builder.addCase(paginationplusstock.fulfilled, (state, action) => {
      state.loading = false;
      state.stockpdata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationplusstock.rejected, (state, action) => {
      state.loading = false;
      state.stockpdata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Active Get Stock Data ------------------ //

    // ------------------ Pagination Unactive Get Stock Data ------------------ //
    builder.addCase(paginationnotstock.pending, (state) => {
      state.loading = true;
      state.stockndata = [];
      state.error = "";
    });
    builder.addCase(paginationnotstock.fulfilled, (state, action) => {
      state.loading = false;
      state.stockndata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationnotstock.rejected, (state, action) => {
      state.loading = false;
      state.stockndata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Unactive Get Stock Data ------------------ //

    // ------------------ Add Mine Data ------------------ //
    builder.addCase(addmine.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addmine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addmine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Mine Data ------------------ //

    // ------------------ Single Mine Data ------------------ //
    builder.addCase(singlemine.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlemine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlemine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Mine Data ------------------ //

    // ------------------ Edit Mine Data ------------------ //
    builder.addCase(updatemine.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatemine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatemine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Mine Data ------------------ //

    // ------------------ Edit Status Mine Data ------------------ //
    builder.addCase(statusmine.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusmine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusmine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Mine Data ------------------ //

    // ------------------ Delete Mine Data ------------------ //
    builder.addCase(deletemine.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletemine.fulfilled, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletemine.rejected, (state, action) => {
      state.loading = false;
      state.activitydata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Mine Data ------------------ //
  },
});

export default mineSlice.reducer;
