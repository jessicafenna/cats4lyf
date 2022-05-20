import React, { useState } from "react";

const apiKey = '';
const url = 'https://api.thecatapi.com/v1/images/search?limit=12'; // .../limit=10'

function CatGen() {

	const getCat = () => {
		console.log("Cat Got!");
		fetch(url)
		.then((res) => res.json())
		.then((cats) => {
			console.log('Cat', cats);
		})
		.catch((error) => {
			console.log('Error', error);
		});
	}
	return getCat()
}

export default CatGen()
