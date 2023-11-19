import styled from "styled-components";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import RiceBowlOutlinedIcon from "@mui/icons-material/RiceBowlOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import OrdersDetail from "./OrdersDetail";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrdersInfo = styled.div`
  margin-top: 30px;
  border: 2px solid #e0e0e0;
  // box-shadow: 0 1px 10px -2px #e0e0e0;
  border-radius: 8px;
  padding: 20px 30px;
  min-width: 1150px;

  .info-boxes {
    display: flex;
    justify-content: space-around;
    color: #444;
  }

  .info-boxes .box {
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    width: 150px;
    flex-wrap: wrap;
    gap: 10px;
    border-right: 2px solid #e0e0e0;
  }

  .info-boxes .box p {
    font-weight: 500;
    font-size: 13px;
  }

  .info-boxes .box1 {
    display: flex;
    padding-left: 10px;
    flex-direction: column;
    width: 150px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .info-boxes .box1 p {
    font-weight: 500;
    font-size: 13px;
  }

  .category-icon .icon-row {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
  }
`;

const BottomSection = () => {
  return (
    <Section>
      {/* OrdersInfo */}
      <OrdersInfo>
        <div className="info-boxes">
          <div className="box">
            <p>Supplier</p>
            <h3>East coast fruits & vegetables</h3>
          </div>
          <div className="box">
            <p>Shipping date</p>
            <h3 className="shipping-date">Thu, Feb 10</h3>
          </div>
          <div className="box">
            <p>Total</p>
            <h3>$ 15,028.3</h3>
          </div>
          <div className="box">
            <p>Category</p>
            <div className="category-icon">
              <div className="icon-row">
                <LiquorOutlinedIcon />
                <CakeOutlinedIcon />
                <RiceBowlOutlinedIcon />
                <SetMealOutlinedIcon />
              </div>
              <div className="icon-row">
                <SoupKitchenOutlinedIcon />
                <EggAltOutlinedIcon />
                <LocalPizzaOutlinedIcon />
                <LunchDiningOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="box">
            <p>Department</p>
            <h3>300-444-678</h3>
          </div>
          <div className="box1">
            <p>Status</p>
            <h3>Awaiting your approval</h3>
          </div>
        </div>
      </OrdersInfo>
      {/* OrdersDetail */}
      <OrdersDetail />
    </Section>
  );
};

export default BottomSection;
