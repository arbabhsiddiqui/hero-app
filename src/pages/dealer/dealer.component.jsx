import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader/loader.component";
import Message from "../../components/message/message.component";
import { getDealer } from "../../redux/dealer/dealer.actions";

const DealerPage = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const dealerData = useSelector((state) => state.dealerData);
  const { userInfo } = userLogin;

  const { loading, error, dealer } = dealerData;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    dispatch(getDealer(Token));
  }, []);

  const Token = userInfo && userInfo.hero.access_token;

  // dispatch(getDealer(Token));

  const dealers = dealer && dealer.hero.dealer;

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <React.Fragment>
          <Row>
            {dealers &&
              dealers.map((item) => (
                <Col key={item.dealer_id} sm={12} md={6} lg={6} xl={3}>
                  {item.dealer_name}
                </Col>
              ))}
          </Row>
        </React.Fragment>
      )}
    </Container>
  );
};

export default DealerPage;
