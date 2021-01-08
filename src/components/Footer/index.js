import React, { Component } from 'react';
/*import {Link} from 'react-router-dom';*/

import "./style.css";
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/Vector.png';

class Footer extends Component {
	render() {
		return (
			<div id="footer">
				<div id="group-1">
				    <h2>Siga-nos</h2>
				    <div className="contact">
				    	<div id="instagram">
		                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
		                    	<img src={Instagram} className="vector-imf" alt="Instagram log"></img>
		                    	@pet&gatô
		                    </a>
		                </div>
		                <div id="twitter">
		                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
		                    	<img src={Twitter} className="twitter-img" alt="Twitter log"></img>
		                    	@pet&gatô
		                    </a>
		                </div>
	                </div>
                </div>

                <div id="group-2">
                	<div className="schedule">
                		<h1 id="attendance-title">Horário de atendimento</h1>
                		<h1>Seg a Sex - das 8h as 18h</h1>
                		<h1>Sab - das 8h as 16h</h1>
                	</div>
                </div>

                <div id="group-3">
                	<h1>Dúvidas</h1>
                	<div className="doubt">
                		<h1>Atendimento</h1>
                		<h1>Ajuda online</h1>
                	</div>
                </div>
			</div>
		);
	}
}

export default Footer;