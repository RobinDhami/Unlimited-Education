import React from "react";
import Navbar from "../Navbar/Navbar";
function program() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Training Programs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Develop Your Skills</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At XYZ Futsal Academy, we offer top-notch training programs designed to enhance your skills on and off the field.
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Replace the video iframe with your training video */}
              <iframe title="Training Video" className="w-full h-full" src="https://www.youtube.com/embed/yourtrainingvideourl" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Training Programs</h3>
            <p className="mt-4 text-xl text-gray-500">
              Our training programs are tailored to players of all skill levels, from beginners to advanced. We focus on fundamental techniques, tactical awareness, and physical conditioning.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              Whether you're looking to improve your dribbling, passing, shooting, or defensive skills, our experienced coaches are here to help you reach your full potential.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tournaments</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Compete at the Highest Level</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join our exciting tournaments and showcase your skills against top-level competition from around the region.
            </p>
          </div>

          <div className="mt-20">
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none">
              {/* Replace the tournament image with your own */}
              <img className="w-full h-auto" src="/tournament-image.jpg" alt="Tournament" />
            </div>
          </div>

          <div className="mt-12 text-xl text-gray-500">
            <p>
              Our tournaments are not just about winning trophies, but also about building character, sportsmanship, and camaraderie. Join us for an unforgettable experience on and off the field.
            </p>
            <p className="mt-4">
              Stay tuned for updates on our upcoming tournaments and events. We look forward to seeing you on the pitch!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default program;
