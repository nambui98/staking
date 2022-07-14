import React from "react";
import styles from "./Loading.module.css";
import logo from 'assets/gif-loading.gif'
const Loading: React.FC<any> = (props) => {
	return (
		<div
			className={
				props.loading ?
					styles.body_loading : styles.none}
		>
			<div>
				<video
					autoPlay={true}
					loop
					muted
					playsInline
				>
					<source
						src={"assets/loading.webm"}
						type='video/mp4; codecs="hvc1"'
					/>
					<source
						src={"assets/loading.webm"}
						type="video/webm"
					/>
					<source
						src={"assets/loading.webm"}
						type="video/mov"
					/>
				</video>
				{/* <img src={'assets/loading.webm'} alt="loading..." /> */}
				{/* <div className={styles.spinner}></div> */}
			</div>
		</div>
		// <div

		// 	className={props.loading ? styles.body_loading : styles.none} style={{ zIndex: 10000 }}
		// // className={styles.body_loading}

		// >
		// 	<svg className={styles.gegga}>
		// 		<defs>
		// 			<filter id="gegga">
		// 				<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
		// 				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="inreGegga"></feColorMatrix>
		// 				<feComposite in="SourceGraphic" in2="inreGegga" operator="atop"></feComposite>
		// 			</filter>
		// 		</defs>
		// 	</svg>
		// 	<svg className={styles.snurra} width="200" height="200" viewBox="0 0 200 200">
		// 		<defs>
		// 			<linearGradient id="linjärGradient">
		// 				<stop className={styles.stopp1} offset="0"></stop>
		// 				<stop className={styles.stopp2} offset="1"></stop>
		// 			</linearGradient>
		// 			<linearGradient y2="160" x2="160" y1="40" x1="40" gradientUnits="userSpaceOnUse" id="gradient" xlinkHref="#linjärGradient"></linearGradient>
		// 		</defs>
		// 		<path className={styles.halvan} d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"></path>
		// 		<circle className={styles.strecken} cx="100" cy="100" r="64"></circle>
		// 	</svg>
		// 	<svg className={styles.skugga} width="200" height="200" viewBox="0 0 200 200">
		// 		<path className={styles.halvan} d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"></path>
		// 		<circle className={styles.strecken} cx="100" cy="100" r="64"></circle>
		// 	</svg>
		// </div>
	);
}

export default Loading;