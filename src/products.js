export const products = [
    {
      id: 1,
      name: "Apple AirPods",
      price: "$95.00",
      rating:5,
      description:
        "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
      image: '//images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
      category:['electronics', 'music']
    },
    {
      id: 2,
      name: "Unisex Sports Baseball Cap - Black",
      price: "$2.99",
      rating:4,
      description:
        "Unisex Baseball Face Cap High Quality   Fashionable   Available color: Black   Weight: 0.2KG",
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/4220191/1.jpg?9380',
      category:['fashion', 'cloth']
    },
    {
      id: 3,
      name: "Men's Waterproof Quartz Watch- Black",
      price: "$4.99",
      rating:5,
      description:
        "Jazz up your outfits and add sophistication to your look with this exquisite watch that has been specially designed for that personality of class and style.",
      image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/3968902/1.jpg?6208',
      category:['electronics', 'smartwatch']
    },
    {
      id: 4,
      name: "Starlink Standard Kit",
      price: "$504.99",
      rating:3,
      description:
        "Engineered by SpaceX, Starlink is designed to deliver high-speed, low-latency internet to the most rural and remote locations around the world. ",
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/3439362/1.jpg?6192',
      category:['electronics', 'tech', 'internet services']
    },
    {
      id: 5,
      name: "Apple IPhone 13 Pro Max - 6.7'' - Blue",
      price: "$699.99",
      rating:5,
      description:
        "Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording",
      image: 'data:image/jpeg;base64,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',
      category:['electronics', 'Smartphones']
    },
    {
      id: 6,
      name: "Men Lightweight Winter Jacket - White",
      price: "$3.99",
      rating:4,
      description:
        "The concept is designed to suit the very desire of having most of our everyday motivations in simple, handy, convenient, comfortable, and easy-to-handle wear. It's capable of bringing out a lot of vibe in fact, all-in-one.",
      image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/183283/1.jpg?1710',
      category:['fashion', 'cloth']
    },
    {
      id: 7,
      name: "ASHION Casual Sneakers: Suede Design",
      price: "$8.99",
      rating:5,
      description:
        "The sleek design and soft, elastic insole provide exceptional comfort and support, offering a superior wearing experience.",
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/2526372/1.jpg?0124https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/2526372/1.jpg?0124',
      category:['fashion', 'cloth', 'shoe', 'footwear']
    }, 
      {
      id: 8,
      name: "itel 32 Inches LED TV (A3250) ",
      price: "$56.99",
      rating:5,
      description:
        "Immerse yourself in the world of entertainment with the Itel 32 Inches LED TV (A3250). This state-of-the-art LED TV combines cutting-edge technology with a sleek and modern design to provide an unparalleled viewing experience.",
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/5031362/1.jpg?0002',
      category:['electronics', 'tv', 'home appliances']
    },
    {
      id: 9,
      name: "Ninja 3 IN 1 FOOD BLENDER",
      price: "$170.99",
      rating:2,
      description:
        "Easily Create Anything From Dips To Drinks, Doughs To Desserts With This Next-Generation Ninja Food Processor, Multi-Serve Blender And Personal Blender In One, Complete With Interchangeable Blades And Attachments.",
      image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/714768/1.jpg?1948',
      category:['electronics', 'food', 'culinary','home appliances']
    },
    {
      id: 10,
      name: "Plain Mens T-shirts Combo Of 4",
      price: "$5.00",
      rating:2,
      description:
        "This versatile T-Shirt is the best fit for your daily grind, a weekend get together or that upcoming date. It is made from comfortable and durable cotton fabric.",
      image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/267579/1.jpg?0879',
      category:['fashion', 'cloth']
    },
   
  ];
