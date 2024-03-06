import React from "react";

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';


//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>To Do List</h1>
			<ul>
				<li><input type="text" placeholder="What do you need?"></input>   </li>
				<li>Walk the dog <i class="fas fa-trash"></i> </li>
				<li>Pay taxes <i class="fas fa-trash"></i>  </li>
				<li>Go on vacation <i class="fas fa-trash"></i>  </li>
				<div> 23 tasks  </div>
			</ul>
		</div>
		
	);
};

export default Home;
