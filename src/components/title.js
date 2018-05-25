import React from 'react';

class Title extends React.Component{
	render(){
		return(
			<div>
				<h1 className='title-container__title'>Weather finder</h1>
				<p className='title-container__subtitle'>Descubra a temperatura e condições climáticas de sua cidade!</p>
			</div>
		);
	}
};

export default Title;