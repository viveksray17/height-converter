import { FC, useRef, useState } from "react";

function calculateHeightinFeet(inCm: number){
	const feetValue = 30.48
	const inchValue = 2.54
	const inFeet = Math.floor(inCm / feetValue)
	const remainingCm = inCm % feetValue
	const inInch = Math.round((remainingCm / inchValue) * 10) / 10
	return {inFeet, inInch}
}

const CmToFeet: FC = () => {
	const heightRef = useRef<HTMLInputElement>(null)
	const [message, setMessage] = useState<string | null>(null)
	return(
		<>
			<input placeholder="enter height in cm" ref={heightRef}/>
			<button onClick={() => {
				if(heightRef.current?.value){
					const height = parseInt(heightRef.current.value)
					if(isNaN(height)){
						setMessage(`height should be a number`)
					}else{
						const {inFeet, inInch} = calculateHeightinFeet(height)
						setMessage(`Result: ${inFeet}' ${inInch}"`)
					}
				}
			}}>calculate</button>
			{message && <div>{message}</div>}
		</>
	)
}
export default CmToFeet
