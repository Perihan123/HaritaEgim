import React from "react";
import sorubir from '../images/egimsoru1-removebg-preview.png'
import soruiki from '../images/egimsoru2-removebg-preview.png'
import soru_uc from '../images/egimsoru3-removebg-preview.png'

const Orneksoru = () => {
  return (
    <div>
      <div className="soru-container">
        <h4 className="text-red-600 font-semibold py-1" >Örnek 1:</h4>
        <p className="indent-3"  >İki nokta arası yükselti farkı 360 metre, yatay uzaklık 3600 metre ise eğim yüzde kaçtır?</p>
        <img className="my-2" src={sorubir} alt="soru 1"/>
        <h4 className="text-red-600 font-semibold py-1" >Örnek 2:</h4>
        <p className="indent-2"  > A noktasının yükseltisi 400 metre iken B noktasının yükseltisi ise 1200 metredir. A ve B noktaları arası yatay uzaklık 4 km olduğuna göre eğim yüzde kaçtır?</p>
        <img  className="my-4" src={soruiki} />
        <h4 className="text-red-600 font-semibold py-1" >Örnek 3:</h4>
        <p className="indent-3"  > 1/100000 ölçekli bir haritada iki nokta arası 4 cm dir. İki nokta arasındaki yükselti farkı 200 metre olduğuna göre eğim yüzde kaçtır?</p>
        <img  className="my-4" src={soru_uc}/>
      </div>
    </div>
  );
};

export default Orneksoru;
