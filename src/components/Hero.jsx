/* eslint-disable react/prop-types */

const Hero = ({ 
    message = "Welcome !!!!", 
    submessage = "This is the Home Page" }) => {
  return (
    <>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-lvh w-full text-center pt-40">
            <span className="text-white text-5xl font-bold">{message}</span>
            <p className="text-white text-2xl font-semibold mt-10">{submessage}</p>
            <div>
              <p>Explore the other pages</p>
            </div>
        </div>
    </>
  )
}

export default Hero