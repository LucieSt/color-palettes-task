import React from "react";
import SchemeColor from './../SchemeColor';
import './style.css';

const Palette = ({ paletteData }) => {

	const directionClass = paletteData.direction === "vertical" ? "palette-scheme palette-scheme--vertical" : "palette-scheme palette-scheme--horizontal" ;

	return (
		<div className="palette">
			<div className={directionClass}>
				<img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
				<div className="scheme-colors">
					{paletteData.colors.map((barva) => <SchemeColor key={barva} color={barva}/> )}
				</div>
			</div>
			<div className="palette-info">
				<h2>{paletteData.name}</h2>
				<p>{paletteData.description}</p>

				<p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
			</div>
		</div>
	)
};

export default Palette;