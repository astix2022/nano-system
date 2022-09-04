import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../../store/getPost";
import { Container, Wrapper, Card, Icon } from "./style";
import { useNavigate } from "react-router-dom";

const Yuklanganlar = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.get?.info?.publish);
  useEffect(() => {
    dispatch(Post());
  }, []);
  console.log(data);
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/chopEtish");
  };
  return (
    <Container>
      <div className="exit">
        <Icon.Back onClick={onSubmit} />
        <span>Chqish</span>
      </div>
      {data?.map(({ id, image, date, title, message }) => {
        return (
          <div key={id} className="container_padding">
            <Wrapper>
              <Card>
                <div className="card_item">
                  <p className="car_item_title">Yuborilgan surat:</p>
                  <img src={image} alt="img" />
                </div>
                <div className="card_item">
                  <p className="car_item_title">Yuborilgan sana:</p>
                  <p>{date}</p>
                </div>
                <div className="card_item">
                  <p className="car_item_title">Yuborilgan sarlavha</p>
                  <p>{title}</p>
                </div>
                <div className="card_item">
                  <p className="car_item_title">Yuborilgan xabar</p>
                  <p>{message}</p>
                </div>
                <div className="card_item_btn_wrap">
                  <p className="car_item_title">O'chrish</p>
                  <button className="card_item_btn">O'chrish</button>
                </div>
              </Card>
            </Wrapper>
          </div>
        );
      })}
    </Container>
  );
};
export default Yuklanganlar;
