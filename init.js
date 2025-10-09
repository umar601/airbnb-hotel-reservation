const mongoose = require("mongoose");

const user = require("./models/airbnb");

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
    
}

main()
.then(()=>{
    console.log("connected successfully of init");
})
.catch((err)=>{

    console.log(err);
})


user.insertMany([
  {
    type: "Hotel",
    sellername: "Pearl Continental Lahore",
    sellno: "03001234567",
    price: 15000,
    location: "Shahrah-e-Quaid-e-Azam",
    city: "Lahore",
    description: "5-star luxury hotel with pool, restaurants, and modern rooms.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Serena Hotel Islamabad",
    sellno: "03219876543",
    price: 18000,
    location: "Khayaban-e-Suhrawardy, G-5",
    city: "Islamabad",
    description: "Premium hotel near diplomatic enclave with spa and fine dining.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1559599101-f09722fb4948",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        "https://images.unsplash.com/photo-1584132869994-873f9363a562",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Avari Towers Karachi",
    sellno: "03451239876",
    price: 14000,
    location: "Fatima Jinnah Road",
    city: "Karachi",
    description: "Luxury business hotel with rooftop dining and sea views.",
    status: "Booked",
    images: {
      url: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Hotel One Multan",
    sellno: "03101122334",
    price: 7000,
    location: "Old Bahawalpur Road",
    city: "Multan",
    description: "Affordable modern hotel with spacious rooms and parking.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
        "https://images.unsplash.com/photo-1559599101-f09722fb4948",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1584132869994-873f9363a562"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Shangrila Resort Skardu",
    sellno: "03330011221",
    price: 12000,
    location: "Upper Kachura Lake",
    city: "Skardu",
    description: "Beautiful resort surrounded by mountains and lake view.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Faletti’s Hotel Lahore",
    sellno: "03005554433",
    price: 11000,
    location: "Egerton Road",
    city: "Lahore",
    description: "Heritage hotel combining colonial charm with luxury.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1584132869994-873f9363a562",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Beach Luxury Hotel",
    sellno: "03224445566",
    price: 8500,
    location: "Moulvi Tamizuddin Khan Road",
    city: "Karachi",
    description: "Seaside hotel with family suites and restaurants.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Lockwood Hotel Murree",
    sellno: "03440001122",
    price: 9000,
    location: "Kashmir Point",
    city: "Murree",
    description: "Mountain view hotel with cozy rooms and rooftop dining.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1584132869994-873f9363a562",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Hotel Crown Inn Quetta",
    sellno: "03127778899",
    price: 6000,
    location: "Jinnah Road",
    city: "Quetta",
    description: "Budget-friendly hotel with basic amenities.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1559599101-f09722fb4948"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  },
  {
    type: "Hotel",
    sellername: "Serena Hotel Swat",
    sellno: "03334443322",
    price: 10000,
    location: "Malam Jabba Road",
    city: "Swat",
    description: "Luxury hotel with mountain views and cultural interiors.",
    status: "Available",
    images: {
      url: [
        "https://images.unsplash.com/photo-1584132869994-873f9363a562",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
      ],
      filename: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ]
    }
  }
]);
