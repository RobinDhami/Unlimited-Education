import { useState } from "react";
function ServiceSection() {
   const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle showFullDescription state
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const services = [
    {
      title: 'Programming',
      imageUrl: 'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-11-at-11.36.48-AM.png',
      description: `At UED, we're passionate about empowering the next generation with essential programming skills. 
      Through our Programming Education Partnership, we collaborate with schools to offer comprehensive programming courses tailored to students of all ages. 
      Our expert instructors guide students through hands-on learning experiences, teaching fundamental concepts and cutting-edge technologies. 
      From coding basics to advanced software development, we provide engaging curriculum and resources to ignite curiosity and foster innovation.
      Join us in preparing students for success in the digital age with our dynamic programming education program.`,
      
    },
    {
      title: 'Robotics',
      imageUrl: 'https://www.teachkidsrobotics.com/wp-content/uploads/2021/12/flickr_StephenChin_CCBY20.jpg',
      description: 'Description for Service 2',
    },
    {
      title: 'Globalizatio',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6vG97mr7q5kx-SEVZz7B6f7MqtXFGoPMpUc6AQXkA&s',
      description: 'Description for Service 3',
    },
    {
      title: 'United States',
      imageUrl: 'https://thumbs.dreamstime.com/b/university-students-sitting-together-table-books-laptop-happy-young-people-doing-group-study-library-130491501.jpg',
      description: 'Description for Service 1',
    },
    {
      title: 'Germany',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq15DgkPvUBeH7u-K3odYIYMPieIh9qzEQmED7IREMvQ&s',
      description: 'Description for Service 2',
    },
    {
      title: 'Australia',
      imageUrl: 'https://www.savethestudent.org/uploads/Woman-student-graduate-university-cambridge-money-pound-signs-cash.jpg',
      description: 'Description for Service 3',
    }
  ];

  return (
    <div className="bg-white py-12" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{service.title}</h3>
                {/* Conditional rendering of description */}
                <p className="text-gray-600">
                  {showFullDescription ? service.description : `${service.description.slice(0, 150)}...`}
                </p>
                {/* Render toggle button only if description is longer than 4-5 lines */}
                {service.description.length > 150 && (
                  <button onClick={toggleDescription} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {showFullDescription ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;