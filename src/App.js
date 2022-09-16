

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content">

        <div className="content-info">
          <h1 className="title-content">Все кроссовки</h1>
          <div className="searchBlock">
            <img src="img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="productWrapper">

                <Card />

        </div>                   


      </div>

    </div>
  );
}

export default App;
