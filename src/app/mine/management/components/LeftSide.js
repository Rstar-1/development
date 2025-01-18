"use client";

import dynamic from "next/dynamic";
import Banner from "../../../components/ui/Banner";
import {
  paginationmanage,
  paginationnotmanage,
  paginationplusmanage,
  statusmine,
  deletemine,
} from "../../../redux/mine/MineSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../../../components/ui/Search";
import Loader from "../../../components/ui/Loader";

const Table = dynamic(() => import("../../../components/ui/Table"), {
  ssr: false,
});

const LeftSide = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state?.minedata?.managedata?.managestore
  );
  const getdata2 = useSelector(
    (state) => state?.minedata?.managepdata?.managepstore
  );
  const getdata3 = useSelector(
    (state) => state?.minedata?.managendata?.managenstore
  );
  const totalCount = useSelector(
    (state) => state?.minedata?.managedata?.totalCount
  );
  const totalCount2 = useSelector(
    (state) => state?.minedata?.managepdata?.totalCount
  );
  const totalCount3 = useSelector(
    (state) => state?.minedata?.managendata?.totalCount
  );
  const { loading, error } = useSelector((state) => state?.minedata);
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
      paginationmanage({
        offset: currentpage * 6,
        search,
        pagination: true,
      })
    );
    dispatch(
      paginationplusmanage({
        offset: currentpage2 * 6,
        search: search2,
        pagination: true,
      })
    );
    dispatch(
      paginationnotmanage({
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
      { field: "realamount", header: "Real Amount" },
      { field: "reason", header: "Reason" },
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
          paginationmanage({
            offset: currentpage * 6,
            search,
          })
        );
        window.location.reload();
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
      dispatch(paginationmanage({ offset: currentpage * 6, search }));
      window.location.reload();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  // Delete Data

  // Loading and Error
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-100 bgwhite z-50 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div className="flex justify-center items-center h-100">Error</div>;
  }
  // Loading and Error

  // Handle Edit
  const handleEdit = (row) => {
    console.log("Edit row:", row);
  };
  return (
    <div>
      <Banner Title="Manage" Route="Mine" Original="Manage" />
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
