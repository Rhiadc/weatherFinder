import React from 'react';

class Weather extends React.Component{
	render(){
		return(
			<div className='weather__info'>
				{this.props.city && this.props.country && <p className='weather__key'> Localização: <span className='weather__value'>{this.props.city}, {this.props.country}</span> </p> }
				{this.props.temperature && <p className='weather__key'> Temperatura: <span className='weather__value'>{this.props.temperature}°C</span> </p>}
				{this.props.humidity && <p className='weather__key'> Humidade: <span className='weather__value'>{this.props.humidity}</span> </p>}
				{this.props.description && <p className='weather__key'> Descrição: <span className='weather__value'>{this.props.description}</span></p>}
				{this.props.error && <p className='weather__error'> Erro: {this.props.error}</p>}
			</div>
		);
	}
};

export default Weather;