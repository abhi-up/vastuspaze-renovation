import aboutImage from "../assets/about.webp"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mx-4 mb-12">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img
            src={aboutImage}
            alt="About VastuSpaze"
            className="w-full h-auto "
          />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
          At VastuSpaze, we turn houses into stunning dream homes that blend
          elegance, comfort, and functionality. With over a decade of experience
          and a passion for exceptional design, our team of skilled
          professionals is dedicated to crafting spaces that inspire and endure.
          From sleek modern kitchens and spa-like bathrooms to serene outdoor
          retreats and productive home offices, we bring creativity and
          precision to every project. Each renovation is thoughtfully tailored
          to reflect your unique lifestyle and aspirations. At VastuSpaze, our
          mission is to elevate the beauty and functionality of your home —
          creating a space where you don’t just live, but truly thrive.
        </p>
      </div>
    </section>
  )
}

export default About
