import React from 'react';

function ServiceSection() {
  const services = [
    {
      title: 'United States',
      imageUrl: 'https://www.thestatesman.com/wp-content/uploads/2020/09/QT-Indian-students.jpg',
      description: 'Description for Service 1',
    },
    {
      title: 'Germany',
      imageUrl: 'https://images.shiksha.com/mediadata/images/articles/1693247327php9Ixvyk.jpeg',
      description: 'Description for Service 2',
    },
    {
      title: 'Australia',
      imageUrl: 'https://www.savethestudent.org/uploads/Woman-student-graduate-university-cambridge-money-pound-signs-cash.jpg',
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
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
