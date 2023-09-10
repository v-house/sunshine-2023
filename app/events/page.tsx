import React from "react";

interface Event {
  heading: string;
  date: string;
  description: string;
  images: string[];
}

const events: Event[] = [
  {
    heading: "World Esports Day",
    date: "September 15, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo? Veritatis, officia et eveniet possimus incidunt qui soluta repellendus ipsam natus saepe ea quae maxime. Voluptates libero quam optio voluptate delectus molestiae nobis!",
    images: [
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
    ],
  },
  {
    heading: "Event 1",
    date: "September 15, 2023",
    description: "Description for Event 1",
    images: [
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
    ],
  },
  {
    heading: "Event 1",
    date: "September 15, 2023",
    description: "Description for Event 1",
    images: [
      "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
      "https://wallpapercave.com/wp/wp5090673.jpg",
      "https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A",
    ],
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Events</h1>
      <div className="grid grid-cols-1">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-2">
            <div className="flex flex-col lg:flex-row justify-between mb-2">
              <h2 className="text-xl text-slate-800 font-semibold mb-2 lg:mb-0">
                {event.heading}
              </h2>
              <p className="text-gray-600 lg:self-end">{event.date}</p>
            </div>
            <p className="text-neutral-800">{event.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-evenly">
              {event.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                >
                  <img
                    src={image}
                    alt={`Event ${event.heading} Image ${imgIndex + 1}`}
                    className="w-full h-48 object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
