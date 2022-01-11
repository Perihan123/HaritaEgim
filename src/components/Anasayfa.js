import React from 'react'
import egim from '../images/egim.png'
import cevapresim from '../images/cevap.png'
import orneksoru from '../images/orneksoru.png'
const Anasayfa = () => {

    const genelBilgi = "Belirli bir sahada topografyanın sunduğu eğim şartları birçok yönden önemlidir. Lokal iklim ve özellikle mikro-klima özelliklerinin belirlenmesinde, yamaç analizlerinin yanısıra, eğimler de dikkate alınır ve bu sayede bir yerin bakı koşulları, güneşlenme süresi ve radyasyonla ısınması, aldığı yağış miktarı belirlenmeye çalışılır. Ortalama yamaç eğimi ve belli bir kesimin bireysel yamaç eğimleri arazi kullanılışında (land-use) tarım sahalarının ve ürün çeşitlerinin belirlenmesinde de önemlidir. Jeomorfolojik araştırmalara gelince, topoğrafyada farklı devrelere ait aşınım yüzeylerinin ayırt edilmesinde, epirojenik çarpılmaların ortaya konmasında, toprak incelemelerinde ve bir sahanın morfolojik karakterlerinin araştırılmasında yamaç eğimlerinin ayrı bir önemi vardır.";


    const genelbilgiaciklama="Vadi yamacı, tepe yamacı, dağ yamacı, aşınım yüzeyi, birikim yüzeyi, plato yüzeyi, ova yüzeyi gibi, herhangi bir topografya yüzeyinin yatay düzlemle yapmış olduğu açıya eğim denir. "

    const problem = "Yukarıda verilen 1/100.000 ölçekli Şile İlçesinin Jeomorfoloji Haritası’nda, Şile’nin 15 km güneyindeki 411 metrelik Kayalıkuyu Tepe ile 15 m’lerde kurulmuş olan Şile kenti arasındaki platonun eğimini binde, yüzde, derece cinsinden hesaplayınız."

    const cevap = "Şile ile Karakuyulu Tepe arası 15 km olduğuna göre 1/100.000 ölçekli bir haritada bu mesafe 15 cm’ye karşılık gelir. Yani AB= 15 cm’dir."

 
    
    return (
        <div className='flex-1 m-2 flex flex-col justify-center items-center'>
            <div className='sticky fixed-top'>
                <h2 className='text-2xl font-bold'><span className='text-blue-600'>hesapla</span>.net</h2>
                
                <h2 className='text-2xl font-bold '>Eğim Hesaplama</h2>
            </div>
            
            <div className='w-full'>
                <h4 className='text-primary-dark font-semibold mb-3' >Genel Bilgiler</h4>
                <p className='indent-2 mb-2'>{genelBilgi}</p>
                <p  className='indent-2 mb-2'>{genelbilgiaciklama}</p>
                <div className='flex flex-col items-center py-4'>
                    <img src={egim} alt='Eğim' />
                    <p className='pt-2 '>Yukarıdaki şekilde BC topografya yüzeyinin eğimi tanjant alfa (α) açısının değerine eşittir</p>
                </div>
            </div>

            <div className='w-full'>
                <h4 className='text-primary-dark font-semibold' >Örnek Problem</h4>
                <div className='flex flex-col items-center py-4'>
                    <img src={orneksoru} alt='Eğim' />
                </div>
                <p className='indent-2 pb-2'>{problem}</p>
                <p  className='indent-2 pb-2'>{cevap}</p>
                <div className='flex flex-col items-center py-4'>
                    <img src={cevapresim} alt='Eğim' />
                </div>
                <p className='pl-2 font-semibold ' > 0, 0264 X 100 = 2,64 yüzde ifadeyle sonuç: % 2,64 <br />
                0, 0264 X 1000 = 26,4 binde ifadeyle sonuç: %o 26,4 <br />
                0, 0264 x 57,1 = 1,5 derece ifadesiyle sonuç: 1,5°
                </p>
            </div>
        </div>
    )
}

export default Anasayfa;
