import { FC, useState } from "react";
import CmToFeet from "./CmToFeet";
import FeetToCm from "./FeetToCm";
const heightOptions = {
	cmToFeet: "cmToFeet",
	feetToCm: "feetToCm",
};
const HeightConverter: FC = () => {
	const [heightOptionSelected, setheightOptionSelected] = useState<string>(
		heightOptions.cmToFeet
	);
	return (
		<>
			<h4>Welcome to height converter</h4>
			<span>From: </span>
			<select
				onChange={(e) => {
					setheightOptionSelected(e.target.value);
				}}
			>
				<option value={heightOptions.cmToFeet}>cm to feet</option>
				<option value={heightOptions.feetToCm}>feet to cm</option>
			</select>
			<div>
				{heightOptionSelected === heightOptions.cmToFeet && <CmToFeet />}
				{heightOptionSelected === heightOptions.feetToCm && <FeetToCm />}
			</div>
		</>
	);
};

export default HeightConverter;
