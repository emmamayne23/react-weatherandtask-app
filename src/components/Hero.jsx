
const Hero = ({ 
    message = "Welcome !!!!", 
    submessage = "This is the Home Page" }) => {
  return (
    <>
        <div className="bg-green-400 h-lvh w-full grid place-items-center">
            <span className="text-white text-7xl font-bold">{message}</span>
            <span className="text-white text-2xl font-semibold">{submessage}</span>
            
        </div>
    </>
  )
}

export default Hero