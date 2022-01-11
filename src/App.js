import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Anasayfa from './components/Anasayfa';
import Hesaplama from './components/Hesaplama';
import Orneksoru from './components/OrnekSoru';
import Layout from './layout/Layout';
import BarGraphic from './components/BarGrafic'

function App() {
  //ölçek oranına göre yüzdelik eğim

  const [datas,setDatas] = useState({
    yukseklik1:0,
    yukseklik2:0,
    gercekUzaklik:0,
    olcek:0,
    yuzde:undefined,
    binde:undefined,
    derece:undefined
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/anasayfa" />
        </Route>
        <Layout>
          <Route path="/anasayfa"  component={Anasayfa}/>        
          <Route path="/hesaplama" >
            <Hesaplama datas={datas} setDatas={setDatas} />
          </Route> 
          <Route path="/orneksoru"  component={Orneksoru}/>        
          <Route path="/bar-graph" >
            <BarGraphic datas={datas} />
          </Route>

        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
