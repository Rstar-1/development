import React from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";

const Table = ({
  value,
  columns,
  onEdit,
  onDelete,
  tableStyle,
  handlePublish,
}) => {
  if (value?.length === 0) return <p>No data available</p>;

  const renderHeaders = () => {
    return columns.map((col, index) => {
      if (col.header === "Actions") {
        return (
          <th key={index} className="fsize15 textwhite font-300 table-colsm">
            {col.header}
          </th>
        );
      }
      if (col.header === "Image") {
        return (
          <th key={index} className="fsize15 textwhite font-300 table-colsm">
            {col.header}
          </th>
        );
      }
      if (col.header === "Real Amount") {
        return (
          <th key={index} className="fsize15 textwhite font-300 table-colsm">
            {col.header}
          </th>
        );
      }
      if (col.header === "Payment") {
        return (
          <th key={index} className="fsize15 textwhite font-300 table-colsm">
            {col.header}
          </th>
        );
      }
      if (col.header === "Status") {
        return (
          <th key={index} className="fsize15 textwhite font-300 table-colsm">
            {col.header}
          </th>
        );
      }
      return (
        <th key={index} className="fsize15 textwhite font-500 table-collg">
          {col.header}
        </th>
      );
    });
  };

  const renderRows = () => {
    return value?.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((col, cellIndex) => {
          if (col.field === "action") {
            return (
              <td key={cellIndex} className="table-colsm">
                <FeatherIcon
                  size={16}
                  icon="edit"
                  className="textgray cursor-pointer"
                  onClick={() => onEdit(row)}
                />
                <FeatherIcon
                  size={16}
                  icon="trash-2"
                  className="textdanger cursor-pointer mlpx5"
                  onClick={() => onDelete(row)}
                />
              </td>
            );
          }
          if (col.field === "image") {
            return (
              <td key={cellIndex} className="table-colsm">
                <Image src={row[col.field]} alt="logo" className="nav_logo" />
              </td>
            );
          }
          if (col.field === "realamount") {
            return (
              <td
                key={cellIndex}
                className="fsize15 textgray font-500 table-colsm"
              >
                {row[col.field]}
              </td>
            );
          }
          if (col.field === "payment") {
            return (
              <td
                key={cellIndex}
                className="fsize15 textgray font-500 table-colsm"
              >
                {row[col.field]}
              </td>
            );
          }
          if (col.field === "status") {
            return (
              <td key={cellIndex} className="table-colsm">
                <label className="toggle-switch mx-auto flex">
                  <input
                    type="checkbox"
                    checked={row[col.field]}
                    onChange={() => handlePublish(row._id, !row[col.field])}
                  />
                  <span className="tog_slider"></span>
                </label>
              </td>
            );
          }
          return (
            <td
              key={cellIndex}
              className="fsize15 textgray font-500 table-collg"
            >
              {row[col.field]}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="table-w rounded-5">
      <table className="w-full" style={tableStyle}>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
