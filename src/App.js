import React from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import Buttons from "./components/Buttons";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Bags from "./components/Bags";


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
          <nav>
              <Buttons text="to the collection"/>
              <Buttons text="shop all bags"/>
              <Buttons text="pre-orders" dis={true}/>
              {/*<button*/}
              {/*    onClick={ () => console.log("to the collection") }*/}
              {/*>   to the collection*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    onClick={ () => console.log("shop all bags") }*/}
              {/*>   shop all bags*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    onClick={ () => console.log("pre-orders") }*/}
              {/*    disabled={true}*/}
              {/*>   pre-orders*/}
              {/*</button>*/}
          </nav>



          <main>
              <Bags iname={bag1}  nameText="The Handy bag" price="€400"/>
              <Bags iname={bag2}  nameText="The Stylish bag" price="€250"/>
              <Bags iname={bag3}  nameText="The simple bag" price="€300"/>
              <Bags iname={bag4}  nameText="The trendy bag" price="€300"/>

              {/*<article>*/}
              {/*    <span>Best seller</span>*/}
              {/*    <img src={bag1} alt="The handy bag"/>*/}
              {/*    <p>The handy bag</p>*/}
              {/*    <h4>€400</h4>*/}
              {/*</article>*/}

              {/*<article>*/}
              {/*    <span>Best seller</span>*/}
              {/*    <img src={bag2} alt="The stylish bag"/>*/}
              {/*    <p>The stylish bag</p>*/}
              {/*    <h4>€250</h4>*/}
              {/*</article>*/}

              {/*<article>*/}
              {/*    <span>Best seller</span>*/}
              {/*    <img src={bag3} alt="The simple bag"/>*/}
              {/*    <p>The simple bag</p>*/}
              {/*    <h4>€300</h4>*/}
              {/*</article>*/}

              {/*<article>*/}
              {/*    <span>Best seller</span>*/}
              {/*    <img src={bag4} alt="The trendy bag"/>*/}
              {/*    <p>The trendy bag</p>*/}
              {/*    <h4>€300</h4>*/}
              {/*</article>*/}
          </main>



      </>


  );
}

export default App;


