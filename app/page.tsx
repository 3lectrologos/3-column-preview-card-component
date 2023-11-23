function CarCard({ ...props }) {
  return (
    <div className={`flex flex-col min-h-fit gap-y-7 p-12 lg:h-[500px] ${props.bgColor}`}>
      <img className={`w-16 mb-3`} src={props.image} alt='Sedans icon' />
      <span className={`text-verylightgray font-heading text-[40px] leading-[40px] uppercase`}>
        {props.title}
      </span>
      <span className={`text-transparentwhite text-[15px] leading-[25px] lg:mb-auto`}>
        {props.description}
      </span>
      <button className={`transition h-12 w-36 flex justify-center items-center bg-verylightgray ${props.buttonColor} text-[15px] leading-[25px] rounded-full lg:justify-self-end lg:hover:transition lg:hover:bg-transparent lg:hover:border-2 lg:hover:border-verylightgray lg:hover:text-verylightgray`}>
        Learn More
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <div className={`flex flex-col justify-center items-center lg:h-screen`}>
      <div className={`py-[88px] px-6`}>
        <div className={`flex flex-col max-w-md rounded-lg overflow-hidden lg:flex-row lg:max-w-max lg:w-[920px]`}>
          <CarCard
            bgColor='bg-brightorange'
            buttonColor='text-brightorange'
            image='/icon-sedans.svg'
            title='Sedans'
            description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
          />
          <CarCard
            bgColor='bg-darkcyan'
            buttonColor='text-darkcyan'
            image='/icon-suvs.svg'
            title='SUVs'
            description='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
          />
          <CarCard
            bgColor='bg-verydarkcyan'
            buttonColor='text-verydarkcyan'
            image='/icon-luxury.svg'
            title='Luxury'
            description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
          />
        </div>
      </div>
    </div>
  )
}
