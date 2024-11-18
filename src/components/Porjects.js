import { styles2 } from './who';
import { css } from 'aphrodite';
import '../Who.css';
import AgeCal from '../Assests/Age_Caluclautor.jpg';
import ListToDo from '../Assests/ToDo.png';
import TicTacToc from '../Assests/TicTacToc.png';
import MealOrder from '../Assests/MealOrder.png';
import RestCountries from '../Assests/rest-countryies.png'
import Links from './Links.js';
import { Link } from 'react-router-dom';
function Porjects(){
return(
    <>
    <div className="container  mt-3">
    <div className='row '>
       <a className={`Text_Big  ${css(styles2.Text_Double)}`}>
    My Projects
        </a>
        </div>
        <div className='row'>
        <div className='col-md-1 col-lg-1 col-xl-1 col-2 '>
          <div className='Big_Line'></div>
        </div>
       </div>
       <div className='row '>
        <div className='col-md-1 col-lg-1 col-xl-1 col-2'>
          <div className='Small_Line'></div>
        </div>
       </div>

      <Links link={"https://hghk13414.github.io/a4/age-calculator.html"} img={AgeCal} name={"Age Caluclator"}/>
      <Links link={"https://nehad223.github.io/List-To-DO/"} img={ListToDo} name={"List To Do"}/>
      <Links link={"https://nehad223.github.io/XOO/"} img={TicTacToc} name={"TicTacToc"}/>
      <Links link={"https://nehad223.github.io/Meal_Order/"} img={MealOrder} name={"Meal Order"}/>
      <Links link={"https://nehad223.github.io/rest-countries/"} img={RestCountries} name={"Rest Countries"}/>






    </div>
    </>
);
}
export default Porjects;