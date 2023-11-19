import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = styled.div`
  background-color: #1e633f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px 75px;

  .navigate {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navigate ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    gap: 50px;
  }

  .navigate ul li a {
    text-decoration: none;
    color: #fff;
  }

  .cartUser {
    display: flex;
    width: 12em;
    justify-content: space-between;
    align-items: center;
  }

  .cart-icon {
    position: relative;
    cursor: pointer;
  }

  .cartUser .user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cartUser .user p {
    margin-right: 3px;
  }
`;

const HeadToOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 75px;
  box-shadow: 0 2px 10px -4px gray;

  .top {
    color: #444;
    display: flex;
    gap: 10px;
    font-size: 14px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .bottom-left h2 {
    color: #444;
  }
  .bottom-right {
    display: flex;
    gap: 20px;
  }

  .bottom-right .back-btn {
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

  .bottom-right .approve-btn {
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    border: 1.5px solid #1e633f;
    background-color: #1e633f;
    border-radius: 20px;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
  }
`;

const TopSection = () => {
  return (
    <>
      {/* Nav */}
      {/* HeadToOrder */}
      <header>
        <Navbar>
          <nav className="navigate">
            <img src="/src/assets/reeco-white.svg" alt="Reeco" height="25px" />
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </nav>
          <div className="cartUser">
            <img
              src="/src/assets/trolley-white.png"
              alt="cart"
              className="cart-icon"
              height="30"
            />
            <div className="user">
              <p>Hello, James</p> <KeyboardArrowDownIcon />
            </div>
          </div>
        </Navbar>
        <HeadToOrder>
          <div className="top">
            <p>Orders</p>
            <p>{`>`}</p>
            <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h2>Order 32457ABC</h2>
            </div>
            <div className="bottom-right">
              <a href="#" className="back-btn">
                Back
              </a>
              <a href="#" className="approve-btn">
                Approve order
              </a>
            </div>
          </div>
        </HeadToOrder>
      </header>
    </>
  );
};

export default TopSection;
