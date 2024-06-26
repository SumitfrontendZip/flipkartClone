import { useEffect, useRef, useState } from 'react'

function OtpInput({ length = 4, phoneNumber, onOtpSubmit = () => { } }) {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRef = useRef([])
    console.log(otp);
    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])

    const handleChange = (event, index) => {
        const value = event.target.value
        if (isNaN(value)) return

        const newOtp = [...otp]

        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRef.current[otp.indexOf("")].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (
          e.key === "Backspace" &&
          !otp[index] &&
          index > 0 &&
          inputRef.current[index - 1]
        ) {
          
          inputRef.current[index - 1].focus();
        }
      };
    return (
        <>
            <h3>Sent Otp {phoneNumber}</h3>
            <div className='otpInputContainer'>
                {
                    otp.map((value, index) => {
                        return <input
                            type="text"
                            ref={(input) => (inputRef.current[index] = input)}
                            key={index}
                            value={value}
                            onClick={() => handleClick(index)}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    })
                }
            </div>
        </>
    )
}

export default OtpInput
