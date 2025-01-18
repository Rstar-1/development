"use client";

import dynamic from "next/dynamic";
import Banner from "../../../components/ui/Banner";
import {
  paginationactivity,
  paginationnotactivity,
  paginationplusactivity,
  statusmine,
  deletemine,
} from "../../../redux/mine/MineSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../../../components/ui/Search";
import Loader from "../../../components/ui/Loader";
import Sidebar from "../../../components/ui/Sidebar";
import Edit from "../../components/edit/Edit";

const Table = dynamic(() => import("../../../components/ui/Table"), {
  ssr: false,
});

const LeftSide = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state?.minedata?.activitydata?.activitystore
  );
  const getdata2 = useSelector(
    (state) => state?.minedata?.activitypdata?.activitypstore
  );
  const getdata3 = useSelector(
    (state) => state?.minedata?.activityndata?.activitynstore
  );
  const totalCount = useSelector(
    (state) => state?.minedata?.activitydata?.totalCount
  );
  const totalCount2 = useSelector(
    (state) => state?.minedata?.activitypdata?.totalCount
  );
  const totalCount3 = useSelector(
    (state) => state?.minedata?.activityndata?.totalCount
  );
  // Redux State

  // Pagination and Search
  const [check, setcheck] = useState(1);
  const [currentpage, setcurrentpage] = useState(0);
  const [currentpage2, setcurrentpage2] = useState(0);
  const [currentpage3, setcurrentpage3] = useState(0);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  // Pagination and Search

  // Pagination and Search Function
  const handlePageClick = (e) => {
    setcurrentpage(e.selected);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setcurrentpage(0);
  };
  const handlePageClick2 = (e) => {
    setcurrentpage2(e.selected);
  };
  const handleSearchChange2 = (e) => {
    setSearch2(e.target.value);
    setcurrentpage2(0);
  };
  const handlePageClick3 = (e) => {
    setcurrentpage3(e.selected);
  };
  const handleSearchChange3 = (e) => {
    setSearch3(e.target.value);
    setcurrentpage3(0);
  };
  // Pagination and Search Function

  // API useEffect
  useEffect(() => {
    dispatch(
      paginationactivity({
        offset: currentpage * 6,
        search,
        pagination: true,
      })
    );
    dispatch(
      paginationplusactivity({
        offset: currentpage2 * 6,
        search: search2,
        pagination: true,
      })
    );
    dispatch(
      paginationnotactivity({
        offset: currentpage3 * 6,
        search: search3,
        pagination: true,
      })
    );
  }, [
    dispatch,
    currentpage,
    currentpage2,
    currentpage3,
    search,
    search2,
    search3,
  ]);
  // API useEffect

  // Define Header
  const columns = useMemo(
    () => [
      { field: "title", header: "Title" },
      { field: "reason", header: "Reason" },
      { field: "realamount", header: "Real Amount" },
      { field: "payment", header: "Payment" },
      { field: "status", header: "Status" },
      { field: "action", header: "Actions" },
    ],
    []
  );
  const columns2 = useMemo(
    () => [
      { field: "title", header: "Title" },
      { field: "realamount", header: "Real Amount" },
      { field: "reason", header: "Reason" },
      { field: "payment", header: "Payment" },
      { field: "action", header: "Actions" },
    ],
    []
  );
  const handleDelete = async (row) => {
    try {
      let resultAction;
      resultAction = await dispatch(deletemine(row?._id));
      if (deletemine.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(
          paginationactivity({
            offset: currentpage * 6,
            search,
          })
        );
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const handlePublish = async (id, newstatus) => {
    try {
      const data = {
        status: newstatus,
      };
      await dispatch(statusmine({ id, data }));
      dispatch(paginationactivity({ offset: currentpage * 6, search }));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  // Delete Data

  // Handle Edit
  const EditInput = [
    {
      label: "Title",
      category: "Input",
      name: "title",
    },
    {
      label: "Category",
      category: "Input",
      name: "category",
    },
    {
      label: "Reason",
      category: "Input",
      name: "reason",
    },
    {
      label: "Payment",
      category: "Input",
      name: "payment",
    },
    {
      label: "Realamount",
      category: "Input",
      name: "realamount",
    },
    {
      label: "Status",
      category: "Switch",
      name: "status",
    },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [editshow, seteditshow] = useState();
  const openSide = () => {
    setSidebar(true);
  };
  const closeSide = () => {
    setSidebar(false);
  };
  const handleEdit = (row) => {
    seteditshow(row);
    openSide();
  };
  return (
    <div>
      <Sidebar
        isOpen={sidebar}
        onClose={closeSide}
        size="sm"
        title="Add Activity"
      >
        <Edit EditInputs={EditInput} cat="Activity" editshow={editshow} />
      </Sidebar>
      <Banner Title="Activity" Route="Mine" Original="Activity" />
      <div className="flex items-center mtpx16">
        <p
          className={`${
            check === 1 ? "tab-primary textprimary" : "textgray"
          } fsize15 px20 cursor-pointer`}
          onClick={() => setcheck(1)}
        >
          Live Data
        </p>
        <p
          className={`${
            check === 2 ? "tab-primary textprimary" : "textgray"
          } fsize15 px20 cursor-pointer`}
          onClick={() => setcheck(2)}
        >
          Credit
        </p>
        <p
          className={`${
            check === 3 ? "tab-primary textprimary" : "textgray"
          } fsize15 px20 cursor-pointer`}
          onClick={() => setcheck(3)}
        >
          Debit
        </p>
      </div>
      {check === 1 ? (
        <>
          <div className="mtpx26 flex items-center w-full">
            <div className="w-50">
              <Search search={search} change={handleSearchChange} />
            </div>
          </div>
          <div className="rounded-5 overflow-hidden mtpx16">
            <Table
              value={getdata}
              columns={columns}
              onEdit={handleEdit}
              onDelete={handleDelete}
              handlePublish={handlePublish}
            />
          </div>
          <div className="flex w-full justify-end mtpx12">
            <ReactPaginate
              className="pagination"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={Math.ceil(totalCount / 6)}
              onPageChange={handlePageClick}
              pageRangeDisplayed={6}
              renderOnZeroPageCount={null}
              forcePage={currentpage}
              aria-label="Pagination Navigation"
            />
          </div>
        </>
      ) : null}
      {check === 2 ? (
        <>
          <div className="mtpx26 flex items-center w-full">
            <div className="w-50">
              <Search search={search2} change={handleSearchChange2} />
            </div>
          </div>
          <div className="rounded-5 overflow-hidden mtpx16">
            <Table
              value={getdata2}
              columns={columns2}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
          <div className="flex w-full justify-end mtpx12">
            <ReactPaginate
              className="pagination"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={Math.ceil(totalCount2 / 6)}
              onPageChange={handlePageClick2}
              pageRangeDisplayed={6}
              renderOnZeroPageCount={null}
              forcePage={currentpage2}
              aria-label="Pagination Navigation"
            />
          </div>
        </>
      ) : null}
      {check === 3 ? (
        <>
          <div className="mtpx26 flex items-center w-full">
            <div className="w-50">
              <Search search={search3} change={handleSearchChange3} />
            </div>
          </div>
          <div className="rounded-5 overflow-hidden mtpx16">
            <Table
              value={getdata3}
              columns={columns2}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
          <div className="flex w-full justify-end mtpx12">
            <ReactPaginate
              className="pagination"
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageCount={Math.ceil(totalCount3 / 6)}
              onPageChange={handlePageClick3}
              pageRangeDisplayed={6}
              renderOnZeroPageCount={null}
              forcePage={currentpage3}
              aria-label="Pagination Navigation"
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default LeftSide;
