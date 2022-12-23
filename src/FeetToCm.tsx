import { FC, useRef, useState } from "react";

function calculateCm(inFeet: number, inInch: number){
	const feetValue = 30.48
	const inchValue = 2.54
	const toCm = (inFeet * feetValue) + (inInch * inchValue)
	const roundedCm = Math.round(toCm * 100) / 100
	return roundedCm
}

const FeetToCm: FC = () => {
	const [message, setMessage] = useState<string | null>(null)
	const feetRef = useRef<HTMLInputElement>(null)
	const inchRef = useRef<HTMLInputElement>(null)
	return(
		<>
			<input placeholder="enter feet" ref={feetRef}/>
			<input placeholder="enter inch" ref={inchRef}/>
			<button onClick={() => {
				if(feetRef.current?.value && inchRef.current?.value){
					const feet = parseInt(feetRef.current.value)
					const inch = parseInt(inchRef.current.value)
					if(isNaN(feet) || isNaN(inch)){
						setMessage("feet and height value should be number")
					}else{
						const heightInCm = calculateCm(feet, inch)
						setMessage(`Result: ${heightInCm}cm`)
					}
				}
			}}>calculate</button>
			{message && <div>{message}</div>}
		</>
	)
}

export default FeetToCm;
