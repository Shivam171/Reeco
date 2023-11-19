import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  width: 550px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .close-btn {
    position: relative;
    transform: translateX(260px);
    color: #444;
    font-size: 18px;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  p {
    color: #444;
  }
`;

const UpdateItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 20px;

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }

  //----------Edit Price -------------
  .edit-price {
    display: flex;
    gap: 100px;
    align-items: center;
  }

  .input-edit {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    position: relative;
    transform: translateX(-10px);
  }

  .input-edit input {
    outline: none;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 7px 10px;
    width: 60px;
    background-color: #fdfdfd;
  }

  .input-edit input::placeholder {
    color: #444;
    text-align: center;
  }

  // --------- Edit Quantity -----------
  .edit-quantity {
    display: flex;
    gap: 100px;
    align-items: center;
  }

  .edit-quant-input {
    position: absolute;
    transform: translateX(110px);
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
  }

  .edit-quant-input .updateIcon {
    color: #fff;
    background-color: #18c959;
    border-radius: 50%;
    font-size: 15px;
    font-weight: bold;
    padding: 3.5px;
    cursor: pointer;
  }

  .edit-quant-input input {
    outline: none;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 7px 10px;
    width: 60px;
    background-color: #fdfdfd;
  }

  .edit-quant-input input::placeholder {
    color: #444;
    text-align: center;
  }

  //------------Edit Total---------------
  .edit-total {
    margin-top: 8px;
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: space-between;
  }

  .total-price {
    transform: translateX(-70px);
    font-size: 13px;
    color: #444;
  }
`;

const Reason = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .para {
    justify-content: start;
    display: flex;
    align-items: center;
  }

  .para > small {
    color: #444;
    margin-left: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const OptionBtns = styled.div`
  display: flex;
  gap: 10px;

  input[type="button"] {
    padding: 8px 10px;
    background-color: #fff;
    outline: none;
    color: #444;
    border: 2px solid #e0e0e0;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const EndBtns = styled.div`
  display: flex;
  justify-content: end;
  gap: 6px;

  button {
    padding: 8px 20px;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .cancel {
    color: #1e633f;
    font-weight: bold;
  }

  .send {
    color: #fff;
    background-color: #1e633f;
    font-weight: bold;
  }
`;

const EditPopUp = ({ show = false, onClose }) => {
  return (
    <>
      {show && (
        <ModalContainer>
          <ModalContent>
            <CloseOutlinedIcon className="close-btn" onClick={onClose} />
            <Title>
              <h3>
                Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw,
                Invivid...
              </h3>
              <p>American Roland</p>
            </Title>
            <UpdateItem>
              <div className="item-img">
                <img
                  src="/src/assets/Avocado Hass.jpg"
                  alt="item"
                  height="150"
                />
              </div>
              <div className="item-info">
                <div className="edit-price">
                  <p>Price ($)</p>
                  <div className="input-edit">
                    <input type="text" placeholder="9999.99" />
                    <p>/6 * 1LB</p>
                  </div>
                </div>
                <div className="edit-quantity">
                  <p>Quantity</p>
                  <div className="edit-quant-input">
                    <RemoveIcon className="updateIcon" />
                    <input type="text" placeholder="9998" />
                    <AddIcon className="updateIcon" />
                    <p>
                      <small>x</small> /6 * 1LB
                    </p>
                  </div>
                </div>
                <div className="edit-total">
                  <p>Total</p>
                  <p className="total-price">$9,997,000.02</p>
                </div>
              </div>
            </UpdateItem>
            <Reason>
              <div className="para">
                <p>
                  <strong>Choose reason</strong>
                </p>
                <small> (Optional)</small>
              </div>
              <form action="#">
                <OptionBtns>
                  <input type="button" name="options" value="Missing product" />
                  <input
                    type="button"
                    name="options"
                    value="Quantity is not the same"
                  />
                  <input
                    type="button"
                    name="options"
                    value="Price is not the same"
                  />
                  <input type="button" name="options" value="Other" />
                </OptionBtns>
                <EndBtns>
                  <button type="reset" className="cancel">
                    Cancel
                  </button>
                  <button type="submit" className="send">
                    Send
                  </button>
                </EndBtns>
              </form>
            </Reason>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default EditPopUp;
