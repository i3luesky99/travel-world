import React from "react";
import { intro } from "../../theme/data";
export default function Introduce() {
  const address = `
  - Địa chỉ: 96 đường số 2, phường 11, quận Gò Vấp, TP. Hồ Chí Minh. 
  - Hotline :(+84) 90 624 069 
  - Website: www.levart.com.vn - Email: nghieu18101999@gmail.com
  `;
  return (
    <div className="intro">
      <h1>Chúng tôi là :</h1>
      <p>{intro}</p>
      <h1>Trụ sở chính :</h1>
      <p>{address}</p>
    </div>
  );
}
