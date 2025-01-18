import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addproject = createAsyncThunk(
  "project/projectregister",
  async (payload) => {
    return axios
      .post(`http://localhost:8000/api/projectregister`, payload)
      .then((res) => res.data);
  }
);
export const getallproject = createAsyncThunk(
  "project/getallproject",
  async ({ offset, search, pagination }) => {
    const response = await axios.post(
      `http://localhost:8000/api/getprojectdata`,
      {
        offset,
        search,
        pagination,
      }
    );
    return response.data;
  }
);
// export const getallproject = createAsyncThunk(
//   "project/getallproject",
//   async ({ offset, search, project }) => {
//     const response = await axios.post(`${project}/api/getprojectdata`, {
//       offset,
//       search,
//     });
//     return response.data;
//   }
// );
export const getproject = createAsyncThunk(
  "project/getprojectdata",
  async () => {
    return axios
      .get("http://localhost:8000/api/getprojectalldata")
      .then((res) => res.data);
  }
);
export const Singleproject = createAsyncThunk(
  "project/getprojectsingledata",
  async (payload) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getprojectsingledata/${payload}`,
        payload
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);
export const updateproject = createAsyncThunk(
  "project/updateprojectdata",
  async ({ id, formData }) => {
    console.log(formData, "rrrr");
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/updateprojectdata/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content type for file upload
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);
export const updateprojectstatus = createAsyncThunk(
  "seo/updateprojectstatus",
  async ({ id, data }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/updateprojectstatus/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
);
export const deleteproject = createAsyncThunk(
  "project/deleteprojectdata",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/deleteprojectdata/${id}`
      );
      console.log(response, "fred");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    project: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    builder.addCase(addproject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });

    builder.addCase(getproject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = action.payload;
      state.error = "";
    });
    builder.addCase(getproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });

    builder.addCase(getallproject.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getallproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = action.payload.projects;
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(getallproject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(Singleproject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(Singleproject.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(Singleproject.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });

    builder.addCase(updateproject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });

    builder.addCase(updateprojectstatus.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateprojectstatus.fulfilled, (state, action) => {
      state.loading = false;
      state.user = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updateprojectstatus.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });

    builder.addCase(deleteproject.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteproject.fulfilled, (state, action) => {
      state.loading = false;
      state.project = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deleteproject.rejected, (state, action) => {
      state.loading = false;
      state.project = [];
      state.error = action.error.message;
    });
  },
});

export default projectSlice.reducer;
