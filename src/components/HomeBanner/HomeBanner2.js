import React, { useEffect, useState } from "react";

import axios from "axios";

function HomeBanner2() {
  const [banner, setBanner] = useState([]);
  const [showCount, setShowCount] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/banner2/banner2?limit=${showCount}`)
      .then((res) => {
        console.log(res.data);

        setBanner(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="py-0 justify-center">
        {banner.slice(0, showCount).map((banner, index) => (
          <img src={banner.imageUrl} alt="" className="" />
        ))}
      </div>
    </div>
  );
}

export default HomeBanner2;
