import './pages.css'

export default function AboutUs() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-4xl p-5">
        
        <div className="sm:w-1/2 aboutimgbox">
          <div className="image object-center text-center">
            <img src="https://www.shutterstock.com/image-photo/portrait-happy-doctors-nurses-other-600nw-2261969781.jpg" />
          </div>
        </div>

        <div className="sm:w-1/2 p-5 aboutinfobox">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl pb-4 sm:text-4xl">
              About <span className="text-cyan-800">Our Company</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
