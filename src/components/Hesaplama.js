import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// a noktasının yuksekliği b
//b noktasının yuksekliği
// 1/ölcek
const Hesaplama = ({datas,setDatas}) => {

let history = useHistory();
  const Hesapla = () => {
    const fark = parseInt(datas.yukseklik1) - parseInt(datas.yukseklik2);
    const yatayUzaklik = (parseInt(datas.gercekUzaklik) * parseInt(datas.olcek)) / 100;
    const egim = parseInt(fark) / parseInt(yatayUzaklik);
    setDatas({
        yuzde:Number(egim*100).toFixed(2),
        binde:Number(egim*1000).toFixed(2),
        derece:Number(egim*57.1).toFixed(2)
    })
    history.push('/bar-graph')
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      
      <div className="w-1/2 p-6 px-8  bg-primary-dark rounded-xl">
        <div className="flex flex-col space-y-3 ">
          <label className="text-primary-light pl-1">İlk Yükseklik</label>
          <input
            className="rounded-xl  p-3 outline-none shadow-lg text-primary-light bg-primary-extralight"
            type="text"
            defaultValue={0}
            onChange={(e) => setDatas({
                ...datas,
                yukseklik1:e.target.value
            })}
          />
          <label className="text-primary-light pl-1">İkinci Yükseklik</label>
          <input
            className="rounded-xl  p-3 outline-none shadow-lg text-primary-light bg-primary-extralight"
            type="text"
            defaultValue={0}
            onChange={(e) => setDatas({
                ...datas,
                yukseklik2:e.target.value
            })}
          />
          <label className="text-primary-light pl-1">Ölçek Değeri</label>
          <input
            className="rounded-xl  p-3 outline-none shadow-lg text-primary-light bg-primary-extralight"
            type="text"
            defaultValue={0}
            onChange={(e) => setDatas({
                ...datas,
                olcek:e.target.value
            })}
          />
          <label className="text-primary-light pl-1">Gerçek Uzaklık</label>
          <input
            className="rounded-xl  p-3 outline-none shadow-lg text-primary-light bg-primary-extralight"
            type="text"
            defaultValue={0}
            onChange={(e) => setDatas({
                ...datas,
                gercekUzaklik:e.target.value
            })}
          />
          <button
            style={{ backgroundColor: "#267fea" }}
            className="rounded-xl text-primary-light py-3 shadow-lg mt-3"
            onClick={Hesapla}
          >
            Hesapla
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hesaplama;
