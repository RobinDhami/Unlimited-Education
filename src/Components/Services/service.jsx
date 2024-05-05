import { Link } from "react-router-dom";

function ServiceSection() {

  const services = [
    {
      url:'/program',
      title: 'Programming',
      imageUrl: 'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-11-at-11.36.48-AM.png',
      description: `Prepare your child for the future with our dynamic Robotics Education Program. At [School Name], we offer an immersive learning experience that combines hands-on activities with cutting-edge technology. Our expert instructors guide students through the exciting world of robotics.`,
      
    },
    {
      url:'/robo',
      title: 'Robotics',
      imageUrl: 'https://www.teachkidsrobotics.com/wp-content/uploads/2021/12/flickr_StephenChin_CCBY20.jpg',
      description: 'Prepare your child for the future with our dynamic Robotics Education Program. At [School Name], we offer an immersive learning experience that combines hands-on activities with cutting-edge technology. Our expert instructors guide students through the exciting world of robotics.',
    },
    {
      url:'/global',
      title: 'Globalization',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6vG97mr7q5kx-SEVZz7B6f7MqtXFGoPMpUc6AQXkA&s',
      description: 'Prepare your child for the future with our dynamic Robotics Education Program. At [School Name], we offer an immersive learning experience that combines hands-on activities with cutting-edge technology. Our expert instructors guide students through the exciting world of robotics.',
    },
    {
      url:'/culture',
      title: 'Culture and Arts',
      imageUrl: 'https://thumbs.dreamstime.com/b/university-students-sitting-together-table-books-laptop-happy-young-people-doing-group-study-library-130491501.jpg',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field',
    },
    {
      url:'/sport',
      title: 'Sports',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq15DgkPvUBeH7u-K3odYIYMPieIh9qzEQmED7IREMvQ&s',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field.',
    },
    {
      url:'/train',
      title: 'Parent Teacher Training',
      imageUrl: 'https://www.savethestudent.org/uploads/Woman-student-graduate-university-cambridge-money-pound-signs-cash.jpg',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field',
    }
  ];

    return (
      <div className="bg-white py-12" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through services array */}
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-2">{service.title}</h3>
                  {/* Render description */}
                  <p className="text-gray-600">{service.description}</p>
                  {/* Render Read More button */}
                  <Link to={service.url}>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ServiceSection;
