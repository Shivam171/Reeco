import styled from "styled-components";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StatusBtns from "./StatusBtns";

const Section = styled.div`
  margin-top: 30px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px 30px;
  min-width: 1150px;
  margin-bottom: 20px;
`;

const SearchAndAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search-bar {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .search-bar #search {
    width: 400px;
    border: 2px solid #e0e0e0;
    padding: 10px 20px;
    border-radius: 20px;
    outline: none;
    color: #444;
  }

  #search::placeholder {
    color: #444;
  }

  .addItem {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .addItem .addItem-btn {
    color: #1e633f;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    border: 1.5px solid #1e633f;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
  }
`;

const OrderTable = styled.div`
  table {
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px 30px;
    min-width: 1150px;
    margin-bottom: 5px;
  }

  table td {
    padding: 0.5rem;
    white-space: unset;
    text-align: center;
    max-width: 10px;
    font-size: 13px;
    border-bottom: 2px solid #e0e0e0;
  }

  table th {
    padding: 0.5rem;
    text-align: center;
    font-weight: normal;
  }

  table thead {
    border: 2px solid #e0e0e0;
    border-radius: 10px;
  }

  .status-cell {
    border: none;
    gap: 20px;
    font-size: 14px;
    min-width: 150px;
    background-color: #f3f3f3;
    border-bottom: 2px solid #e0e0e0;
  }

  .statusTBs {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const OrdersDetail = () => {
  return (
    <Section>
      <SearchAndAdd>
        <div className="search-bar">
          <input type="text" id="search" placeholder="Search...." />
          <SearchOutlinedIcon
            style={{
              color: "gray",
              position: "absolute",
              transform: "translateX(400px)",
            }}
          />
        </div>
        <div className="addItem">
          <a href="#" className="addItem-btn">
            Add item
          </a>
          <PrintOutlinedIcon
            style={{ color: "#1e633f", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </SearchAndAdd>
      <OrderTable>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quality</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="/src/assets/Avocado Hass.jpg"
                  alt="product"
                  height="60px"
                />
              </td>
              <td>
                Chicken Breast Fillets, Boneless matuu maMarinated 6 Once Raw,
                Invivid
              </td>
              <td>Hormel Black Labelmany</td>
              <td>$60.67 / 6*1LB</td>
              <td>
                <strong>0</strong> X 6 * 1LB
              </td>
              <td>0</td>
              <td className="status-cell">
                <div className="statusTBs">
                  <StatusBtns />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </OrderTable>
    </Section>
  );
};

export default OrdersDetail;
