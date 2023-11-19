import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditPopUp from "./EditPopUp";
import { useState } from "react";
import styled from "styled-components";

const StatusTag = styled.div`
  .approved {
    display: ${(props) => (props.doneClicked ? "block" : "none")};
    color: #fff;
    background-color: #3dca72;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    pointer-events: none;
    margin-left: 40px;
  }

  .missing {
    display: none;
    color: #fff;
    background-color: #db2114;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    pointer-events: none;
    margin-left: 40px;
  }

  .urgent {
    display: none;
    color: #fff;
    background-color: #f66d44;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    pointer-events: none;
    margin-left: 40px;
  }
`;

const StatusBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .edit-btn {
    margin-right: 30px;
    text-decoration: none;
    color: #444;
    font-weight: 500;
  }

  .done-btn {
    color: ${(props) => (props.doneClicked ? "#3dca72" : "#444444")};
  }
`;

const DoneIconWrapper = styled.div`
  color: ${(props) => (props.doneClicked ? "#3dca72" : "#444444")};
`;

const StatusBtns = () => {
  const [show, setShow] = useState(false);
  const [doneClicked, setDoneClicked] = useState(false);

  const handleEditClick = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleDoneClick = () => {
    setDoneClicked((prevDoneClicked) => !prevDoneClicked);
    // Add any additional logic you need
  };

  return (
    <>
      <StatusTag doneClicked={doneClicked}>
        <a href="#" className="approved">
          Approved
        </a>
        <a href="#" className="missing">
          Missing - Urgent
        </a>
        <a href="#" className="urgent">
          Missing
        </a>
      </StatusTag>
      <StatusBtn doneClicked={doneClicked}>
        <DoneIconWrapper doneClicked={doneClicked}>
          <DoneOutlinedIcon
            style={{ color: " #444444" }}
            onClick={handleDoneClick}
          />
        </DoneIconWrapper>
        <a href="#">
          <CloseOutlinedIcon style={{ color: " #444444" }} />
        </a>
        {/* Add your handleEdit function here */}
        <a href="#" className="edit-btn" onClick={handleEditClick}>
          Edit
        </a>
        <EditPopUp show={show} onClose={handleCloseModal} />
      </StatusBtn>
    </>
  );
};

export default StatusBtns;
