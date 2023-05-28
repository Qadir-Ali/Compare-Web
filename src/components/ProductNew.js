import React from "react";

const ProductNew = () => {
  const data = [
    {
      img: "https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
    {
      img: "https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFDzukMEhKlCbY158sfg8UHUyZEZ78iokySoTgINoxPdipdKDbDhw4gqt-4hwuYtjitNwjYurfMw&usqp=CAU&ec=48665698",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
  
    {
      img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
    {
      img: "https://i.ytimg.com/vi/sJeWfYLawaQ/maxresdefault.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
    {
      img: "https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFDzukMEhKlCbY158sfg8UHUyZEZ78iokySoTgINoxPdipdKDbDhw4gqt-4hwuYtjitNwjYurfMw&usqp=CAU&ec=48665698",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
  
    {
      img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
      title: " MAX4POWER KLAWIATURA DO TOSHIBA SATELLITE C55D-A5304",
      price: "65,000",
    },
   
  ];

  return (
    <>
      <div className="Five_Component">
        {data.map((i, index) => (
          <div>
            <img src={i.img} alt="" />
            <p className="head">{i.title}</p>
            <p className="price"> {i.price} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductNew;
