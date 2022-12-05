import React from 'react';
import Layout from '@theme/Layout';

export default function LatestVideo() {
	fetchVideo()
	return (
		
		<Layout title="Dernière vidéo" description="Retrouvez ici la dernière vidéo de GeekCorner">
			<h2 style={{  padding: "10% 0",textAlign: "center"}}>Vous serez redirigé(e) vers la dernière vidéo de GeekCorner...</h2>
		</Layout >
	)
}
async function fetchVideo() {
	const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';
	const data=await fetch(baseUrl + "UCEn1rLR7XssIfQaS5M4xj0Q");
	const res = await data.json()
	if (!res) return history.pushState(null, "", "/");
	else document.location.href=res.items[0].link;
	
}