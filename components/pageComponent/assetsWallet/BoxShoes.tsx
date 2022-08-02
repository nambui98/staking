import { useState } from 'react';

import Box from '@mui/system/Box';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BoxShoes() {
	const [check, setCheck] = useState<number>(0);
	return (
		<Box
			sx={{
				fontFamily: 'BeVietnamPro',
				marginRight: '40px',
				height: 465,
				overflow: 'hidden',
			}}
		>
			<Box sx={{ display: 'flex', marginTop: '41px' }}>
				{/* left */}
				<Box sx={{ display: 'flex', marginRight: '90px' }}>
					<Box sx={{ position: 'relative', marginLeft: '16px' }}>
						<img src="/assets/giay003.png" alt="giay" />
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								background: '#FFFFFF',
								width: 25,
								height: 25,
								cursor: 'pointer',
							}}
							onClick={() => setCheck(1)}
						>
							{check === 1 ? (
								<img src="/assets/checked.png" alt="=checked" />
							) : (
								<img src="/assets/check-null.png" alt="null check" />
							)}
						</Box>
					</Box>
					<Box sx={{ marginLeft: '16px' }}>
						<h3>#R224206</h3>
						<Box sx={{ marginTop: '12px', display: 'flex' }}>
							<span
								style={{
									fontWeight: '600',
									fontSize: '14px',
									lineHeight: '22px',
									padding: '4px 12px',
									borderRadius: '12px',
									backgroundColor: '#FF6D24',
									display: 'inline-block',
									color: '#FFF',
									marginRight: '8px',
								}}
							>
								Racer
							</span>
							<img src="images/epic.svg" alt="epic" />
						</Box>
					</Box>
				</Box>
				{/* right */}
				<Box sx={{ display: 'flex', flex: '1' }}>
					<Box sx={{ minWidth: '180px' }}>
						<Box>
							<img
								src="images/triangle.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 10 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Level
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									2
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/Group.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 12 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Condition
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									89%
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/condision.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 8 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Shoe Mint
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
									}}
								>
									3/7
								</h4>
							</span>
						</Box>
					</Box>

					<Box sx={{ flex: 1 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
								alignItems: 'center',
							}}
						>
							<img src="images/battery-full.png" alt="battery-full" />
							<img src="" alt="" />
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								101
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/shield-tick.png" alt="battery-full" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 16px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								24
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/setting-2.png" alt="setting-2" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 64px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								51
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/magic-star.png" alt="magic-star" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 100px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								32
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/route-square.png" alt="route-square" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 156px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								15
							</p>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', marginBottom: '50px', marginTop: '50px' }}>
				{/* left */}
				<Box sx={{ display: 'flex', marginRight: '90px' }}>
					<Box sx={{ position: 'relative', marginLeft: '16px' }}>
						<img src="/assets/giay003.png" alt="giay" />
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								background: '#FFFFFF',
								width: 25,
								height: 25,
								cursor: 'pointer',
							}}
							onClick={() => setCheck(2)}
						>
							{check === 2 ? (
								<img src="/assets/checked.png" alt="=checked" />
							) : (
								<img src="/assets/check-null.png" alt="null check" />
							)}
						</Box>
					</Box>
					<Box sx={{ marginLeft: '16px' }}>
						<h3>#R224206</h3>
						<Box sx={{ marginTop: '12px', display: 'flex' }}>
							<span
								style={{
									fontWeight: '600',
									fontSize: '14px',
									lineHeight: '22px',
									padding: '4px 12px',
									borderRadius: '12px',
									backgroundColor: '#FF6D24',
									display: 'inline-block',
									color: '#FFF',
									marginRight: '8px',
								}}
							>
								Racer
							</span>
							<img src="images/epic.svg" alt="epic" />
						</Box>
					</Box>
				</Box>
				{/* right */}
				<Box sx={{ display: 'flex', flex: '1' }}>
					<Box sx={{ minWidth: '180px' }}>
						<Box>
							<img
								src="images/triangle.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 10 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Level
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									2
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/Group.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 12 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Condition
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									89%
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/condision.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 8 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Shoe Mint
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
									}}
								>
									3/7
								</h4>
							</span>
						</Box>
					</Box>

					<Box sx={{ flex: 1 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
								alignItems: 'center',
							}}
						>
							<img src="images/battery-full.png" alt="battery-full" />
							<img src="" alt="" />
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								101
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/shield-tick.png" alt="battery-full" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 16px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								24
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/setting-2.png" alt="setting-2" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 64px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								51
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/magic-star.png" alt="magic-star" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 100px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								32
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/route-square.png" alt="route-square" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 156px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								15
							</p>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', marginBottom: '50px', marginTop: '50px' }}>
				{/* left */}
				<Box sx={{ display: 'flex', marginRight: '90px' }}>
					<Box sx={{ position: 'relative', marginLeft: '16px' }}>
						<img src="/assets/giay003.png" alt="giay" />
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								background: '#FFFFFF',
								width: 25,
								height: 25,
								cursor: 'pointer',
							}}
							onClick={() => setCheck(3)}
						>
							{check === 3 ? (
								<img src="/assets/checked.png" alt="=checked" />
							) : (
								<img src="/assets/check-null.png" alt="null check" />
							)}
						</Box>
					</Box>
					<Box sx={{ marginLeft: '16px' }}>
						<h3>#R224206</h3>
						<Box sx={{ marginTop: '12px', display: 'flex' }}>
							<span
								style={{
									fontWeight: '600',
									fontSize: '14px',
									lineHeight: '22px',
									padding: '4px 12px',
									borderRadius: '12px',
									backgroundColor: '#FF6D24',
									display: 'inline-block',
									color: '#FFF',
									marginRight: '8px',
								}}
							>
								Racer
							</span>
							<img src="images/epic.svg" alt="epic" />
						</Box>
					</Box>
				</Box>
				{/* right */}
				<Box sx={{ display: 'flex', flex: '1' }}>
					<Box sx={{ minWidth: '180px' }}>
						<Box>
							<img
								src="images/triangle.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 10 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Level
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									2
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/Group.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 12 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Condition
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
										marginBottom: 8,
									}}
								>
									89%
								</h4>
							</span>
						</Box>
						<Box>
							<img
								src="images/condision.png"
								alt="triangle"
								style={{ float: 'left', marginRight: 8 }}
							/>
							<span>
								<p
									style={{
										fontWeight: '500',
										fontSize: '12px',
										lineHeight: '18px',
										color: '#5A6178',
									}}
								>
									Shoe Mint
								</p>
								<h4
									style={{
										fontWeight: '700',
										fontSize: '14px',
										lineHeight: '20px',
										color: '#31373E',
									}}
								>
									3/7
								</h4>
							</span>
						</Box>
					</Box>

					<Box sx={{ flex: 1 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
								alignItems: 'center',
							}}
						>
							<img src="images/battery-full.png" alt="battery-full" />
							<img src="" alt="" />
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								101
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/shield-tick.png" alt="battery-full" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 16px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								24
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/setting-2.png" alt="setting-2" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 64px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								51
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/magic-star.png" alt="magic-star" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 100px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								32
							</p>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '8px',
							}}
						>
							<img src="images/route-square.png" alt="route-square" />
							<Box
								sx={{
									height: '4px',
									background: '#FF6D24',
									width: '100%',
									margin: '7px 156px 0 16px',
									borderRadius: '2px',
								}}
							></Box>
							<p
								style={{
									fontWeight: '500',
									fontSize: '12px',
									lineHeight: '18px',
									color: '#5A6178',
								}}
							>
								15
							</p>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
