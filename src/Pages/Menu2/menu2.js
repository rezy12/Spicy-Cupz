<<<<<<< HEAD

import "../Menu2/menu2.css"
import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SpicyFlower from "../../components/Images/flowers.jpeg";
import ChamoyCups from "../../components/Images/midcup.png";
import DryDustedGummies from "../../components/Images/spiceballs.png";
import MiniSweetCups from "../../components/Images/stack-cup.png";
import SpicyPop from "../../components/Images/two-cup.jpg";

/*Sweet sour candy*/
=======
import React from 'react';
import Header from "../../components/Header/header";
import Footer from '../../components/Footer/footer';
import Spicy1 from "../../components/Images/spicy1.png";
import Spicy2 from "../../components/Images/spicy2.png";
import Spicy3 from "../../components/Images/spicy3.png";
import Spicy4 from "../../components/Images/spicy4.png";
import Spicy5 from "../../components/Images/spicy5.png";
import Spicy6 from "../../components/Images/spicy6.png";
import Spicy7 from "../../components/Images/spicy7.png";
import Spicy8 from "../../components/Images/spicy8.png";
import { Link } from "react-router-dom";
import "../Menu/menu.css"
>>>>>>> origin/master



const menu2 = () => {
  return (
    <>
<<<<<<< HEAD

      <Header />

      <div class="titlePage">
        <h1>Sweet & Sour Candy</h1>
        <p>If you're looking for delightful combination of sweet and sour flavors, then look no further! Our selection offers a plethora of choices, from delectable sweet gummies to tantalizingly tangy strings. Indulge your taste buds with our diverse range of options and treat yourself to a burst of deliciousness!</p>
      </div>

      <h1>Sweet Candy</h1>

      {/*first menu item Item 1:spicy flower*/}
      <div class="titleHead">
        <div class="titleLog">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody><tr>
                      <td>
                        <img align="center" border="0" src={SpicyFlower} alt="flower" title="flower" width="290.98" class="v-src-width v-src-max-width" />
                      </td>
                    </tr>
                    </tbody></table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="menuTitleHead">
          <div class="headTitleheader">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3><strong>Spicy Flowers</strong></h3>
                  </td>
                </tr>
              </tbody>
            </table>


            {/*second table on right description  */}
            <table>
              <tbody>
                <tr>
                  <td class="parFont" align="left">
                    <div class="parDescription">
                      <p><span class="par">Demonstrate your love and consideration for your significant other by incorporating a bit of excitement into your relationship. Savor a flavor-filled snack that will send your taste buds into a frenzy with each bite.</span></p>
                      
                      <p><span class="par">Price:</span></p>
                      <p><span class="par">$15.00</span></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td class="buttonAddDel">
                    <div class="v-text-align" align="left">
                      <button class="add-btn" onclick="addItem('Spicy Flowers', 15)">Add</button>
                      <button class="remove-btn" onclick="removeItem('Spicy Flowers', 15)">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <h1>Sour Candy</h1>


      {/*first menu item Item 2: Chamoy Cupz*/}
      <div class="titleHead">
        <div class="titleLog">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody><tr>
                      <td>
                        <img align="center" border="0" src={ChamoyCups} alt="flower" title="flower" width="290.98" class="v-src-width v-src-max-width" />
                      </td>
                    </tr>
                    </tbody></table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="menuTitleHead">
          <div class="headTitleheader">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3><strong>Chamoy Cupz</strong></h3>
                  </td>
                </tr>
              </tbody>
            </table>



            {/*second table on right description  */}
            <table>
              <tbody>
                <tr>
                  <td class="parFont" align="left">
                    <div class="parDescription">
                      <p><span class="par">Our unique blend of tangy flavors and heat will tantalize your taste buds and bring excitement to your day. Whether you're at the office or on a road trip, these Dry Dusted Gummies covered with spicy sauce that will bring a touch of adventure to your life. So, spice up your snack game and enjoy a burst of flavor with every bite!</span></p>
                      
                      <p><span class="par">Price:</span></p>
                      <p><span class="par">$15.00</span></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td class="buttonAddDel">
                    <div class="v-text-align" align="left">
                      <button class="add-btn" onclick="addItem('Chamoy Cupz', 15)">Add</button>
                      <button class="remove-btn" onclick="removeItem('Chamoy Cupz', 15)">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/*first menu item Item 3:Dry Dusted Gummies*/}
      <div class="titleHead">
        <div class="titleLog">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody><tr>
                      <td>
                        <img align="center" border="0" src={DryDustedGummies} alt="flower" title="flower" width="290.98" class="v-src-width v-src-max-width" />
                      </td>
                    </tr>
                    </tbody></table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="menuTitleHead">
          <div class="headTitleheader">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3><strong>Dry Dusted Gummies</strong></h3>
                  </td>
                </tr>
              </tbody>
            </table>


            {/*second table on right description  */}
            <table>
              <tbody>
                <tr>
                  <td class="parFont" align="left">
                    <div class="parDescription">
                      <p><span class="par">Demonstrate your affection to the special person in your life express your love, whether it be on a special occasion or just make the effort to show that you care.
                        Let your actions speak louder than words and show how much you truly love them.</span></p>
                      
                      <p><span class="par">Price:</span></p>
                      <p><span class="par">$15.00</span></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td class="buttonAddDel">
                    <div class="v-text-align" align="left">
                      <button class="add-btn" onclick="addItem('Dry Dusted Gummies', 15)">Add</button>
                      <button class="remove-btn" onclick="removeItem('Dry Dusted Gummies', 15)">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/*first menu item Item 4: Mini Sweet Cupz*/}
      <div class="titleHead">
        <div class="titleLog">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody><tr>
                      <td>
                        <img align="center" border="0" src={MiniSweetCups} alt="flower" title="flower" width="290.98" class="v-src-width v-src-max-width" />
                      </td>
                    </tr>
                    </tbody></table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="menuTitleHead">
          <div class="headTitleheader">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3><strong>Mini Sweet Cups</strong></h3>
                  </td>
                </tr>
              </tbody>
            </table>


            {/*second table on right description  */}
            <table>
              <tbody>
                <tr>
                  <td class="parFont" align="left">
                    <div class="parDescription">
                      <p><span class="par">You can easily fit them in your pocket, bag, or purse. Whether you're at the office, on a road trip, or just running errands, these Dry Dusted Gummies will bring a burst of flavor and heat to your day. So, don't settle for bland snacks, bring the heat and enjoy a flavor-filled experience with every bite</span></p>
                      
                      <p><span class="par">Price:</span></p>
                      <p><span class="par">$15.00</span></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td class="buttonAddDel">
                    <div class="v-text-align" align="left">
                      <button class="add-btn" onclick="addItem('Mini Sweet Cups', 15)">Add</button>
                      <button class="remove-btn" onclick="removeItem('Mini Sweet Cups', 15)">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>




      {/*first menu item Item 5: Spicy Poppers*/}
      <div class="titleHead">
        <div class="titleLog">
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody><tr>
                      <td>
                        <img align="center" border="0" src={SpicyPop} alt="flower" title="flower" width="290.98" class="v-src-width v-src-max-width" />
                      </td>
                    </tr>
                    </tbody></table>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="menuTitleHead">
          <div class="headTitleheader">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3><strong>Spicy Poppers</strong></h3>
                  </td>
                </tr>
              </tbody>
            </table>


            {/*second table on right description  */}
            <table>
              <tbody>
                <tr>
                  <td class="parFont" align="left">
                    <div class="parDescription">
                      <p><span class="par">Our gummies are not only packed with a sweet and tangy flavor, but they are also coated in the famous Lucas candy, providing a satisfying crunch in every bite. Need a pick-me-up, our gummies will provide you with a taste sensation unlike any other. Experience a flavor frenzy with every bite and add a touch of fun to your day with our gummies filled with sauce and covered in Lucas!</span></p>
                      
                      <p><span class="par">Price:</span></p>
                      <p><span class="par">$15.00</span></p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td class="buttonAddDel">
                    <div class="v-text-align" align="left">
                      <button class="add-btn" onclick="addItem('Spicy Poppers', 15)">Add</button>
                      <button class="remove-btn" onclick="removeItem('Spicy Poppers', 15)">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

<Footer />
=======
    

    
    <Header />

    <div className='Title'>
        <h1>Spicy Section</h1>
        <p>Welcome to <div className="sidestream">Spicy</div><Link to= "/menu"><a>Sweet Side</a></Link></p>
     </div>


<div className="container">
<div className="box">
  <img src={Spicy1} alt="Image 1" />
  <div className="content">
    <h3>Spicy Rings </h3>
    <p>Spicy candy rings with a bold burst of fiery flavor. 1. Price: $10</p>
  </div>
</div>
<div className="box">
  <img src={Spicy2} alt="Image 2" />
  <div className="content">
    <h3>Pulparindo</h3>
    <p>This Mexican candy mixes spicy, sweet, and sour for a unique taste. Price: $15</p>
  </div>
</div>
<div className="box">
  <img src={Spicy3}  alt="Image 3" />
  <div className="content">
    <h3>Cinomen Puff Balls</h3>
    <p>Chili-coated tamarind starch gum: a spicy-sweet sensation Price: $20</p>
  </div>
</div>
<div className="box">
  <img src={Spicy4} alt="Image 4" />
  <div className="content">
    <h3>Spicy Gummy Worms</h3>
    <p>Chamoy Gummy Worms combine sweet, sour, and chili spice for a thrilling flavor burst, perfect for lively parties and fiestas. Price: $25</p>
  </div>
</div>


<div className="container">
<div className="box">
  <img src={Spicy5} alt="Image 5" />
  <div className="content">
    <h3>Spicy Gummy Bears</h3>
    <p>Description of Basket 1. Price: $10</p>
  </div>
</div>
<div className="box">
  <img src={Spicy6} alt="Image 6" />
  <div className="content">
    <h3>Fire Ball</h3>
    <p>Description of Basket 2. Price: $15</p>
  </div>
</div>
<div className="box">
  <img src={Spicy7}  alt="Image 7" />
  <div className="content">
    <h3>Swirl Hot Pots</h3>
    <p>Description of Basket 3. Price: $20</p>
  </div>
</div>
<div className="box">
  <img src={Spicy8} alt="Image 8" />
  <div className="content">
    <h3>Mint Spicy Bars</h3>
    <p>Description of Basket 4. Price: $25</p>
  </div>
</div>
</div>
</div>

<Footer />

    


    <Footer />
>>>>>>> origin/master
    </>
  )
}

export default menu2
