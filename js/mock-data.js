const mockAuctions = [{
      "title": "Kilpatrick Estate Auction",
      "description": "Massive collector's estate including coins, dolls, and antique furniture.",
      "image": "https://picsum.photos/seed/1/400/300",
      "auctionId": 1
    },
    {
      "title": "Modern Art Collection",
      "description": "A curated collection of modern and contemporary art from emerging artists.",
      "image": "https://picsum.photos/seed/2/400/300",
      "auctionId": 2
    },
    {
      "title": "Vintage Car Auction",
      "description": "Featuring classic cars from the 1950s and 60s, all in pristine condition.",
      "image": "https://picsum.photos/seed/3/400/300",
      "auctionId": 3
    },
    {
      "title": "Jewelry and Watch Auction",
      "description": "Exclusive collection of luxury watches, diamonds, and rare gemstones.",
      "image": "https://picsum.photos/seed/4/400/300",
      "auctionId": 4
    },
    {
      "title": "Rare Book Collection",
      "description": "First editions and signed copies from world-renowned authors.",
      "image": "https://picsum.photos/seed/5/400/300",
      "auctionId": 5
    },
    {
      "title": "Sports Memorabilia Auction",
      "description": "Game-worn jerseys, signed balls, and other memorabilia from sports legends.",
      "image": "https://picsum.photos/seed/6/400/300",
      "auctionId": 6
    },
    {
      "title": "Antique Furniture Collection",
      "description": "Fine antique furniture from Victorian and Edwardian periods.",
      "image": "https://picsum.photos/seed/7/400/300",
      "auctionId": 7
    },
    {
      "title": "Fine Wine and Spirits",
      "description": "Rare wines, whiskeys, and spirits from prestigious estates.",
      "image": "https://picsum.photos/seed/8/400/300",
      "auctionId": 8
    },
    {
      "title": "Asian Art and Ceramics",
      "description": "Authentic Asian art, pottery, and ceramics from various dynasties.",
      "image": "https://picsum.photos/seed/9/400/300",
      "auctionId": 9
    },
    {
      "title": "Musical Instruments",
      "description": "Vintage and rare musical instruments including guitars, violins, and pianos.",
      "image": "https://picsum.photos/seed/10/400/300",
      "auctionId": 10
    },
    {
      "title": "Movie Memorabilia",
      "description": "Props, costumes, and posters from classic and modern films.",
      "image": "https://picsum.photos/seed/11/400/300",
      "auctionId": 11
    },
    {
      "title": "Coin and Currency Auction",
      "description": "Rare coins, banknotes, and currency from around the world.",
      "image": "https://picsum.photos/seed/12/400/300",
      "auctionId": 12
    },
    {
      "title": "Vintage Fashion",
      "description": "Designer clothing, accessories, and haute couture from fashion houses.",
      "image": "https://picsum.photos/seed/13/400/300",
      "auctionId": 13
    },
    {
      "title": "Scientific Instruments",
      "description": "Antique telescopes, microscopes, and other scientific equipment.",
      "image": "https://picsum.photos/seed/14/400/300",
      "auctionId": 14
    },
    {
      "title": "Comic Book Collection",
      "description": "Rare and vintage comic books including first editions and signed copies.",
      "image": "https://picsum.photos/seed/15/400/300",
      "auctionId": 15
    },
    {
      "title": "Toy and Model Collection",
      "description": "Vintage toys, model trains, and collectible figurines.",
      "image": "https://picsum.photos/seed/16/400/300",
      "auctionId": 16
    },
    {
      "title": "Photography Collection",
      "description": "Vintage cameras, photographs, and darkroom equipment.",
      "image": "https://picsum.photos/seed/17/400/300",
      "auctionId": 17
    },
    {
      "title": "Military Memorabilia",
      "description": "Historic military uniforms, medals, and weaponry.",
      "image": "https://picsum.photos/seed/18/400/300",
      "auctionId": 18
    },
    {
      "title": "Crystal and Glassware",
      "description": "Fine crystal, art glass, and decorative glassware.",
      "image": "https://picsum.photos/seed/19/400/300",
      "auctionId": 19
    },
    {
      "title": "Stamps and Postal History",
      "description": "Rare stamps, first day covers, and postal memorabilia.",
      "image": "https://picsum.photos/seed/20/400/300",
      "auctionId": 20
    },
    {
      "title": "Garden and Architectural",
      "description": "Garden statuary, fountains, and architectural salvage.",
      "image": "https://picsum.photos/seed/21/400/300",
      "auctionId": 21
    },
    {
      "title": "Tribal Art and Artifacts",
      "description": "Authentic tribal art, masks, and artifacts from around the world.",
      "image": "https://picsum.photos/seed/22/400/300",
      "auctionId": 22
    },
    {
      "title": "Vintage Electronics",
      "description": "Classic radios, televisions, and early computing devices.",
      "image": "https://picsum.photos/seed/23/400/300",
      "auctionId": 23
    },
    {
      "title": "Nautical and Marine",
      "description": "Ship models, navigation instruments, and maritime art.",
      "image": "https://picsum.photos/seed/24/400/300",
      "auctionId": 24
    },
    {
      "title": "Western and Cowboy",
      "description": "Western memorabilia, saddles, spurs, and cowboy art.",
      "image": "https://picsum.photos/seed/25/400/300",
      "auctionId": 25
    },
    {
      "title": "Silver and Silverware",
      "description": "Sterling silver, silverplate, and antique silverware.",
      "image": "https://picsum.photos/seed/26/400/300",
      "auctionId": 26
    },
    {
      "title": "Maps and Atlases",
      "description": "Antique maps, atlases, and cartographic materials.",
      "image": "https://picsum.photos/seed/27/400/300",
      "auctionId": 27
    },
    {
      "title": "Clocks and Timepieces",
      "description": "Antique clocks, pocket watches, and horological instruments.",
      "image": "https://picsum.photos/seed/28/400/300",
      "auctionId": 28
    },
    {
      "title": "Textiles and Rugs",
      "description": "Oriental rugs, tapestries, and vintage textiles.",
      "image": "https://picsum.photos/seed/29/400/300",
      "auctionId": 29
    },
    {
      "title": "Lighting and Lamps",
      "description": "Antique chandeliers, lamps, and lighting fixtures.",
      "image": "https://picsum.photos/seed/30/400/300",
      "auctionId": 30
    },
    {
      "title": "Porcelain and China",
      "description": "Fine porcelain, bone china, and decorative ceramics.",
      "image": "https://picsum.photos/seed/31/400/300",
      "auctionId": 31
    },
    {
      "title": "Sports Equipment",
      "description": "Vintage sports equipment, trophies, and athletic gear.",
      "image": "https://picsum.photos/seed/32/400/300",
      "auctionId": 32
    },
    {
      "title": "Advertising and Signs",
      "description": "Vintage advertising signs, posters, and promotional items.",
      "image": "https://picsum.photos/seed/33/400/300",
      "auctionId": 33
    },
    {
      "title": "Religious Art and Icons",
      "description": "Religious paintings, icons, and ecclesiastical items.",
      "image": "https://picsum.photos/seed/34/400/300",
      "auctionId": 34
    },
    {
      "title": "Medical and Pharmacy",
      "description": "Antique medical instruments, pharmacy bottles, and apothecary items.",
      "image": "https://picsum.photos/seed/35/400/300",
      "auctionId": 35
    }
  ];

  const mockLots = [{
      "title": "1920s Silver Coin",
      "description": "A rare silver coin from the 1920s in excellent condition.",
      "thumb": "https://picsum.photos/seed/11/400/300",
      "images": ["https://picsum.photos/seed/11a/800/600", "https://picsum.photos/seed/11b/800/600"],
      "lotId": 101,
      "auctionId": 1,
      "starting_bid": 1400,
      "reserve": false
    },
    {
      "title": "Abstract Painting by Jane Doe",
      "description": "A vibrant abstract painting by contemporary artist Jane Doe.",
      "thumb": "https://picsum.photos/seed/12/400/300",
      "images": ["https://picsum.photos/seed/12a/800/600", "https://picsum.photos/seed/12b/800/600"],
      "lotId": 102,
      "auctionId": 2,
      "starting_bid": 700,
      "reserve": false
    },
    {
      "title": "1965 Ford Mustang",
      "description": "A classic 1965 Ford Mustang, fully restored and in running condition.",
      "thumb": "https://picsum.photos/seed/13/400/300",
      "images": ["https://picsum.photos/seed/13a/800/600", "https://picsum.photos/seed/13b/800/600", "https://picsum.photos/seed/13c/800/600"],
      "lotId": 103,
      "auctionId": 3,
      "starting_bid": 3800,
      "reserve": false
    },
    {
      "title": "Rolex Submariner Watch",
      "description": "A luxury Rolex Submariner watch with original box and papers.",
      "thumb": "https://picsum.photos/seed/14/400/300",
      "images": ["https://picsum.photos/seed/14a/800/600", "https://picsum.photos/seed/14b/800/600"],
      "lotId": 104,
      "auctionId": 4,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "First Edition 'The Great Gatsby'",
      "description": "A first edition copy of F. Scott Fitzgerald's 'The Great Gatsby'.",
      "thumb": "https://picsum.photos/seed/15/400/300",
      "images": ["https://picsum.photos/seed/15a/800/600", "https://picsum.photos/seed/15b/800/600"],
      "lotId": 105,
      "auctionId": 5,
      "starting_bid": 2800,
      "reserve": true
    },
    {
      "title": "Signed Baseball by Babe Ruth",
      "description": "A baseball signed by the legendary Babe Ruth.",
      "thumb": "https://picsum.photos/seed/16/400/300",
      "images": ["https://picsum.photos/seed/16a/800/600", "https://picsum.photos/seed/16b/800/600"],
      "lotId": 106,
      "auctionId": 6,
      "starting_bid": 1600,
      "reserve": false
    },
    {
      "title": "Antique Wooden Doll",
      "description": "A beautifully crafted antique wooden doll from the early 1900s.",
      "thumb": "https://picsum.photos/seed/17/400/300",
      "images": ["https://picsum.photos/seed/17a/800/600", "https://picsum.photos/seed/17b/800/600"],
      "lotId": 107,
      "auctionId": 1,
      "starting_bid": 1600,
      "reserve": true
    },
    {
      "title": "Contemporary Sculpture",
      "description": "A striking contemporary sculpture made from mixed media.",
      "thumb": "https://picsum.photos/seed/18/400/300",
      "images": ["https://picsum.photos/seed/18a/800/600", "https://picsum.photos/seed/18b/800/600"],
      "lotId": 108,
      "auctionId": 2,
      "starting_bid": 3200,
      "reserve": false
    },
    {
      "title": "1970s Chevrolet Camaro",
      "description": "A vintage 1970s Chevrolet Camaro in excellent condition.",
      "thumb": "https://picsum.photos/seed/19/400/300",
      "images": ["https://picsum.photos/seed/19a/800/600", "https://picsum.photos/seed/19b/800/600"],
      "lotId": 109,
      "auctionId": 3,
      "starting_bid": 2700,
      "reserve": false
    },
    {
      "title": "Diamond Necklace",
      "description": "An exquisite diamond necklace with a platinum setting.",
      "thumb": "https://picsum.photos/seed/20/400/300",
      "images": ["https://picsum.photos/seed/20a/800/600", "https://picsum.photos/seed/20b/800/600"],
      "lotId": 110,
      "auctionId": 4,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Signed Copy of '1984' by George Orwell",
      "description": "A signed first edition of George Orwell's dystopian novel '1984'.",
      "thumb": "https://picsum.photos/seed/21/400/300",
      "images": ["https://picsum.photos/seed/21a/800/600", "https://picsum.photos/seed/21b/800/600"],
      "lotId": 111,
      "auctionId": 5,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Game-Worn Jersey by Michael Jordan",
      "description": "An authentic game-worn jersey from basketball legend Michael Jordan.",
      "thumb": "https://picsum.photos/seed/22/400/300",
      "images": ["https://picsum.photos/seed/22a/800/600", "https://picsum.photos/seed/22b/800/600"],
      "lotId": 112,
      "auctionId": 6,
      "starting_bid": 2900,
      "reserve": true
    },
    {
      "title": "Antique Wooden Chair",
      "description": "A finely crafted antique wooden chair from the Victorian era.",
      "thumb": "https://picsum.photos/seed/23/400/300",
      "images": ["https://picsum.photos/seed/23a/800/600", "https://picsum.photos/seed/23b/800/600"],
      "lotId": 113,
      "auctionId": 1,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Landscape Painting by John Smith",
      "description": "A serene landscape painting by renowned artist John Smith.",
      "thumb": "https://picsum.photos/seed/24/400/300",
      "images": ["https://picsum.photos/seed/24a/800/600", "https://picsum.photos/seed/24b/800/600"],
      "lotId": 114,
      "auctionId": 2,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "1950s Cadillac",
      "description": "A classic 1950s Cadillac in mint condition.",
      "thumb": "https://picsum.photos/seed/25/400/300",
      "images": ["https://picsum.photos/seed/25a/800/600", "https://picsum.photos/seed/25b/800/600"],
      "lotId": 115,
      "auctionId": 3,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Emerald Ring",
      "description": "A stunning emerald ring set in gold.",
      "thumb": "https://picsum.photos/seed/26/400/300",
      "images": ["https://picsum.photos/seed/26a/800/600", "https://picsum.photos/seed/26b/800/600"],
      "lotId": 116,
      "auctionId": 4,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "First Edition 'To Kill a Mockingbird'",
      "description": "A first edition copy of Harper Lee's 'To Kill a Mockingbird'.",
      "thumb": "https://picsum.photos/seed/27/400/300",
      "images": ["https://picsum.photos/seed/27a/800/600", "https://picsum.photos/seed/27b/800/600"],
      "lotId": 117,
      "auctionId": 5,
      "starting_bid": 2000,
      "reserve": false
    },
    {
      "title": "Signed Football by Tom Brady",
      "description": "A football signed by NFL star Tom Brady.",
      "thumb": "https://picsum.photos/seed/28/400/300",
      "images": ["https://picsum.photos/seed/28a/800/600", "https://picsum.photos/seed/28b/800/600"],
      "lotId": 118,
      "auctionId": 6,
      "starting_bid": 4600,
      "reserve": true
    },
    {
      "title": "Vintage Pocket Watch",
      "description": "A beautifully engraved vintage pocket watch from the early 1900s.",
      "thumb": "https://picsum.photos/seed/29/400/300",
      "images": ["https://picsum.photos/seed/29a/800/600", "https://picsum.photos/seed/29b/800/600"],
      "lotId": 119,
      "auctionId": 1,
      "starting_bid": 900,
      "reserve": false
    },
    {
      "title": "Modern Art Print",
      "description": "A limited edition modern art print by a famous artist.",
      "thumb": "https://picsum.photos/seed/30/400/300",
      "images": ["https://picsum.photos/seed/30a/800/600", "https://picsum.photos/seed/30b/800/600"],
      "lotId": 120,
      "auctionId": 2,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "1980s BMW M3",
      "description": "A classic 1980s BMW M3 in excellent condition.",
      "thumb": "https://picsum.photos/seed/31/400/300",
      "images": ["https://picsum.photos/seed/31a/800/600", "https://picsum.photos/seed/31b/800/600"],
      "lotId": 121,
      "auctionId": 3,
      "starting_bid": 2800,
      "reserve": true
    },
    {
      "title": "Lot Item 122 - Auction 7",
      "description": "A unique collectible item from auction 7, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/122/400/300",
      "images": ["https://picsum.photos/seed/122-0/800/600", "https://picsum.photos/seed/122-1/800/600", "https://picsum.photos/seed/122-2/800/600", "https://picsum.photos/seed/122-3/800/600"],
      "lotId": 122,
      "auctionId": 7,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 123 - Auction 7",
      "description": "A unique collectible item from auction 7, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/123/400/300",
      "images": ["https://picsum.photos/seed/123-0/800/600", "https://picsum.photos/seed/123-1/800/600"],
      "lotId": 123,
      "auctionId": 7,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 124 - Auction 7",
      "description": "A unique collectible item from auction 7, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/124/400/300",
      "images": ["https://picsum.photos/seed/124-0/800/600", "https://picsum.photos/seed/124-1/800/600"],
      "lotId": 124,
      "auctionId": 7,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Lot Item 125 - Auction 8",
      "description": "A unique collectible item from auction 8, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/125/400/300",
      "images": ["https://picsum.photos/seed/125-0/800/600", "https://picsum.photos/seed/125-1/800/600", "https://picsum.photos/seed/125-2/800/600", "https://picsum.photos/seed/125-3/800/600"],
      "lotId": 125,
      "auctionId": 8,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 126 - Auction 8",
      "description": "A unique collectible item from auction 8, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/126/400/300",
      "images": ["https://picsum.photos/seed/126-0/800/600", "https://picsum.photos/seed/126-1/800/600", "https://picsum.photos/seed/126-2/800/600"],
      "lotId": 126,
      "auctionId": 8,
      "starting_bid": 2900,
      "reserve": false
    },
    {
      "title": "Lot Item 127 - Auction 8",
      "description": "A unique collectible item from auction 8, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/127/400/300",
      "images": ["https://picsum.photos/seed/127-0/800/600", "https://picsum.photos/seed/127-1/800/600"],
      "lotId": 127,
      "auctionId": 8,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 128 - Auction 8",
      "description": "A unique collectible item from auction 8, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/128/400/300",
      "images": ["https://picsum.photos/seed/128-0/800/600", "https://picsum.photos/seed/128-1/800/600", "https://picsum.photos/seed/128-2/800/600"],
      "lotId": 128,
      "auctionId": 8,
      "starting_bid": 1100,
      "reserve": false
    },
    {
      "title": "Lot Item 129 - Auction 9",
      "description": "A unique collectible item from auction 9, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/129/400/300",
      "images": ["https://picsum.photos/seed/129-0/800/600", "https://picsum.photos/seed/129-1/800/600", "https://picsum.photos/seed/129-2/800/600", "https://picsum.photos/seed/129-3/800/600"],
      "lotId": 129,
      "auctionId": 9,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 130 - Auction 9",
      "description": "A unique collectible item from auction 9, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/130/400/300",
      "images": ["https://picsum.photos/seed/130-0/800/600", "https://picsum.photos/seed/130-1/800/600", "https://picsum.photos/seed/130-2/800/600"],
      "lotId": 130,
      "auctionId": 9,
      "starting_bid": 3500,
      "reserve": true
    },
    {
      "title": "Lot Item 131 - Auction 9",
      "description": "A unique collectible item from auction 9, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/131/400/300",
      "images": ["https://picsum.photos/seed/131-0/800/600", "https://picsum.photos/seed/131-1/800/600", "https://picsum.photos/seed/131-2/800/600"],
      "lotId": 131,
      "auctionId": 9,
      "starting_bid": 1000,
      "reserve": false
    },
    {
      "title": "Lot Item 132 - Auction 10",
      "description": "A unique collectible item from auction 10, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/132/400/300",
      "images": ["https://picsum.photos/seed/132-0/800/600", "https://picsum.photos/seed/132-1/800/600", "https://picsum.photos/seed/132-2/800/600", "https://picsum.photos/seed/132-3/800/600"],
      "lotId": 132,
      "auctionId": 10,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 133 - Auction 10",
      "description": "A unique collectible item from auction 10, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/133/400/300",
      "images": ["https://picsum.photos/seed/133-0/800/600", "https://picsum.photos/seed/133-1/800/600", "https://picsum.photos/seed/133-2/800/600"],
      "lotId": 133,
      "auctionId": 10,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 134 - Auction 10",
      "description": "A unique collectible item from auction 10, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/134/400/300",
      "images": ["https://picsum.photos/seed/134-0/800/600", "https://picsum.photos/seed/134-1/800/600", "https://picsum.photos/seed/134-2/800/600", "https://picsum.photos/seed/134-3/800/600"],
      "lotId": 134,
      "auctionId": 10,
      "starting_bid": 1900,
      "reserve": true
    },
    {
      "title": "Lot Item 135 - Auction 10",
      "description": "A unique collectible item from auction 10, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/135/400/300",
      "images": ["https://picsum.photos/seed/135-0/800/600", "https://picsum.photos/seed/135-1/800/600", "https://picsum.photos/seed/135-2/800/600"],
      "lotId": 135,
      "auctionId": 10,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 136 - Auction 10",
      "description": "A unique collectible item from auction 10, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/136/400/300",
      "images": ["https://picsum.photos/seed/136-0/800/600", "https://picsum.photos/seed/136-1/800/600"],
      "lotId": 136,
      "auctionId": 10,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 137 - Auction 11",
      "description": "A unique collectible item from auction 11, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/137/400/300",
      "images": ["https://picsum.photos/seed/137-0/800/600", "https://picsum.photos/seed/137-1/800/600", "https://picsum.photos/seed/137-2/800/600", "https://picsum.photos/seed/137-3/800/600"],
      "lotId": 137,
      "auctionId": 11,
      "starting_bid": 3000,
      "reserve": true
    },
    {
      "title": "Lot Item 138 - Auction 11",
      "description": "A unique collectible item from auction 11, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/138/400/300",
      "images": ["https://picsum.photos/seed/138-0/800/600", "https://picsum.photos/seed/138-1/800/600"],
      "lotId": 138,
      "auctionId": 11,
      "starting_bid": 2500,
      "reserve": true
    },
    {
      "title": "Lot Item 139 - Auction 11",
      "description": "A unique collectible item from auction 11, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/139/400/300",
      "images": ["https://picsum.photos/seed/139-0/800/600", "https://picsum.photos/seed/139-1/800/600", "https://picsum.photos/seed/139-2/800/600"],
      "lotId": 139,
      "auctionId": 11,
      "starting_bid": 500,
      "reserve": true
    },
    {
      "title": "Lot Item 140 - Auction 11",
      "description": "A unique collectible item from auction 11, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/140/400/300",
      "images": ["https://picsum.photos/seed/140-0/800/600", "https://picsum.photos/seed/140-1/800/600", "https://picsum.photos/seed/140-2/800/600", "https://picsum.photos/seed/140-3/800/600"],
      "lotId": 140,
      "auctionId": 11,
      "starting_bid": 2300,
      "reserve": true
    },
    {
      "title": "Lot Item 141 - Auction 11",
      "description": "A unique collectible item from auction 11, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/141/400/300",
      "images": ["https://picsum.photos/seed/141-0/800/600", "https://picsum.photos/seed/141-1/800/600", "https://picsum.photos/seed/141-2/800/600", "https://picsum.photos/seed/141-3/800/600"],
      "lotId": 141,
      "auctionId": 11,
      "starting_bid": 2600,
      "reserve": true
    },
    {
      "title": "Lot Item 142 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/142/400/300",
      "images": ["https://picsum.photos/seed/142-0/800/600", "https://picsum.photos/seed/142-1/800/600", "https://picsum.photos/seed/142-2/800/600"],
      "lotId": 142,
      "auctionId": 12,
      "starting_bid": 2200,
      "reserve": true
    },
    {
      "title": "Lot Item 143 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/143/400/300",
      "images": ["https://picsum.photos/seed/143-0/800/600", "https://picsum.photos/seed/143-1/800/600", "https://picsum.photos/seed/143-2/800/600"],
      "lotId": 143,
      "auctionId": 12,
      "starting_bid": 3000,
      "reserve": true
    },
    {
      "title": "Lot Item 144 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/144/400/300",
      "images": ["https://picsum.photos/seed/144-0/800/600", "https://picsum.photos/seed/144-1/800/600", "https://picsum.photos/seed/144-2/800/600", "https://picsum.photos/seed/144-3/800/600"],
      "lotId": 144,
      "auctionId": 12,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 145 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/145/400/300",
      "images": ["https://picsum.photos/seed/145-0/800/600", "https://picsum.photos/seed/145-1/800/600"],
      "lotId": 145,
      "auctionId": 12,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 146 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/146/400/300",
      "images": ["https://picsum.photos/seed/146-0/800/600", "https://picsum.photos/seed/146-1/800/600", "https://picsum.photos/seed/146-2/800/600", "https://picsum.photos/seed/146-3/800/600"],
      "lotId": 146,
      "auctionId": 12,
      "starting_bid": 600,
      "reserve": true
    },
    {
      "title": "Lot Item 147 - Auction 13",
      "description": "A unique collectible item from auction 13, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/147/400/300",
      "images": ["https://picsum.photos/seed/147-0/800/600", "https://picsum.photos/seed/147-1/800/600"],
      "lotId": 147,
      "auctionId": 13,
      "starting_bid": 4700,
      "reserve": true
    },
    {
      "title": "Lot Item 148 - Auction 13",
      "description": "A unique collectible item from auction 13, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/148/400/300",
      "images": ["https://picsum.photos/seed/148-0/800/600", "https://picsum.photos/seed/148-1/800/600", "https://picsum.photos/seed/148-2/800/600", "https://picsum.photos/seed/148-3/800/600"],
      "lotId": 148,
      "auctionId": 13,
      "starting_bid": 1500,
      "reserve": false
    },
    {
      "title": "Lot Item 149 - Auction 13",
      "description": "A unique collectible item from auction 13, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/149/400/300",
      "images": ["https://picsum.photos/seed/149-0/800/600", "https://picsum.photos/seed/149-1/800/600", "https://picsum.photos/seed/149-2/800/600"],
      "lotId": 149,
      "auctionId": 13,
      "starting_bid": 2200,
      "reserve": true
    },
    {
      "title": "Lot Item 150 - Auction 13",
      "description": "A unique collectible item from auction 13, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/150/400/300",
      "images": ["https://picsum.photos/seed/150-0/800/600", "https://picsum.photos/seed/150-1/800/600"],
      "lotId": 150,
      "auctionId": 13,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 151 - Auction 13",
      "description": "A unique collectible item from auction 13, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/151/400/300",
      "images": ["https://picsum.photos/seed/151-0/800/600", "https://picsum.photos/seed/151-1/800/600", "https://picsum.photos/seed/151-2/800/600"],
      "lotId": 151,
      "auctionId": 13,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 152 - Auction 14",
      "description": "A unique collectible item from auction 14, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/152/400/300",
      "images": ["https://picsum.photos/seed/152-0/800/600", "https://picsum.photos/seed/152-1/800/600", "https://picsum.photos/seed/152-2/800/600"],
      "lotId": 152,
      "auctionId": 14,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 153 - Auction 14",
      "description": "A unique collectible item from auction 14, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/153/400/300",
      "images": ["https://picsum.photos/seed/153-0/800/600", "https://picsum.photos/seed/153-1/800/600", "https://picsum.photos/seed/153-2/800/600", "https://picsum.photos/seed/153-3/800/600"],
      "lotId": 153,
      "auctionId": 14,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "Lot Item 154 - Auction 14",
      "description": "A unique collectible item from auction 14, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/154/400/300",
      "images": ["https://picsum.photos/seed/154-0/800/600", "https://picsum.photos/seed/154-1/800/600"],
      "lotId": 154,
      "auctionId": 14,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 155 - Auction 14",
      "description": "A unique collectible item from auction 14, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/155/400/300",
      "images": ["https://picsum.photos/seed/155-0/800/600", "https://picsum.photos/seed/155-1/800/600", "https://picsum.photos/seed/155-2/800/600", "https://picsum.photos/seed/155-3/800/600"],
      "lotId": 155,
      "auctionId": 14,
      "starting_bid": 4300,
      "reserve": true
    },
    {
      "title": "Lot Item 156 - Auction 14",
      "description": "A unique collectible item from auction 14, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/156/400/300",
      "images": ["https://picsum.photos/seed/156-0/800/600", "https://picsum.photos/seed/156-1/800/600", "https://picsum.photos/seed/156-2/800/600", "https://picsum.photos/seed/156-3/800/600"],
      "lotId": 156,
      "auctionId": 14,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 157 - Auction 15",
      "description": "A unique collectible item from auction 15, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/157/400/300",
      "images": ["https://picsum.photos/seed/157-0/800/600", "https://picsum.photos/seed/157-1/800/600", "https://picsum.photos/seed/157-2/800/600"],
      "lotId": 157,
      "auctionId": 15,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 158 - Auction 15",
      "description": "A unique collectible item from auction 15, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/158/400/300",
      "images": ["https://picsum.photos/seed/158-0/800/600", "https://picsum.photos/seed/158-1/800/600"],
      "lotId": 158,
      "auctionId": 15,
      "starting_bid": 2400,
      "reserve": true
    },
    {
      "title": "Lot Item 159 - Auction 15",
      "description": "A unique collectible item from auction 15, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/159/400/300",
      "images": ["https://picsum.photos/seed/159-0/800/600", "https://picsum.photos/seed/159-1/800/600", "https://picsum.photos/seed/159-2/800/600", "https://picsum.photos/seed/159-3/800/600"],
      "lotId": 159,
      "auctionId": 15,
      "starting_bid": 1300,
      "reserve": false
    },
    {
      "title": "Lot Item 160 - Auction 16",
      "description": "A unique collectible item from auction 16, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/160/400/300",
      "images": ["https://picsum.photos/seed/160-0/800/600", "https://picsum.photos/seed/160-1/800/600", "https://picsum.photos/seed/160-2/800/600"],
      "lotId": 160,
      "auctionId": 16,
      "starting_bid": 3000,
      "reserve": false
    },
    {
      "title": "Lot Item 161 - Auction 16",
      "description": "A unique collectible item from auction 16, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/161/400/300",
      "images": ["https://picsum.photos/seed/161-0/800/600", "https://picsum.photos/seed/161-1/800/600"],
      "lotId": 161,
      "auctionId": 16,
      "starting_bid": 4600,
      "reserve": false
    },
    {
      "title": "Lot Item 162 - Auction 16",
      "description": "A unique collectible item from auction 16, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/162/400/300",
      "images": ["https://picsum.photos/seed/162-0/800/600", "https://picsum.photos/seed/162-1/800/600", "https://picsum.photos/seed/162-2/800/600"],
      "lotId": 162,
      "auctionId": 16,
      "starting_bid": 1900,
      "reserve": false
    },
    {
      "title": "Lot Item 163 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/163/400/300",
      "images": ["https://picsum.photos/seed/163-0/800/600", "https://picsum.photos/seed/163-1/800/600", "https://picsum.photos/seed/163-2/800/600"],
      "lotId": 163,
      "auctionId": 17,
      "starting_bid": 3800,
      "reserve": false
    },
    {
      "title": "Lot Item 164 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/164/400/300",
      "images": ["https://picsum.photos/seed/164-0/800/600", "https://picsum.photos/seed/164-1/800/600", "https://picsum.photos/seed/164-2/800/600", "https://picsum.photos/seed/164-3/800/600"],
      "lotId": 164,
      "auctionId": 17,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 165 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/165/400/300",
      "images": ["https://picsum.photos/seed/165-0/800/600", "https://picsum.photos/seed/165-1/800/600", "https://picsum.photos/seed/165-2/800/600"],
      "lotId": 165,
      "auctionId": 17,
      "starting_bid": 1900,
      "reserve": false
    },
    {
      "title": "Lot Item 166 - Auction 18",
      "description": "A unique collectible item from auction 18, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/166/400/300",
      "images": ["https://picsum.photos/seed/166-0/800/600", "https://picsum.photos/seed/166-1/800/600"],
      "lotId": 166,
      "auctionId": 18,
      "starting_bid": 3400,
      "reserve": false
    },
    {
      "title": "Lot Item 167 - Auction 18",
      "description": "A unique collectible item from auction 18, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/167/400/300",
      "images": ["https://picsum.photos/seed/167-0/800/600", "https://picsum.photos/seed/167-1/800/600"],
      "lotId": 167,
      "auctionId": 18,
      "starting_bid": 3200,
      "reserve": false
    },
    {
      "title": "Lot Item 168 - Auction 18",
      "description": "A unique collectible item from auction 18, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/168/400/300",
      "images": ["https://picsum.photos/seed/168-0/800/600", "https://picsum.photos/seed/168-1/800/600", "https://picsum.photos/seed/168-2/800/600"],
      "lotId": 168,
      "auctionId": 18,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 169 - Auction 19",
      "description": "A unique collectible item from auction 19, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/169/400/300",
      "images": ["https://picsum.photos/seed/169-0/800/600", "https://picsum.photos/seed/169-1/800/600"],
      "lotId": 169,
      "auctionId": 19,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 170 - Auction 19",
      "description": "A unique collectible item from auction 19, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/170/400/300",
      "images": ["https://picsum.photos/seed/170-0/800/600", "https://picsum.photos/seed/170-1/800/600", "https://picsum.photos/seed/170-2/800/600", "https://picsum.photos/seed/170-3/800/600"],
      "lotId": 170,
      "auctionId": 19,
      "starting_bid": 2600,
      "reserve": true
    },
    {
      "title": "Lot Item 171 - Auction 19",
      "description": "A unique collectible item from auction 19, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/171/400/300",
      "images": ["https://picsum.photos/seed/171-0/800/600", "https://picsum.photos/seed/171-1/800/600"],
      "lotId": 171,
      "auctionId": 19,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 172 - Auction 19",
      "description": "A unique collectible item from auction 19, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/172/400/300",
      "images": ["https://picsum.photos/seed/172-0/800/600", "https://picsum.photos/seed/172-1/800/600"],
      "lotId": 172,
      "auctionId": 19,
      "starting_bid": 1100,
      "reserve": false
    },
    {
      "title": "Lot Item 173 - Auction 20",
      "description": "A unique collectible item from auction 20, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/173/400/300",
      "images": ["https://picsum.photos/seed/173-0/800/600", "https://picsum.photos/seed/173-1/800/600", "https://picsum.photos/seed/173-2/800/600"],
      "lotId": 173,
      "auctionId": 20,
      "starting_bid": 1000,
      "reserve": true
    },
    {
      "title": "Lot Item 174 - Auction 20",
      "description": "A unique collectible item from auction 20, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/174/400/300",
      "images": ["https://picsum.photos/seed/174-0/800/600", "https://picsum.photos/seed/174-1/800/600"],
      "lotId": 174,
      "auctionId": 20,
      "starting_bid": 1300,
      "reserve": false
    },
    {
      "title": "Lot Item 175 - Auction 20",
      "description": "A unique collectible item from auction 20, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/175/400/300",
      "images": ["https://picsum.photos/seed/175-0/800/600", "https://picsum.photos/seed/175-1/800/600"],
      "lotId": 175,
      "auctionId": 20,
      "starting_bid": 1900,
      "reserve": true
    },
    {
      "title": "Lot Item 176 - Auction 21",
      "description": "A unique collectible item from auction 21, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/176/400/300",
      "images": ["https://picsum.photos/seed/176-0/800/600", "https://picsum.photos/seed/176-1/800/600"],
      "lotId": 176,
      "auctionId": 21,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Lot Item 177 - Auction 21",
      "description": "A unique collectible item from auction 21, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/177/400/300",
      "images": ["https://picsum.photos/seed/177-0/800/600", "https://picsum.photos/seed/177-1/800/600", "https://picsum.photos/seed/177-2/800/600"],
      "lotId": 177,
      "auctionId": 21,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 178 - Auction 21",
      "description": "A unique collectible item from auction 21, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/178/400/300",
      "images": ["https://picsum.photos/seed/178-0/800/600", "https://picsum.photos/seed/178-1/800/600", "https://picsum.photos/seed/178-2/800/600", "https://picsum.photos/seed/178-3/800/600"],
      "lotId": 178,
      "auctionId": 21,
      "starting_bid": 1100,
      "reserve": false
    },
    {
      "title": "Lot Item 179 - Auction 21",
      "description": "A unique collectible item from auction 21, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/179/400/300",
      "images": ["https://picsum.photos/seed/179-0/800/600", "https://picsum.photos/seed/179-1/800/600", "https://picsum.photos/seed/179-2/800/600", "https://picsum.photos/seed/179-3/800/600"],
      "lotId": 179,
      "auctionId": 21,
      "starting_bid": 1600,
      "reserve": true
    },
    {
      "title": "Lot Item 180 - Auction 22",
      "description": "A unique collectible item from auction 22, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/180/400/300",
      "images": ["https://picsum.photos/seed/180-0/800/600", "https://picsum.photos/seed/180-1/800/600", "https://picsum.photos/seed/180-2/800/600"],
      "lotId": 180,
      "auctionId": 22,
      "starting_bid": 1100,
      "reserve": true
    },
    {
      "title": "Lot Item 181 - Auction 22",
      "description": "A unique collectible item from auction 22, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/181/400/300",
      "images": ["https://picsum.photos/seed/181-0/800/600", "https://picsum.photos/seed/181-1/800/600"],
      "lotId": 181,
      "auctionId": 22,
      "starting_bid": 600,
      "reserve": true
    },
    {
      "title": "Lot Item 182 - Auction 22",
      "description": "A unique collectible item from auction 22, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/182/400/300",
      "images": ["https://picsum.photos/seed/182-0/800/600", "https://picsum.photos/seed/182-1/800/600", "https://picsum.photos/seed/182-2/800/600", "https://picsum.photos/seed/182-3/800/600"],
      "lotId": 182,
      "auctionId": 22,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Lot Item 183 - Auction 22",
      "description": "A unique collectible item from auction 22, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/183/400/300",
      "images": ["https://picsum.photos/seed/183-0/800/600", "https://picsum.photos/seed/183-1/800/600", "https://picsum.photos/seed/183-2/800/600"],
      "lotId": 183,
      "auctionId": 22,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 184 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/184/400/300",
      "images": ["https://picsum.photos/seed/184-0/800/600", "https://picsum.photos/seed/184-1/800/600", "https://picsum.photos/seed/184-2/800/600"],
      "lotId": 184,
      "auctionId": 23,
      "starting_bid": 3300,
      "reserve": false
    },
    {
      "title": "Lot Item 185 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/185/400/300",
      "images": ["https://picsum.photos/seed/185-0/800/600", "https://picsum.photos/seed/185-1/800/600", "https://picsum.photos/seed/185-2/800/600"],
      "lotId": 185,
      "auctionId": 23,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 186 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/186/400/300",
      "images": ["https://picsum.photos/seed/186-0/800/600", "https://picsum.photos/seed/186-1/800/600"],
      "lotId": 186,
      "auctionId": 23,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 187 - Auction 24",
      "description": "A unique collectible item from auction 24, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/187/400/300",
      "images": ["https://picsum.photos/seed/187-0/800/600", "https://picsum.photos/seed/187-1/800/600", "https://picsum.photos/seed/187-2/800/600", "https://picsum.photos/seed/187-3/800/600"],
      "lotId": 187,
      "auctionId": 24,
      "starting_bid": 4500,
      "reserve": true
    },
    {
      "title": "Lot Item 188 - Auction 24",
      "description": "A unique collectible item from auction 24, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/188/400/300",
      "images": ["https://picsum.photos/seed/188-0/800/600", "https://picsum.photos/seed/188-1/800/600", "https://picsum.photos/seed/188-2/800/600", "https://picsum.photos/seed/188-3/800/600"],
      "lotId": 188,
      "auctionId": 24,
      "starting_bid": 500,
      "reserve": false
    },
    {
      "title": "Lot Item 189 - Auction 24",
      "description": "A unique collectible item from auction 24, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/189/400/300",
      "images": ["https://picsum.photos/seed/189-0/800/600", "https://picsum.photos/seed/189-1/800/600"],
      "lotId": 189,
      "auctionId": 24,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "Lot Item 190 - Auction 24",
      "description": "A unique collectible item from auction 24, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/190/400/300",
      "images": ["https://picsum.photos/seed/190-0/800/600", "https://picsum.photos/seed/190-1/800/600"],
      "lotId": 190,
      "auctionId": 24,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 191 - Auction 24",
      "description": "A unique collectible item from auction 24, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/191/400/300",
      "images": ["https://picsum.photos/seed/191-0/800/600", "https://picsum.photos/seed/191-1/800/600", "https://picsum.photos/seed/191-2/800/600"],
      "lotId": 191,
      "auctionId": 24,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 192 - Auction 25",
      "description": "A unique collectible item from auction 25, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/192/400/300",
      "images": ["https://picsum.photos/seed/192-0/800/600", "https://picsum.photos/seed/192-1/800/600", "https://picsum.photos/seed/192-2/800/600"],
      "lotId": 192,
      "auctionId": 25,
      "starting_bid": 1500,
      "reserve": false
    },
    {
      "title": "Lot Item 193 - Auction 25",
      "description": "A unique collectible item from auction 25, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/193/400/300",
      "images": ["https://picsum.photos/seed/193-0/800/600", "https://picsum.photos/seed/193-1/800/600"],
      "lotId": 193,
      "auctionId": 25,
      "starting_bid": 2800,
      "reserve": true
    },
    {
      "title": "Lot Item 194 - Auction 25",
      "description": "A unique collectible item from auction 25, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/194/400/300",
      "images": ["https://picsum.photos/seed/194-0/800/600", "https://picsum.photos/seed/194-1/800/600"],
      "lotId": 194,
      "auctionId": 25,
      "starting_bid": 3700,
      "reserve": true
    },
    {
      "title": "Lot Item 195 - Auction 26",
      "description": "A unique collectible item from auction 26, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/195/400/300",
      "images": ["https://picsum.photos/seed/195-0/800/600", "https://picsum.photos/seed/195-1/800/600"],
      "lotId": 195,
      "auctionId": 26,
      "starting_bid": 4100,
      "reserve": false
    },
    {
      "title": "Lot Item 196 - Auction 26",
      "description": "A unique collectible item from auction 26, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/196/400/300",
      "images": ["https://picsum.photos/seed/196-0/800/600", "https://picsum.photos/seed/196-1/800/600", "https://picsum.photos/seed/196-2/800/600"],
      "lotId": 196,
      "auctionId": 26,
      "starting_bid": 4500,
      "reserve": false
    },
    {
      "title": "Lot Item 197 - Auction 26",
      "description": "A unique collectible item from auction 26, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/197/400/300",
      "images": ["https://picsum.photos/seed/197-0/800/600", "https://picsum.photos/seed/197-1/800/600", "https://picsum.photos/seed/197-2/800/600"],
      "lotId": 197,
      "auctionId": 26,
      "starting_bid": 4300,
      "reserve": true
    },
    {
      "title": "Lot Item 198 - Auction 26",
      "description": "A unique collectible item from auction 26, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/198/400/300",
      "images": ["https://picsum.photos/seed/198-0/800/600", "https://picsum.photos/seed/198-1/800/600"],
      "lotId": 198,
      "auctionId": 26,
      "starting_bid": 4800,
      "reserve": false
    },
    {
      "title": "Lot Item 199 - Auction 26",
      "description": "A unique collectible item from auction 26, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/199/400/300",
      "images": ["https://picsum.photos/seed/199-0/800/600", "https://picsum.photos/seed/199-1/800/600", "https://picsum.photos/seed/199-2/800/600", "https://picsum.photos/seed/199-3/800/600"],
      "lotId": 199,
      "auctionId": 26,
      "starting_bid": 2900,
      "reserve": false
    },
    {
      "title": "Lot Item 200 - Auction 27",
      "description": "A unique collectible item from auction 27, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/200/400/300",
      "images": ["https://picsum.photos/seed/200-0/800/600", "https://picsum.photos/seed/200-1/800/600", "https://picsum.photos/seed/200-2/800/600"],
      "lotId": 200,
      "auctionId": 27,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 201 - Auction 27",
      "description": "A unique collectible item from auction 27, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/201/400/300",
      "images": ["https://picsum.photos/seed/201-0/800/600", "https://picsum.photos/seed/201-1/800/600", "https://picsum.photos/seed/201-2/800/600", "https://picsum.photos/seed/201-3/800/600"],
      "lotId": 201,
      "auctionId": 27,
      "starting_bid": 2600,
      "reserve": false
    },
    {
      "title": "Lot Item 202 - Auction 27",
      "description": "A unique collectible item from auction 27, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/202/400/300",
      "images": ["https://picsum.photos/seed/202-0/800/600", "https://picsum.photos/seed/202-1/800/600", "https://picsum.photos/seed/202-2/800/600", "https://picsum.photos/seed/202-3/800/600"],
      "lotId": 202,
      "auctionId": 27,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 203 - Auction 28",
      "description": "A unique collectible item from auction 28, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/203/400/300",
      "images": ["https://picsum.photos/seed/203-0/800/600", "https://picsum.photos/seed/203-1/800/600", "https://picsum.photos/seed/203-2/800/600"],
      "lotId": 203,
      "auctionId": 28,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 204 - Auction 28",
      "description": "A unique collectible item from auction 28, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/204/400/300",
      "images": ["https://picsum.photos/seed/204-0/800/600", "https://picsum.photos/seed/204-1/800/600", "https://picsum.photos/seed/204-2/800/600", "https://picsum.photos/seed/204-3/800/600"],
      "lotId": 204,
      "auctionId": 28,
      "starting_bid": 1700,
      "reserve": true
    },
    {
      "title": "Lot Item 205 - Auction 28",
      "description": "A unique collectible item from auction 28, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/205/400/300",
      "images": ["https://picsum.photos/seed/205-0/800/600", "https://picsum.photos/seed/205-1/800/600", "https://picsum.photos/seed/205-2/800/600", "https://picsum.photos/seed/205-3/800/600"],
      "lotId": 205,
      "auctionId": 28,
      "starting_bid": 1100,
      "reserve": true
    },
    {
      "title": "Lot Item 206 - Auction 28",
      "description": "A unique collectible item from auction 28, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/206/400/300",
      "images": ["https://picsum.photos/seed/206-0/800/600", "https://picsum.photos/seed/206-1/800/600", "https://picsum.photos/seed/206-2/800/600"],
      "lotId": 206,
      "auctionId": 28,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 207 - Auction 28",
      "description": "A unique collectible item from auction 28, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/207/400/300",
      "images": ["https://picsum.photos/seed/207-0/800/600", "https://picsum.photos/seed/207-1/800/600", "https://picsum.photos/seed/207-2/800/600"],
      "lotId": 207,
      "auctionId": 28,
      "starting_bid": 3300,
      "reserve": true
    },
    {
      "title": "Lot Item 208 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/208/400/300",
      "images": ["https://picsum.photos/seed/208-0/800/600", "https://picsum.photos/seed/208-1/800/600", "https://picsum.photos/seed/208-2/800/600"],
      "lotId": 208,
      "auctionId": 29,
      "starting_bid": 1000,
      "reserve": false
    },
    {
      "title": "Lot Item 209 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/209/400/300",
      "images": ["https://picsum.photos/seed/209-0/800/600", "https://picsum.photos/seed/209-1/800/600", "https://picsum.photos/seed/209-2/800/600", "https://picsum.photos/seed/209-3/800/600"],
      "lotId": 209,
      "auctionId": 29,
      "starting_bid": 1100,
      "reserve": true
    },
    {
      "title": "Lot Item 210 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/210/400/300",
      "images": ["https://picsum.photos/seed/210-0/800/600", "https://picsum.photos/seed/210-1/800/600", "https://picsum.photos/seed/210-2/800/600"],
      "lotId": 210,
      "auctionId": 29,
      "starting_bid": 4400,
      "reserve": true
    },
    {
      "title": "Lot Item 211 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/211/400/300",
      "images": ["https://picsum.photos/seed/211-0/800/600", "https://picsum.photos/seed/211-1/800/600", "https://picsum.photos/seed/211-2/800/600"],
      "lotId": 211,
      "auctionId": 29,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 212 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/212/400/300",
      "images": ["https://picsum.photos/seed/212-0/800/600", "https://picsum.photos/seed/212-1/800/600"],
      "lotId": 212,
      "auctionId": 30,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 213 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/213/400/300",
      "images": ["https://picsum.photos/seed/213-0/800/600", "https://picsum.photos/seed/213-1/800/600", "https://picsum.photos/seed/213-2/800/600"],
      "lotId": 213,
      "auctionId": 30,
      "starting_bid": 1500,
      "reserve": false
    },
    {
      "title": "Lot Item 214 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/214/400/300",
      "images": ["https://picsum.photos/seed/214-0/800/600", "https://picsum.photos/seed/214-1/800/600", "https://picsum.photos/seed/214-2/800/600"],
      "lotId": 214,
      "auctionId": 30,
      "starting_bid": 3700,
      "reserve": true
    },
    {
      "title": "Lot Item 215 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/215/400/300",
      "images": ["https://picsum.photos/seed/215-0/800/600", "https://picsum.photos/seed/215-1/800/600", "https://picsum.photos/seed/215-2/800/600", "https://picsum.photos/seed/215-3/800/600"],
      "lotId": 215,
      "auctionId": 30,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 216 - Auction 31",
      "description": "A unique collectible item from auction 31, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/216/400/300",
      "images": ["https://picsum.photos/seed/216-0/800/600", "https://picsum.photos/seed/216-1/800/600", "https://picsum.photos/seed/216-2/800/600"],
      "lotId": 216,
      "auctionId": 31,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 217 - Auction 31",
      "description": "A unique collectible item from auction 31, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/217/400/300",
      "images": ["https://picsum.photos/seed/217-0/800/600", "https://picsum.photos/seed/217-1/800/600"],
      "lotId": 217,
      "auctionId": 31,
      "starting_bid": 4400,
      "reserve": false
    },
    {
      "title": "Lot Item 218 - Auction 31",
      "description": "A unique collectible item from auction 31, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/218/400/300",
      "images": ["https://picsum.photos/seed/218-0/800/600", "https://picsum.photos/seed/218-1/800/600", "https://picsum.photos/seed/218-2/800/600", "https://picsum.photos/seed/218-3/800/600"],
      "lotId": 218,
      "auctionId": 31,
      "starting_bid": 500,
      "reserve": false
    },
    {
      "title": "Lot Item 219 - Auction 32",
      "description": "A unique collectible item from auction 32, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/219/400/300",
      "images": ["https://picsum.photos/seed/219-0/800/600", "https://picsum.photos/seed/219-1/800/600"],
      "lotId": 219,
      "auctionId": 32,
      "starting_bid": 1500,
      "reserve": true
    },
    {
      "title": "Lot Item 220 - Auction 32",
      "description": "A unique collectible item from auction 32, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/220/400/300",
      "images": ["https://picsum.photos/seed/220-0/800/600", "https://picsum.photos/seed/220-1/800/600"],
      "lotId": 220,
      "auctionId": 32,
      "starting_bid": 700,
      "reserve": true
    },
    {
      "title": "Lot Item 221 - Auction 32",
      "description": "A unique collectible item from auction 32, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/221/400/300",
      "images": ["https://picsum.photos/seed/221-0/800/600", "https://picsum.photos/seed/221-1/800/600"],
      "lotId": 221,
      "auctionId": 32,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 222 - Auction 33",
      "description": "A unique collectible item from auction 33, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/222/400/300",
      "images": ["https://picsum.photos/seed/222-0/800/600", "https://picsum.photos/seed/222-1/800/600"],
      "lotId": 222,
      "auctionId": 33,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 223 - Auction 33",
      "description": "A unique collectible item from auction 33, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/223/400/300",
      "images": ["https://picsum.photos/seed/223-0/800/600", "https://picsum.photos/seed/223-1/800/600", "https://picsum.photos/seed/223-2/800/600", "https://picsum.photos/seed/223-3/800/600"],
      "lotId": 223,
      "auctionId": 33,
      "starting_bid": 1900,
      "reserve": true
    },
    {
      "title": "Lot Item 224 - Auction 33",
      "description": "A unique collectible item from auction 33, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/224/400/300",
      "images": ["https://picsum.photos/seed/224-0/800/600", "https://picsum.photos/seed/224-1/800/600", "https://picsum.photos/seed/224-2/800/600"],
      "lotId": 224,
      "auctionId": 33,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 225 - Auction 33",
      "description": "A unique collectible item from auction 33, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/225/400/300",
      "images": ["https://picsum.photos/seed/225-0/800/600", "https://picsum.photos/seed/225-1/800/600", "https://picsum.photos/seed/225-2/800/600"],
      "lotId": 225,
      "auctionId": 33,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 226 - Auction 33",
      "description": "A unique collectible item from auction 33, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/226/400/300",
      "images": ["https://picsum.photos/seed/226-0/800/600", "https://picsum.photos/seed/226-1/800/600", "https://picsum.photos/seed/226-2/800/600"],
      "lotId": 226,
      "auctionId": 33,
      "starting_bid": 4700,
      "reserve": true
    },
    {
      "title": "Lot Item 227 - Auction 34",
      "description": "A unique collectible item from auction 34, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/227/400/300",
      "images": ["https://picsum.photos/seed/227-0/800/600", "https://picsum.photos/seed/227-1/800/600", "https://picsum.photos/seed/227-2/800/600"],
      "lotId": 227,
      "auctionId": 34,
      "starting_bid": 4400,
      "reserve": false
    },
    {
      "title": "Lot Item 228 - Auction 34",
      "description": "A unique collectible item from auction 34, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/228/400/300",
      "images": ["https://picsum.photos/seed/228-0/800/600", "https://picsum.photos/seed/228-1/800/600", "https://picsum.photos/seed/228-2/800/600", "https://picsum.photos/seed/228-3/800/600"],
      "lotId": 228,
      "auctionId": 34,
      "starting_bid": 4800,
      "reserve": false
    },
    {
      "title": "Lot Item 229 - Auction 34",
      "description": "A unique collectible item from auction 34, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/229/400/300",
      "images": ["https://picsum.photos/seed/229-0/800/600", "https://picsum.photos/seed/229-1/800/600", "https://picsum.photos/seed/229-2/800/600"],
      "lotId": 229,
      "auctionId": 34,
      "starting_bid": 4400,
      "reserve": true
    },
    {
      "title": "Lot Item 230 - Auction 34",
      "description": "A unique collectible item from auction 34, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/230/400/300",
      "images": ["https://picsum.photos/seed/230-0/800/600", "https://picsum.photos/seed/230-1/800/600", "https://picsum.photos/seed/230-2/800/600"],
      "lotId": 230,
      "auctionId": 34,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 231 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/231/400/300",
      "images": ["https://picsum.photos/seed/231-0/800/600", "https://picsum.photos/seed/231-1/800/600"],
      "lotId": 231,
      "auctionId": 35,
      "starting_bid": 4400,
      "reserve": true
    },
    {
      "title": "Lot Item 232 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/232/400/300",
      "images": ["https://picsum.photos/seed/232-0/800/600", "https://picsum.photos/seed/232-1/800/600", "https://picsum.photos/seed/232-2/800/600", "https://picsum.photos/seed/232-3/800/600"],
      "lotId": 232,
      "auctionId": 35,
      "starting_bid": 4000,
      "reserve": false
    },
    {
      "title": "Lot Item 233 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/233/400/300",
      "images": ["https://picsum.photos/seed/233-0/800/600", "https://picsum.photos/seed/233-1/800/600", "https://picsum.photos/seed/233-2/800/600"],
      "lotId": 233,
      "auctionId": 35,
      "starting_bid": 2700,
      "reserve": false
    },
    {
      "title": "Lot Item 234 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/234/400/300",
      "images": ["https://picsum.photos/seed/234-0/800/600", "https://picsum.photos/seed/234-1/800/600", "https://picsum.photos/seed/234-2/800/600"],
      "lotId": 234,
      "auctionId": 35,
      "starting_bid": 2200,
      "reserve": true
    },
    {
      "title": "Lot Item 235 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/235/400/300",
      "images": ["https://picsum.photos/seed/235-0/800/600", "https://picsum.photos/seed/235-1/800/600", "https://picsum.photos/seed/235-2/800/600"],
      "lotId": 235,
      "auctionId": 1,
      "starting_bid": 4400,
      "reserve": true
    },
    {
      "title": "Lot Item 236 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/236/400/300",
      "images": ["https://picsum.photos/seed/236-0/800/600", "https://picsum.photos/seed/236-1/800/600", "https://picsum.photos/seed/236-2/800/600", "https://picsum.photos/seed/236-3/800/600"],
      "lotId": 236,
      "auctionId": 1,
      "starting_bid": 1000,
      "reserve": false
    },
    {
      "title": "Lot Item 237 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/237/400/300",
      "images": ["https://picsum.photos/seed/237-0/800/600", "https://picsum.photos/seed/237-1/800/600", "https://picsum.photos/seed/237-2/800/600", "https://picsum.photos/seed/237-3/800/600"],
      "lotId": 237,
      "auctionId": 1,
      "starting_bid": 4800,
      "reserve": false
    },
    {
      "title": "Lot Item 238 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/238/400/300",
      "images": ["https://picsum.photos/seed/238-0/800/600", "https://picsum.photos/seed/238-1/800/600", "https://picsum.photos/seed/238-2/800/600"],
      "lotId": 238,
      "auctionId": 1,
      "starting_bid": 1800,
      "reserve": true
    },
    {
      "title": "Lot Item 239 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/239/400/300",
      "images": ["https://picsum.photos/seed/239-0/800/600", "https://picsum.photos/seed/239-1/800/600", "https://picsum.photos/seed/239-2/800/600"],
      "lotId": 239,
      "auctionId": 1,
      "starting_bid": 1800,
      "reserve": true
    },
    {
      "title": "Lot Item 240 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/240/400/300",
      "images": ["https://picsum.photos/seed/240-0/800/600", "https://picsum.photos/seed/240-1/800/600", "https://picsum.photos/seed/240-2/800/600"],
      "lotId": 240,
      "auctionId": 1,
      "starting_bid": 3300,
      "reserve": true
    },
    {
      "title": "Lot Item 241 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/241/400/300",
      "images": ["https://picsum.photos/seed/241-0/800/600", "https://picsum.photos/seed/241-1/800/600"],
      "lotId": 241,
      "auctionId": 1,
      "starting_bid": 4900,
      "reserve": true
    },
    {
      "title": "Lot Item 242 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/242/400/300",
      "images": ["https://picsum.photos/seed/242-0/800/600", "https://picsum.photos/seed/242-1/800/600", "https://picsum.photos/seed/242-2/800/600", "https://picsum.photos/seed/242-3/800/600"],
      "lotId": 242,
      "auctionId": 1,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 243 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/243/400/300",
      "images": ["https://picsum.photos/seed/243-0/800/600", "https://picsum.photos/seed/243-1/800/600", "https://picsum.photos/seed/243-2/800/600"],
      "lotId": 243,
      "auctionId": 1,
      "starting_bid": 1400,
      "reserve": true
    },
    {
      "title": "Lot Item 244 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/244/400/300",
      "images": ["https://picsum.photos/seed/244-0/800/600", "https://picsum.photos/seed/244-1/800/600", "https://picsum.photos/seed/244-2/800/600", "https://picsum.photos/seed/244-3/800/600"],
      "lotId": 244,
      "auctionId": 1,
      "starting_bid": 3200,
      "reserve": false
    },
    {
      "title": "Lot Item 245 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/245/400/300",
      "images": ["https://picsum.photos/seed/245-0/800/600", "https://picsum.photos/seed/245-1/800/600", "https://picsum.photos/seed/245-2/800/600", "https://picsum.photos/seed/245-3/800/600"],
      "lotId": 245,
      "auctionId": 1,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 246 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/246/400/300",
      "images": ["https://picsum.photos/seed/246-0/800/600", "https://picsum.photos/seed/246-1/800/600"],
      "lotId": 246,
      "auctionId": 1,
      "starting_bid": 4200,
      "reserve": false
    },
    {
      "title": "Lot Item 247 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/247/400/300",
      "images": ["https://picsum.photos/seed/247-0/800/600", "https://picsum.photos/seed/247-1/800/600"],
      "lotId": 247,
      "auctionId": 1,
      "starting_bid": 1000,
      "reserve": true
    },
    {
      "title": "Lot Item 248 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/248/400/300",
      "images": ["https://picsum.photos/seed/248-0/800/600", "https://picsum.photos/seed/248-1/800/600", "https://picsum.photos/seed/248-2/800/600"],
      "lotId": 248,
      "auctionId": 1,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 249 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/249/400/300",
      "images": ["https://picsum.photos/seed/249-0/800/600", "https://picsum.photos/seed/249-1/800/600", "https://picsum.photos/seed/249-2/800/600", "https://picsum.photos/seed/249-3/800/600"],
      "lotId": 249,
      "auctionId": 1,
      "starting_bid": 1600,
      "reserve": false
    },
    {
      "title": "Lot Item 250 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/250/400/300",
      "images": ["https://picsum.photos/seed/250-0/800/600", "https://picsum.photos/seed/250-1/800/600", "https://picsum.photos/seed/250-2/800/600", "https://picsum.photos/seed/250-3/800/600"],
      "lotId": 250,
      "auctionId": 1,
      "starting_bid": 3000,
      "reserve": false
    },
    {
      "title": "Lot Item 251 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/251/400/300",
      "images": ["https://picsum.photos/seed/251-0/800/600", "https://picsum.photos/seed/251-1/800/600", "https://picsum.photos/seed/251-2/800/600"],
      "lotId": 251,
      "auctionId": 1,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 252 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/252/400/300",
      "images": ["https://picsum.photos/seed/252-0/800/600", "https://picsum.photos/seed/252-1/800/600", "https://picsum.photos/seed/252-2/800/600", "https://picsum.photos/seed/252-3/800/600"],
      "lotId": 252,
      "auctionId": 1,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 253 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/253/400/300",
      "images": ["https://picsum.photos/seed/253-0/800/600", "https://picsum.photos/seed/253-1/800/600", "https://picsum.photos/seed/253-2/800/600", "https://picsum.photos/seed/253-3/800/600"],
      "lotId": 253,
      "auctionId": 1,
      "starting_bid": 4100,
      "reserve": true
    },
    {
      "title": "Lot Item 254 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/254/400/300",
      "images": ["https://picsum.photos/seed/254-0/800/600", "https://picsum.photos/seed/254-1/800/600", "https://picsum.photos/seed/254-2/800/600", "https://picsum.photos/seed/254-3/800/600"],
      "lotId": 254,
      "auctionId": 1,
      "starting_bid": 3900,
      "reserve": true
    },
    {
      "title": "Lot Item 255 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/255/400/300",
      "images": ["https://picsum.photos/seed/255-0/800/600", "https://picsum.photos/seed/255-1/800/600", "https://picsum.photos/seed/255-2/800/600", "https://picsum.photos/seed/255-3/800/600"],
      "lotId": 255,
      "auctionId": 1,
      "starting_bid": 2800,
      "reserve": true
    },
    {
      "title": "Lot Item 256 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/256/400/300",
      "images": ["https://picsum.photos/seed/256-0/800/600", "https://picsum.photos/seed/256-1/800/600"],
      "lotId": 256,
      "auctionId": 1,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 257 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/257/400/300",
      "images": ["https://picsum.photos/seed/257-0/800/600", "https://picsum.photos/seed/257-1/800/600"],
      "lotId": 257,
      "auctionId": 1,
      "starting_bid": 3000,
      "reserve": true
    },
    {
      "title": "Lot Item 258 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/258/400/300",
      "images": ["https://picsum.photos/seed/258-0/800/600", "https://picsum.photos/seed/258-1/800/600", "https://picsum.photos/seed/258-2/800/600"],
      "lotId": 258,
      "auctionId": 1,
      "starting_bid": 700,
      "reserve": false
    },
    {
      "title": "Lot Item 259 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/259/400/300",
      "images": ["https://picsum.photos/seed/259-0/800/600", "https://picsum.photos/seed/259-1/800/600"],
      "lotId": 259,
      "auctionId": 1,
      "starting_bid": 600,
      "reserve": false
    },
    {
      "title": "Lot Item 260 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/260/400/300",
      "images": ["https://picsum.photos/seed/260-0/800/600", "https://picsum.photos/seed/260-1/800/600", "https://picsum.photos/seed/260-2/800/600"],
      "lotId": 260,
      "auctionId": 1,
      "starting_bid": 1800,
      "reserve": false
    },
    {
      "title": "Lot Item 261 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/261/400/300",
      "images": ["https://picsum.photos/seed/261-0/800/600", "https://picsum.photos/seed/261-1/800/600", "https://picsum.photos/seed/261-2/800/600"],
      "lotId": 261,
      "auctionId": 1,
      "starting_bid": 1700,
      "reserve": false
    },
    {
      "title": "Lot Item 262 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/262/400/300",
      "images": ["https://picsum.photos/seed/262-0/800/600", "https://picsum.photos/seed/262-1/800/600", "https://picsum.photos/seed/262-2/800/600", "https://picsum.photos/seed/262-3/800/600"],
      "lotId": 262,
      "auctionId": 1,
      "starting_bid": 600,
      "reserve": false
    },
    {
      "title": "Lot Item 263 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/263/400/300",
      "images": ["https://picsum.photos/seed/263-0/800/600", "https://picsum.photos/seed/263-1/800/600", "https://picsum.photos/seed/263-2/800/600", "https://picsum.photos/seed/263-3/800/600"],
      "lotId": 263,
      "auctionId": 1,
      "starting_bid": 2900,
      "reserve": false
    },
    {
      "title": "Lot Item 264 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/264/400/300",
      "images": ["https://picsum.photos/seed/264-0/800/600", "https://picsum.photos/seed/264-1/800/600", "https://picsum.photos/seed/264-2/800/600"],
      "lotId": 264,
      "auctionId": 1,
      "starting_bid": 3700,
      "reserve": false
    },
    {
      "title": "Lot Item 265 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/265/400/300",
      "images": ["https://picsum.photos/seed/265-0/800/600", "https://picsum.photos/seed/265-1/800/600"],
      "lotId": 265,
      "auctionId": 1,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 266 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/266/400/300",
      "images": ["https://picsum.photos/seed/266-0/800/600", "https://picsum.photos/seed/266-1/800/600"],
      "lotId": 266,
      "auctionId": 1,
      "starting_bid": 2500,
      "reserve": false
    },
    {
      "title": "Lot Item 267 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/267/400/300",
      "images": ["https://picsum.photos/seed/267-0/800/600", "https://picsum.photos/seed/267-1/800/600", "https://picsum.photos/seed/267-2/800/600"],
      "lotId": 267,
      "auctionId": 1,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 268 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/268/400/300",
      "images": ["https://picsum.photos/seed/268-0/800/600", "https://picsum.photos/seed/268-1/800/600", "https://picsum.photos/seed/268-2/800/600", "https://picsum.photos/seed/268-3/800/600"],
      "lotId": 268,
      "auctionId": 1,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "Lot Item 269 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/269/400/300",
      "images": ["https://picsum.photos/seed/269-0/800/600", "https://picsum.photos/seed/269-1/800/600", "https://picsum.photos/seed/269-2/800/600", "https://picsum.photos/seed/269-3/800/600"],
      "lotId": 269,
      "auctionId": 1,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 270 - Auction 1",
      "description": "A unique collectible item from auction 1, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/270/400/300",
      "images": ["https://picsum.photos/seed/270-0/800/600", "https://picsum.photos/seed/270-1/800/600"],
      "lotId": 270,
      "auctionId": 1,
      "starting_bid": 900,
      "reserve": false
    },
    {
      "title": "Lot Item 271 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/271/400/300",
      "images": ["https://picsum.photos/seed/271-0/800/600", "https://picsum.photos/seed/271-1/800/600"],
      "lotId": 271,
      "auctionId": 2,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 272 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/272/400/300",
      "images": ["https://picsum.photos/seed/272-0/800/600", "https://picsum.photos/seed/272-1/800/600", "https://picsum.photos/seed/272-2/800/600"],
      "lotId": 272,
      "auctionId": 2,
      "starting_bid": 1500,
      "reserve": true
    },
    {
      "title": "Lot Item 273 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/273/400/300",
      "images": ["https://picsum.photos/seed/273-0/800/600", "https://picsum.photos/seed/273-1/800/600", "https://picsum.photos/seed/273-2/800/600"],
      "lotId": 273,
      "auctionId": 2,
      "starting_bid": 4100,
      "reserve": true
    },
    {
      "title": "Lot Item 274 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/274/400/300",
      "images": ["https://picsum.photos/seed/274-0/800/600", "https://picsum.photos/seed/274-1/800/600"],
      "lotId": 274,
      "auctionId": 2,
      "starting_bid": 4700,
      "reserve": true
    },
    {
      "title": "Lot Item 275 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/275/400/300",
      "images": ["https://picsum.photos/seed/275-0/800/600", "https://picsum.photos/seed/275-1/800/600"],
      "lotId": 275,
      "auctionId": 2,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 276 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/276/400/300",
      "images": ["https://picsum.photos/seed/276-0/800/600", "https://picsum.photos/seed/276-1/800/600"],
      "lotId": 276,
      "auctionId": 2,
      "starting_bid": 1000,
      "reserve": true
    },
    {
      "title": "Lot Item 277 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/277/400/300",
      "images": ["https://picsum.photos/seed/277-0/800/600", "https://picsum.photos/seed/277-1/800/600", "https://picsum.photos/seed/277-2/800/600", "https://picsum.photos/seed/277-3/800/600"],
      "lotId": 277,
      "auctionId": 2,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 278 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/278/400/300",
      "images": ["https://picsum.photos/seed/278-0/800/600", "https://picsum.photos/seed/278-1/800/600", "https://picsum.photos/seed/278-2/800/600"],
      "lotId": 278,
      "auctionId": 2,
      "starting_bid": 2000,
      "reserve": false
    },
    {
      "title": "Lot Item 279 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/279/400/300",
      "images": ["https://picsum.photos/seed/279-0/800/600", "https://picsum.photos/seed/279-1/800/600", "https://picsum.photos/seed/279-2/800/600", "https://picsum.photos/seed/279-3/800/600"],
      "lotId": 279,
      "auctionId": 2,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 280 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/280/400/300",
      "images": ["https://picsum.photos/seed/280-0/800/600", "https://picsum.photos/seed/280-1/800/600"],
      "lotId": 280,
      "auctionId": 2,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 281 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/281/400/300",
      "images": ["https://picsum.photos/seed/281-0/800/600", "https://picsum.photos/seed/281-1/800/600", "https://picsum.photos/seed/281-2/800/600"],
      "lotId": 281,
      "auctionId": 2,
      "starting_bid": 600,
      "reserve": false
    },
    {
      "title": "Lot Item 282 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/282/400/300",
      "images": ["https://picsum.photos/seed/282-0/800/600", "https://picsum.photos/seed/282-1/800/600", "https://picsum.photos/seed/282-2/800/600"],
      "lotId": 282,
      "auctionId": 2,
      "starting_bid": 2700,
      "reserve": true
    },
    {
      "title": "Lot Item 283 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/283/400/300",
      "images": ["https://picsum.photos/seed/283-0/800/600", "https://picsum.photos/seed/283-1/800/600"],
      "lotId": 283,
      "auctionId": 2,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 284 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/284/400/300",
      "images": ["https://picsum.photos/seed/284-0/800/600", "https://picsum.photos/seed/284-1/800/600", "https://picsum.photos/seed/284-2/800/600"],
      "lotId": 284,
      "auctionId": 2,
      "starting_bid": 1800,
      "reserve": false
    },
    {
      "title": "Lot Item 285 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/285/400/300",
      "images": ["https://picsum.photos/seed/285-0/800/600", "https://picsum.photos/seed/285-1/800/600", "https://picsum.photos/seed/285-2/800/600"],
      "lotId": 285,
      "auctionId": 2,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Lot Item 286 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/286/400/300",
      "images": ["https://picsum.photos/seed/286-0/800/600", "https://picsum.photos/seed/286-1/800/600", "https://picsum.photos/seed/286-2/800/600"],
      "lotId": 286,
      "auctionId": 2,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 287 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/287/400/300",
      "images": ["https://picsum.photos/seed/287-0/800/600", "https://picsum.photos/seed/287-1/800/600"],
      "lotId": 287,
      "auctionId": 2,
      "starting_bid": 4100,
      "reserve": true
    },
    {
      "title": "Lot Item 288 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/288/400/300",
      "images": ["https://picsum.photos/seed/288-0/800/600", "https://picsum.photos/seed/288-1/800/600", "https://picsum.photos/seed/288-2/800/600", "https://picsum.photos/seed/288-3/800/600"],
      "lotId": 288,
      "auctionId": 2,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 289 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/289/400/300",
      "images": ["https://picsum.photos/seed/289-0/800/600", "https://picsum.photos/seed/289-1/800/600", "https://picsum.photos/seed/289-2/800/600", "https://picsum.photos/seed/289-3/800/600"],
      "lotId": 289,
      "auctionId": 2,
      "starting_bid": 4100,
      "reserve": false
    },
    {
      "title": "Lot Item 290 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/290/400/300",
      "images": ["https://picsum.photos/seed/290-0/800/600", "https://picsum.photos/seed/290-1/800/600"],
      "lotId": 290,
      "auctionId": 2,
      "starting_bid": 2200,
      "reserve": false
    },
    {
      "title": "Lot Item 291 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/291/400/300",
      "images": ["https://picsum.photos/seed/291-0/800/600", "https://picsum.photos/seed/291-1/800/600"],
      "lotId": 291,
      "auctionId": 2,
      "starting_bid": 3700,
      "reserve": false
    },
    {
      "title": "Lot Item 292 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/292/400/300",
      "images": ["https://picsum.photos/seed/292-0/800/600", "https://picsum.photos/seed/292-1/800/600"],
      "lotId": 292,
      "auctionId": 2,
      "starting_bid": 3000,
      "reserve": false
    },
    {
      "title": "Lot Item 293 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/293/400/300",
      "images": ["https://picsum.photos/seed/293-0/800/600", "https://picsum.photos/seed/293-1/800/600", "https://picsum.photos/seed/293-2/800/600"],
      "lotId": 293,
      "auctionId": 2,
      "starting_bid": 1400,
      "reserve": false
    },
    {
      "title": "Lot Item 294 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/294/400/300",
      "images": ["https://picsum.photos/seed/294-0/800/600", "https://picsum.photos/seed/294-1/800/600"],
      "lotId": 294,
      "auctionId": 2,
      "starting_bid": 2300,
      "reserve": true
    },
    {
      "title": "Lot Item 295 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/295/400/300",
      "images": ["https://picsum.photos/seed/295-0/800/600", "https://picsum.photos/seed/295-1/800/600", "https://picsum.photos/seed/295-2/800/600", "https://picsum.photos/seed/295-3/800/600"],
      "lotId": 295,
      "auctionId": 2,
      "starting_bid": 2400,
      "reserve": true
    },
    {
      "title": "Lot Item 296 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/296/400/300",
      "images": ["https://picsum.photos/seed/296-0/800/600", "https://picsum.photos/seed/296-1/800/600"],
      "lotId": 296,
      "auctionId": 2,
      "starting_bid": 2000,
      "reserve": false
    },
    {
      "title": "Lot Item 297 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/297/400/300",
      "images": ["https://picsum.photos/seed/297-0/800/600", "https://picsum.photos/seed/297-1/800/600", "https://picsum.photos/seed/297-2/800/600", "https://picsum.photos/seed/297-3/800/600"],
      "lotId": 297,
      "auctionId": 2,
      "starting_bid": 4500,
      "reserve": true
    },
    {
      "title": "Lot Item 298 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/298/400/300",
      "images": ["https://picsum.photos/seed/298-0/800/600", "https://picsum.photos/seed/298-1/800/600", "https://picsum.photos/seed/298-2/800/600", "https://picsum.photos/seed/298-3/800/600"],
      "lotId": 298,
      "auctionId": 2,
      "starting_bid": 1600,
      "reserve": false
    },
    {
      "title": "Lot Item 299 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/299/400/300",
      "images": ["https://picsum.photos/seed/299-0/800/600", "https://picsum.photos/seed/299-1/800/600", "https://picsum.photos/seed/299-2/800/600", "https://picsum.photos/seed/299-3/800/600"],
      "lotId": 299,
      "auctionId": 2,
      "starting_bid": 1800,
      "reserve": true
    },
    {
      "title": "Lot Item 300 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/300/400/300",
      "images": ["https://picsum.photos/seed/300-0/800/600", "https://picsum.photos/seed/300-1/800/600", "https://picsum.photos/seed/300-2/800/600"],
      "lotId": 300,
      "auctionId": 2,
      "starting_bid": 1900,
      "reserve": false
    },
    {
      "title": "Lot Item 301 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/301/400/300",
      "images": ["https://picsum.photos/seed/301-0/800/600", "https://picsum.photos/seed/301-1/800/600"],
      "lotId": 301,
      "auctionId": 2,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 302 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/302/400/300",
      "images": ["https://picsum.photos/seed/302-0/800/600", "https://picsum.photos/seed/302-1/800/600", "https://picsum.photos/seed/302-2/800/600"],
      "lotId": 302,
      "auctionId": 2,
      "starting_bid": 3400,
      "reserve": false
    },
    {
      "title": "Lot Item 303 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/303/400/300",
      "images": ["https://picsum.photos/seed/303-0/800/600", "https://picsum.photos/seed/303-1/800/600"],
      "lotId": 303,
      "auctionId": 2,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 304 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/304/400/300",
      "images": ["https://picsum.photos/seed/304-0/800/600", "https://picsum.photos/seed/304-1/800/600", "https://picsum.photos/seed/304-2/800/600"],
      "lotId": 304,
      "auctionId": 2,
      "starting_bid": 1100,
      "reserve": true
    },
    {
      "title": "Lot Item 305 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/305/400/300",
      "images": ["https://picsum.photos/seed/305-0/800/600", "https://picsum.photos/seed/305-1/800/600"],
      "lotId": 305,
      "auctionId": 2,
      "starting_bid": 1600,
      "reserve": false
    },
    {
      "title": "Lot Item 306 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/306/400/300",
      "images": ["https://picsum.photos/seed/306-0/800/600", "https://picsum.photos/seed/306-1/800/600", "https://picsum.photos/seed/306-2/800/600"],
      "lotId": 306,
      "auctionId": 2,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 307 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/307/400/300",
      "images": ["https://picsum.photos/seed/307-0/800/600", "https://picsum.photos/seed/307-1/800/600", "https://picsum.photos/seed/307-2/800/600", "https://picsum.photos/seed/307-3/800/600"],
      "lotId": 307,
      "auctionId": 2,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 308 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/308/400/300",
      "images": ["https://picsum.photos/seed/308-0/800/600", "https://picsum.photos/seed/308-1/800/600"],
      "lotId": 308,
      "auctionId": 2,
      "starting_bid": 3400,
      "reserve": true
    },
    {
      "title": "Lot Item 309 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/309/400/300",
      "images": ["https://picsum.photos/seed/309-0/800/600", "https://picsum.photos/seed/309-1/800/600", "https://picsum.photos/seed/309-2/800/600", "https://picsum.photos/seed/309-3/800/600"],
      "lotId": 309,
      "auctionId": 2,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 310 - Auction 2",
      "description": "A unique collectible item from auction 2, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/310/400/300",
      "images": ["https://picsum.photos/seed/310-0/800/600", "https://picsum.photos/seed/310-1/800/600", "https://picsum.photos/seed/310-2/800/600"],
      "lotId": 310,
      "auctionId": 2,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 311 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/311/400/300",
      "images": ["https://picsum.photos/seed/311-0/800/600", "https://picsum.photos/seed/311-1/800/600", "https://picsum.photos/seed/311-2/800/600"],
      "lotId": 311,
      "auctionId": 12,
      "starting_bid": 3400,
      "reserve": false
    },
    {
      "title": "Lot Item 312 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/312/400/300",
      "images": ["https://picsum.photos/seed/312-0/800/600", "https://picsum.photos/seed/312-1/800/600", "https://picsum.photos/seed/312-2/800/600", "https://picsum.photos/seed/312-3/800/600"],
      "lotId": 312,
      "auctionId": 12,
      "starting_bid": 4500,
      "reserve": true
    },
    {
      "title": "Lot Item 313 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/313/400/300",
      "images": ["https://picsum.photos/seed/313-0/800/600", "https://picsum.photos/seed/313-1/800/600"],
      "lotId": 313,
      "auctionId": 12,
      "starting_bid": 4300,
      "reserve": true
    },
    {
      "title": "Lot Item 314 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/314/400/300",
      "images": ["https://picsum.photos/seed/314-0/800/600", "https://picsum.photos/seed/314-1/800/600"],
      "lotId": 314,
      "auctionId": 12,
      "starting_bid": 3900,
      "reserve": true
    },
    {
      "title": "Lot Item 315 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/315/400/300",
      "images": ["https://picsum.photos/seed/315-0/800/600", "https://picsum.photos/seed/315-1/800/600"],
      "lotId": 315,
      "auctionId": 12,
      "starting_bid": 3800,
      "reserve": false
    },
    {
      "title": "Lot Item 316 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/316/400/300",
      "images": ["https://picsum.photos/seed/316-0/800/600", "https://picsum.photos/seed/316-1/800/600"],
      "lotId": 316,
      "auctionId": 12,
      "starting_bid": 4900,
      "reserve": true
    },
    {
      "title": "Lot Item 317 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/317/400/300",
      "images": ["https://picsum.photos/seed/317-0/800/600", "https://picsum.photos/seed/317-1/800/600", "https://picsum.photos/seed/317-2/800/600"],
      "lotId": 317,
      "auctionId": 12,
      "starting_bid": 4200,
      "reserve": true
    },
    {
      "title": "Lot Item 318 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/318/400/300",
      "images": ["https://picsum.photos/seed/318-0/800/600", "https://picsum.photos/seed/318-1/800/600", "https://picsum.photos/seed/318-2/800/600", "https://picsum.photos/seed/318-3/800/600"],
      "lotId": 318,
      "auctionId": 12,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "Lot Item 319 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/319/400/300",
      "images": ["https://picsum.photos/seed/319-0/800/600", "https://picsum.photos/seed/319-1/800/600", "https://picsum.photos/seed/319-2/800/600", "https://picsum.photos/seed/319-3/800/600"],
      "lotId": 319,
      "auctionId": 12,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 320 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/320/400/300",
      "images": ["https://picsum.photos/seed/320-0/800/600", "https://picsum.photos/seed/320-1/800/600", "https://picsum.photos/seed/320-2/800/600", "https://picsum.photos/seed/320-3/800/600"],
      "lotId": 320,
      "auctionId": 12,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 321 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/321/400/300",
      "images": ["https://picsum.photos/seed/321-0/800/600", "https://picsum.photos/seed/321-1/800/600"],
      "lotId": 321,
      "auctionId": 12,
      "starting_bid": 600,
      "reserve": false
    },
    {
      "title": "Lot Item 322 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/322/400/300",
      "images": ["https://picsum.photos/seed/322-0/800/600", "https://picsum.photos/seed/322-1/800/600", "https://picsum.photos/seed/322-2/800/600"],
      "lotId": 322,
      "auctionId": 12,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 323 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/323/400/300",
      "images": ["https://picsum.photos/seed/323-0/800/600", "https://picsum.photos/seed/323-1/800/600"],
      "lotId": 323,
      "auctionId": 12,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 324 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/324/400/300",
      "images": ["https://picsum.photos/seed/324-0/800/600", "https://picsum.photos/seed/324-1/800/600", "https://picsum.photos/seed/324-2/800/600"],
      "lotId": 324,
      "auctionId": 12,
      "starting_bid": 3000,
      "reserve": true
    },
    {
      "title": "Lot Item 325 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/325/400/300",
      "images": ["https://picsum.photos/seed/325-0/800/600", "https://picsum.photos/seed/325-1/800/600", "https://picsum.photos/seed/325-2/800/600"],
      "lotId": 325,
      "auctionId": 12,
      "starting_bid": 1600,
      "reserve": true
    },
    {
      "title": "Lot Item 326 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/326/400/300",
      "images": ["https://picsum.photos/seed/326-0/800/600", "https://picsum.photos/seed/326-1/800/600"],
      "lotId": 326,
      "auctionId": 12,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 327 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/327/400/300",
      "images": ["https://picsum.photos/seed/327-0/800/600", "https://picsum.photos/seed/327-1/800/600", "https://picsum.photos/seed/327-2/800/600", "https://picsum.photos/seed/327-3/800/600"],
      "lotId": 327,
      "auctionId": 12,
      "starting_bid": 1400,
      "reserve": false
    },
    {
      "title": "Lot Item 328 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/328/400/300",
      "images": ["https://picsum.photos/seed/328-0/800/600", "https://picsum.photos/seed/328-1/800/600", "https://picsum.photos/seed/328-2/800/600", "https://picsum.photos/seed/328-3/800/600"],
      "lotId": 328,
      "auctionId": 12,
      "starting_bid": 1500,
      "reserve": false
    },
    {
      "title": "Lot Item 329 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/329/400/300",
      "images": ["https://picsum.photos/seed/329-0/800/600", "https://picsum.photos/seed/329-1/800/600"],
      "lotId": 329,
      "auctionId": 12,
      "starting_bid": 4700,
      "reserve": false
    },
    {
      "title": "Lot Item 330 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/330/400/300",
      "images": ["https://picsum.photos/seed/330-0/800/600", "https://picsum.photos/seed/330-1/800/600"],
      "lotId": 330,
      "auctionId": 12,
      "starting_bid": 1400,
      "reserve": true
    },
    {
      "title": "Lot Item 331 - Auction 12",
      "description": "A unique collectible item from auction 12, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/331/400/300",
      "images": ["https://picsum.photos/seed/331-0/800/600", "https://picsum.photos/seed/331-1/800/600", "https://picsum.photos/seed/331-2/800/600"],
      "lotId": 331,
      "auctionId": 12,
      "starting_bid": 2400,
      "reserve": true
    },
    {
      "title": "Lot Item 332 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/332/400/300",
      "images": ["https://picsum.photos/seed/332-0/800/600", "https://picsum.photos/seed/332-1/800/600", "https://picsum.photos/seed/332-2/800/600"],
      "lotId": 332,
      "auctionId": 17,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 333 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/333/400/300",
      "images": ["https://picsum.photos/seed/333-0/800/600", "https://picsum.photos/seed/333-1/800/600", "https://picsum.photos/seed/333-2/800/600"],
      "lotId": 333,
      "auctionId": 17,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 334 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/334/400/300",
      "images": ["https://picsum.photos/seed/334-0/800/600", "https://picsum.photos/seed/334-1/800/600"],
      "lotId": 334,
      "auctionId": 17,
      "starting_bid": 600,
      "reserve": true
    },
    {
      "title": "Lot Item 335 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/335/400/300",
      "images": ["https://picsum.photos/seed/335-0/800/600", "https://picsum.photos/seed/335-1/800/600", "https://picsum.photos/seed/335-2/800/600"],
      "lotId": 335,
      "auctionId": 17,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 336 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/336/400/300",
      "images": ["https://picsum.photos/seed/336-0/800/600", "https://picsum.photos/seed/336-1/800/600", "https://picsum.photos/seed/336-2/800/600"],
      "lotId": 336,
      "auctionId": 17,
      "starting_bid": 1400,
      "reserve": false
    },
    {
      "title": "Lot Item 337 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/337/400/300",
      "images": ["https://picsum.photos/seed/337-0/800/600", "https://picsum.photos/seed/337-1/800/600", "https://picsum.photos/seed/337-2/800/600"],
      "lotId": 337,
      "auctionId": 17,
      "starting_bid": 3300,
      "reserve": true
    },
    {
      "title": "Lot Item 338 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/338/400/300",
      "images": ["https://picsum.photos/seed/338-0/800/600", "https://picsum.photos/seed/338-1/800/600", "https://picsum.photos/seed/338-2/800/600"],
      "lotId": 338,
      "auctionId": 17,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 339 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/339/400/300",
      "images": ["https://picsum.photos/seed/339-0/800/600", "https://picsum.photos/seed/339-1/800/600", "https://picsum.photos/seed/339-2/800/600"],
      "lotId": 339,
      "auctionId": 17,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 340 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/340/400/300",
      "images": ["https://picsum.photos/seed/340-0/800/600", "https://picsum.photos/seed/340-1/800/600", "https://picsum.photos/seed/340-2/800/600"],
      "lotId": 340,
      "auctionId": 17,
      "starting_bid": 1700,
      "reserve": true
    },
    {
      "title": "Lot Item 341 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/341/400/300",
      "images": ["https://picsum.photos/seed/341-0/800/600", "https://picsum.photos/seed/341-1/800/600"],
      "lotId": 341,
      "auctionId": 17,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 342 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/342/400/300",
      "images": ["https://picsum.photos/seed/342-0/800/600", "https://picsum.photos/seed/342-1/800/600"],
      "lotId": 342,
      "auctionId": 17,
      "starting_bid": 700,
      "reserve": false
    },
    {
      "title": "Lot Item 343 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/343/400/300",
      "images": ["https://picsum.photos/seed/343-0/800/600", "https://picsum.photos/seed/343-1/800/600"],
      "lotId": 343,
      "auctionId": 17,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 344 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/344/400/300",
      "images": ["https://picsum.photos/seed/344-0/800/600", "https://picsum.photos/seed/344-1/800/600"],
      "lotId": 344,
      "auctionId": 17,
      "starting_bid": 4400,
      "reserve": false
    },
    {
      "title": "Lot Item 345 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/345/400/300",
      "images": ["https://picsum.photos/seed/345-0/800/600", "https://picsum.photos/seed/345-1/800/600", "https://picsum.photos/seed/345-2/800/600"],
      "lotId": 345,
      "auctionId": 17,
      "starting_bid": 4500,
      "reserve": true
    },
    {
      "title": "Lot Item 346 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/346/400/300",
      "images": ["https://picsum.photos/seed/346-0/800/600", "https://picsum.photos/seed/346-1/800/600", "https://picsum.photos/seed/346-2/800/600"],
      "lotId": 346,
      "auctionId": 17,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 347 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/347/400/300",
      "images": ["https://picsum.photos/seed/347-0/800/600", "https://picsum.photos/seed/347-1/800/600", "https://picsum.photos/seed/347-2/800/600", "https://picsum.photos/seed/347-3/800/600"],
      "lotId": 347,
      "auctionId": 17,
      "starting_bid": 4600,
      "reserve": true
    },
    {
      "title": "Lot Item 348 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/348/400/300",
      "images": ["https://picsum.photos/seed/348-0/800/600", "https://picsum.photos/seed/348-1/800/600", "https://picsum.photos/seed/348-2/800/600", "https://picsum.photos/seed/348-3/800/600"],
      "lotId": 348,
      "auctionId": 17,
      "starting_bid": 3400,
      "reserve": true
    },
    {
      "title": "Lot Item 349 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/349/400/300",
      "images": ["https://picsum.photos/seed/349-0/800/600", "https://picsum.photos/seed/349-1/800/600", "https://picsum.photos/seed/349-2/800/600"],
      "lotId": 349,
      "auctionId": 17,
      "starting_bid": 4500,
      "reserve": false
    },
    {
      "title": "Lot Item 350 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/350/400/300",
      "images": ["https://picsum.photos/seed/350-0/800/600", "https://picsum.photos/seed/350-1/800/600", "https://picsum.photos/seed/350-2/800/600"],
      "lotId": 350,
      "auctionId": 17,
      "starting_bid": 500,
      "reserve": true
    },
    {
      "title": "Lot Item 351 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/351/400/300",
      "images": ["https://picsum.photos/seed/351-0/800/600", "https://picsum.photos/seed/351-1/800/600"],
      "lotId": 351,
      "auctionId": 17,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 352 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/352/400/300",
      "images": ["https://picsum.photos/seed/352-0/800/600", "https://picsum.photos/seed/352-1/800/600", "https://picsum.photos/seed/352-2/800/600", "https://picsum.photos/seed/352-3/800/600"],
      "lotId": 352,
      "auctionId": 17,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 353 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/353/400/300",
      "images": ["https://picsum.photos/seed/353-0/800/600", "https://picsum.photos/seed/353-1/800/600", "https://picsum.photos/seed/353-2/800/600"],
      "lotId": 353,
      "auctionId": 17,
      "starting_bid": 3400,
      "reserve": true
    },
    {
      "title": "Lot Item 354 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/354/400/300",
      "images": ["https://picsum.photos/seed/354-0/800/600", "https://picsum.photos/seed/354-1/800/600"],
      "lotId": 354,
      "auctionId": 17,
      "starting_bid": 2400,
      "reserve": true
    },
    {
      "title": "Lot Item 355 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/355/400/300",
      "images": ["https://picsum.photos/seed/355-0/800/600", "https://picsum.photos/seed/355-1/800/600", "https://picsum.photos/seed/355-2/800/600", "https://picsum.photos/seed/355-3/800/600"],
      "lotId": 355,
      "auctionId": 17,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 356 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/356/400/300",
      "images": ["https://picsum.photos/seed/356-0/800/600", "https://picsum.photos/seed/356-1/800/600"],
      "lotId": 356,
      "auctionId": 17,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 357 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/357/400/300",
      "images": ["https://picsum.photos/seed/357-0/800/600", "https://picsum.photos/seed/357-1/800/600"],
      "lotId": 357,
      "auctionId": 17,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "Lot Item 358 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/358/400/300",
      "images": ["https://picsum.photos/seed/358-0/800/600", "https://picsum.photos/seed/358-1/800/600"],
      "lotId": 358,
      "auctionId": 17,
      "starting_bid": 3000,
      "reserve": false
    },
    {
      "title": "Lot Item 359 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/359/400/300",
      "images": ["https://picsum.photos/seed/359-0/800/600", "https://picsum.photos/seed/359-1/800/600", "https://picsum.photos/seed/359-2/800/600", "https://picsum.photos/seed/359-3/800/600"],
      "lotId": 359,
      "auctionId": 17,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 360 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/360/400/300",
      "images": ["https://picsum.photos/seed/360-0/800/600", "https://picsum.photos/seed/360-1/800/600", "https://picsum.photos/seed/360-2/800/600", "https://picsum.photos/seed/360-3/800/600"],
      "lotId": 360,
      "auctionId": 17,
      "starting_bid": 1700,
      "reserve": true
    },
    {
      "title": "Lot Item 361 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/361/400/300",
      "images": ["https://picsum.photos/seed/361-0/800/600", "https://picsum.photos/seed/361-1/800/600", "https://picsum.photos/seed/361-2/800/600"],
      "lotId": 361,
      "auctionId": 17,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 362 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/362/400/300",
      "images": ["https://picsum.photos/seed/362-0/800/600", "https://picsum.photos/seed/362-1/800/600", "https://picsum.photos/seed/362-2/800/600"],
      "lotId": 362,
      "auctionId": 17,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 363 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/363/400/300",
      "images": ["https://picsum.photos/seed/363-0/800/600", "https://picsum.photos/seed/363-1/800/600"],
      "lotId": 363,
      "auctionId": 17,
      "starting_bid": 1300,
      "reserve": false
    },
    {
      "title": "Lot Item 364 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/364/400/300",
      "images": ["https://picsum.photos/seed/364-0/800/600", "https://picsum.photos/seed/364-1/800/600"],
      "lotId": 364,
      "auctionId": 17,
      "starting_bid": 1600,
      "reserve": false
    },
    {
      "title": "Lot Item 365 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/365/400/300",
      "images": ["https://picsum.photos/seed/365-0/800/600", "https://picsum.photos/seed/365-1/800/600", "https://picsum.photos/seed/365-2/800/600"],
      "lotId": 365,
      "auctionId": 17,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 366 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/366/400/300",
      "images": ["https://picsum.photos/seed/366-0/800/600", "https://picsum.photos/seed/366-1/800/600", "https://picsum.photos/seed/366-2/800/600", "https://picsum.photos/seed/366-3/800/600"],
      "lotId": 366,
      "auctionId": 17,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 367 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/367/400/300",
      "images": ["https://picsum.photos/seed/367-0/800/600", "https://picsum.photos/seed/367-1/800/600", "https://picsum.photos/seed/367-2/800/600", "https://picsum.photos/seed/367-3/800/600"],
      "lotId": 367,
      "auctionId": 17,
      "starting_bid": 1600,
      "reserve": true
    },
    {
      "title": "Lot Item 368 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/368/400/300",
      "images": ["https://picsum.photos/seed/368-0/800/600", "https://picsum.photos/seed/368-1/800/600", "https://picsum.photos/seed/368-2/800/600"],
      "lotId": 368,
      "auctionId": 17,
      "starting_bid": 3700,
      "reserve": false
    },
    {
      "title": "Lot Item 369 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/369/400/300",
      "images": ["https://picsum.photos/seed/369-0/800/600", "https://picsum.photos/seed/369-1/800/600"],
      "lotId": 369,
      "auctionId": 17,
      "starting_bid": 2200,
      "reserve": false
    },
    {
      "title": "Lot Item 370 - Auction 17",
      "description": "A unique collectible item from auction 17, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/370/400/300",
      "images": ["https://picsum.photos/seed/370-0/800/600", "https://picsum.photos/seed/370-1/800/600"],
      "lotId": 370,
      "auctionId": 17,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 371 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/371/400/300",
      "images": ["https://picsum.photos/seed/371-0/800/600", "https://picsum.photos/seed/371-1/800/600"],
      "lotId": 371,
      "auctionId": 23,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 372 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/372/400/300",
      "images": ["https://picsum.photos/seed/372-0/800/600", "https://picsum.photos/seed/372-1/800/600"],
      "lotId": 372,
      "auctionId": 23,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 373 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/373/400/300",
      "images": ["https://picsum.photos/seed/373-0/800/600", "https://picsum.photos/seed/373-1/800/600", "https://picsum.photos/seed/373-2/800/600", "https://picsum.photos/seed/373-3/800/600"],
      "lotId": 373,
      "auctionId": 23,
      "starting_bid": 4200,
      "reserve": false
    },
    {
      "title": "Lot Item 374 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/374/400/300",
      "images": ["https://picsum.photos/seed/374-0/800/600", "https://picsum.photos/seed/374-1/800/600"],
      "lotId": 374,
      "auctionId": 23,
      "starting_bid": 1900,
      "reserve": true
    },
    {
      "title": "Lot Item 375 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/375/400/300",
      "images": ["https://picsum.photos/seed/375-0/800/600", "https://picsum.photos/seed/375-1/800/600"],
      "lotId": 375,
      "auctionId": 23,
      "starting_bid": 2600,
      "reserve": false
    },
    {
      "title": "Lot Item 376 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/376/400/300",
      "images": ["https://picsum.photos/seed/376-0/800/600", "https://picsum.photos/seed/376-1/800/600", "https://picsum.photos/seed/376-2/800/600"],
      "lotId": 376,
      "auctionId": 23,
      "starting_bid": 700,
      "reserve": true
    },
    {
      "title": "Lot Item 377 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/377/400/300",
      "images": ["https://picsum.photos/seed/377-0/800/600", "https://picsum.photos/seed/377-1/800/600"],
      "lotId": 377,
      "auctionId": 23,
      "starting_bid": 3000,
      "reserve": false
    },
    {
      "title": "Lot Item 378 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/378/400/300",
      "images": ["https://picsum.photos/seed/378-0/800/600", "https://picsum.photos/seed/378-1/800/600", "https://picsum.photos/seed/378-2/800/600", "https://picsum.photos/seed/378-3/800/600"],
      "lotId": 378,
      "auctionId": 23,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 379 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/379/400/300",
      "images": ["https://picsum.photos/seed/379-0/800/600", "https://picsum.photos/seed/379-1/800/600"],
      "lotId": 379,
      "auctionId": 23,
      "starting_bid": 1700,
      "reserve": false
    },
    {
      "title": "Lot Item 380 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/380/400/300",
      "images": ["https://picsum.photos/seed/380-0/800/600", "https://picsum.photos/seed/380-1/800/600", "https://picsum.photos/seed/380-2/800/600"],
      "lotId": 380,
      "auctionId": 23,
      "starting_bid": 3300,
      "reserve": false
    },
    {
      "title": "Lot Item 381 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/381/400/300",
      "images": ["https://picsum.photos/seed/381-0/800/600", "https://picsum.photos/seed/381-1/800/600", "https://picsum.photos/seed/381-2/800/600"],
      "lotId": 381,
      "auctionId": 23,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 382 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/382/400/300",
      "images": ["https://picsum.photos/seed/382-0/800/600", "https://picsum.photos/seed/382-1/800/600"],
      "lotId": 382,
      "auctionId": 23,
      "starting_bid": 2000,
      "reserve": false
    },
    {
      "title": "Lot Item 383 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/383/400/300",
      "images": ["https://picsum.photos/seed/383-0/800/600", "https://picsum.photos/seed/383-1/800/600"],
      "lotId": 383,
      "auctionId": 23,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 384 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/384/400/300",
      "images": ["https://picsum.photos/seed/384-0/800/600", "https://picsum.photos/seed/384-1/800/600", "https://picsum.photos/seed/384-2/800/600", "https://picsum.photos/seed/384-3/800/600"],
      "lotId": 384,
      "auctionId": 23,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 385 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/385/400/300",
      "images": ["https://picsum.photos/seed/385-0/800/600", "https://picsum.photos/seed/385-1/800/600", "https://picsum.photos/seed/385-2/800/600", "https://picsum.photos/seed/385-3/800/600"],
      "lotId": 385,
      "auctionId": 23,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 386 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/386/400/300",
      "images": ["https://picsum.photos/seed/386-0/800/600", "https://picsum.photos/seed/386-1/800/600"],
      "lotId": 386,
      "auctionId": 23,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 387 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/387/400/300",
      "images": ["https://picsum.photos/seed/387-0/800/600", "https://picsum.photos/seed/387-1/800/600", "https://picsum.photos/seed/387-2/800/600"],
      "lotId": 387,
      "auctionId": 23,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 388 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/388/400/300",
      "images": ["https://picsum.photos/seed/388-0/800/600", "https://picsum.photos/seed/388-1/800/600", "https://picsum.photos/seed/388-2/800/600", "https://picsum.photos/seed/388-3/800/600"],
      "lotId": 388,
      "auctionId": 23,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 389 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/389/400/300",
      "images": ["https://picsum.photos/seed/389-0/800/600", "https://picsum.photos/seed/389-1/800/600", "https://picsum.photos/seed/389-2/800/600"],
      "lotId": 389,
      "auctionId": 23,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 390 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/390/400/300",
      "images": ["https://picsum.photos/seed/390-0/800/600", "https://picsum.photos/seed/390-1/800/600", "https://picsum.photos/seed/390-2/800/600", "https://picsum.photos/seed/390-3/800/600"],
      "lotId": 390,
      "auctionId": 23,
      "starting_bid": 4500,
      "reserve": false
    },
    {
      "title": "Lot Item 391 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/391/400/300",
      "images": ["https://picsum.photos/seed/391-0/800/600", "https://picsum.photos/seed/391-1/800/600", "https://picsum.photos/seed/391-2/800/600"],
      "lotId": 391,
      "auctionId": 23,
      "starting_bid": 1400,
      "reserve": true
    },
    {
      "title": "Lot Item 392 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/392/400/300",
      "images": ["https://picsum.photos/seed/392-0/800/600", "https://picsum.photos/seed/392-1/800/600"],
      "lotId": 392,
      "auctionId": 23,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 393 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/393/400/300",
      "images": ["https://picsum.photos/seed/393-0/800/600", "https://picsum.photos/seed/393-1/800/600"],
      "lotId": 393,
      "auctionId": 23,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 394 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/394/400/300",
      "images": ["https://picsum.photos/seed/394-0/800/600", "https://picsum.photos/seed/394-1/800/600"],
      "lotId": 394,
      "auctionId": 23,
      "starting_bid": 1400,
      "reserve": true
    },
    {
      "title": "Lot Item 395 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/395/400/300",
      "images": ["https://picsum.photos/seed/395-0/800/600", "https://picsum.photos/seed/395-1/800/600", "https://picsum.photos/seed/395-2/800/600"],
      "lotId": 395,
      "auctionId": 23,
      "starting_bid": 2200,
      "reserve": true
    },
    {
      "title": "Lot Item 396 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/396/400/300",
      "images": ["https://picsum.photos/seed/396-0/800/600", "https://picsum.photos/seed/396-1/800/600"],
      "lotId": 396,
      "auctionId": 23,
      "starting_bid": 2600,
      "reserve": false
    },
    {
      "title": "Lot Item 397 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/397/400/300",
      "images": ["https://picsum.photos/seed/397-0/800/600", "https://picsum.photos/seed/397-1/800/600", "https://picsum.photos/seed/397-2/800/600", "https://picsum.photos/seed/397-3/800/600"],
      "lotId": 397,
      "auctionId": 23,
      "starting_bid": 4600,
      "reserve": false
    },
    {
      "title": "Lot Item 398 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/398/400/300",
      "images": ["https://picsum.photos/seed/398-0/800/600", "https://picsum.photos/seed/398-1/800/600"],
      "lotId": 398,
      "auctionId": 23,
      "starting_bid": 3400,
      "reserve": true
    },
    {
      "title": "Lot Item 399 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/399/400/300",
      "images": ["https://picsum.photos/seed/399-0/800/600", "https://picsum.photos/seed/399-1/800/600", "https://picsum.photos/seed/399-2/800/600"],
      "lotId": 399,
      "auctionId": 23,
      "starting_bid": 1700,
      "reserve": false
    },
    {
      "title": "Lot Item 400 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/400/400/300",
      "images": ["https://picsum.photos/seed/400-0/800/600", "https://picsum.photos/seed/400-1/800/600", "https://picsum.photos/seed/400-2/800/600", "https://picsum.photos/seed/400-3/800/600"],
      "lotId": 400,
      "auctionId": 23,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 401 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/401/400/300",
      "images": ["https://picsum.photos/seed/401-0/800/600", "https://picsum.photos/seed/401-1/800/600", "https://picsum.photos/seed/401-2/800/600"],
      "lotId": 401,
      "auctionId": 23,
      "starting_bid": 3200,
      "reserve": false
    },
    {
      "title": "Lot Item 402 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/402/400/300",
      "images": ["https://picsum.photos/seed/402-0/800/600", "https://picsum.photos/seed/402-1/800/600", "https://picsum.photos/seed/402-2/800/600", "https://picsum.photos/seed/402-3/800/600"],
      "lotId": 402,
      "auctionId": 23,
      "starting_bid": 4000,
      "reserve": false
    },
    {
      "title": "Lot Item 403 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/403/400/300",
      "images": ["https://picsum.photos/seed/403-0/800/600", "https://picsum.photos/seed/403-1/800/600", "https://picsum.photos/seed/403-2/800/600", "https://picsum.photos/seed/403-3/800/600"],
      "lotId": 403,
      "auctionId": 23,
      "starting_bid": 2900,
      "reserve": true
    },
    {
      "title": "Lot Item 404 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/404/400/300",
      "images": ["https://picsum.photos/seed/404-0/800/600", "https://picsum.photos/seed/404-1/800/600"],
      "lotId": 404,
      "auctionId": 23,
      "starting_bid": 3000,
      "reserve": true
    },
    {
      "title": "Lot Item 405 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/405/400/300",
      "images": ["https://picsum.photos/seed/405-0/800/600", "https://picsum.photos/seed/405-1/800/600", "https://picsum.photos/seed/405-2/800/600", "https://picsum.photos/seed/405-3/800/600"],
      "lotId": 405,
      "auctionId": 23,
      "starting_bid": 4200,
      "reserve": false
    },
    {
      "title": "Lot Item 406 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/406/400/300",
      "images": ["https://picsum.photos/seed/406-0/800/600", "https://picsum.photos/seed/406-1/800/600", "https://picsum.photos/seed/406-2/800/600", "https://picsum.photos/seed/406-3/800/600"],
      "lotId": 406,
      "auctionId": 23,
      "starting_bid": 2500,
      "reserve": true
    },
    {
      "title": "Lot Item 407 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/407/400/300",
      "images": ["https://picsum.photos/seed/407-0/800/600", "https://picsum.photos/seed/407-1/800/600"],
      "lotId": 407,
      "auctionId": 23,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 408 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/408/400/300",
      "images": ["https://picsum.photos/seed/408-0/800/600", "https://picsum.photos/seed/408-1/800/600", "https://picsum.photos/seed/408-2/800/600", "https://picsum.photos/seed/408-3/800/600"],
      "lotId": 408,
      "auctionId": 23,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "Lot Item 409 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/409/400/300",
      "images": ["https://picsum.photos/seed/409-0/800/600", "https://picsum.photos/seed/409-1/800/600", "https://picsum.photos/seed/409-2/800/600", "https://picsum.photos/seed/409-3/800/600"],
      "lotId": 409,
      "auctionId": 23,
      "starting_bid": 1700,
      "reserve": true
    },
    {
      "title": "Lot Item 410 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/410/400/300",
      "images": ["https://picsum.photos/seed/410-0/800/600", "https://picsum.photos/seed/410-1/800/600", "https://picsum.photos/seed/410-2/800/600", "https://picsum.photos/seed/410-3/800/600"],
      "lotId": 410,
      "auctionId": 23,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 411 - Auction 23",
      "description": "A unique collectible item from auction 23, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/411/400/300",
      "images": ["https://picsum.photos/seed/411-0/800/600", "https://picsum.photos/seed/411-1/800/600"],
      "lotId": 411,
      "auctionId": 23,
      "starting_bid": 3100,
      "reserve": true
    },
    {
      "title": "Lot Item 412 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/412/400/300",
      "images": ["https://picsum.photos/seed/412-0/800/600", "https://picsum.photos/seed/412-1/800/600", "https://picsum.photos/seed/412-2/800/600", "https://picsum.photos/seed/412-3/800/600"],
      "lotId": 412,
      "auctionId": 29,
      "starting_bid": 3500,
      "reserve": true
    },
    {
      "title": "Lot Item 413 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/413/400/300",
      "images": ["https://picsum.photos/seed/413-0/800/600", "https://picsum.photos/seed/413-1/800/600", "https://picsum.photos/seed/413-2/800/600"],
      "lotId": 413,
      "auctionId": 29,
      "starting_bid": 3700,
      "reserve": false
    },
    {
      "title": "Lot Item 414 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/414/400/300",
      "images": ["https://picsum.photos/seed/414-0/800/600", "https://picsum.photos/seed/414-1/800/600", "https://picsum.photos/seed/414-2/800/600", "https://picsum.photos/seed/414-3/800/600"],
      "lotId": 414,
      "auctionId": 29,
      "starting_bid": 4500,
      "reserve": false
    },
    {
      "title": "Lot Item 415 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/415/400/300",
      "images": ["https://picsum.photos/seed/415-0/800/600", "https://picsum.photos/seed/415-1/800/600"],
      "lotId": 415,
      "auctionId": 29,
      "starting_bid": 1200,
      "reserve": false
    },
    {
      "title": "Lot Item 416 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/416/400/300",
      "images": ["https://picsum.photos/seed/416-0/800/600", "https://picsum.photos/seed/416-1/800/600", "https://picsum.photos/seed/416-2/800/600", "https://picsum.photos/seed/416-3/800/600"],
      "lotId": 416,
      "auctionId": 29,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 417 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/417/400/300",
      "images": ["https://picsum.photos/seed/417-0/800/600", "https://picsum.photos/seed/417-1/800/600", "https://picsum.photos/seed/417-2/800/600"],
      "lotId": 417,
      "auctionId": 29,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 418 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/418/400/300",
      "images": ["https://picsum.photos/seed/418-0/800/600", "https://picsum.photos/seed/418-1/800/600", "https://picsum.photos/seed/418-2/800/600", "https://picsum.photos/seed/418-3/800/600"],
      "lotId": 418,
      "auctionId": 29,
      "starting_bid": 800,
      "reserve": true
    },
    {
      "title": "Lot Item 419 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/419/400/300",
      "images": ["https://picsum.photos/seed/419-0/800/600", "https://picsum.photos/seed/419-1/800/600", "https://picsum.photos/seed/419-2/800/600"],
      "lotId": 419,
      "auctionId": 29,
      "starting_bid": 4600,
      "reserve": true
    },
    {
      "title": "Lot Item 420 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/420/400/300",
      "images": ["https://picsum.photos/seed/420-0/800/600", "https://picsum.photos/seed/420-1/800/600", "https://picsum.photos/seed/420-2/800/600"],
      "lotId": 420,
      "auctionId": 29,
      "starting_bid": 4700,
      "reserve": true
    },
    {
      "title": "Lot Item 421 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/421/400/300",
      "images": ["https://picsum.photos/seed/421-0/800/600", "https://picsum.photos/seed/421-1/800/600", "https://picsum.photos/seed/421-2/800/600"],
      "lotId": 421,
      "auctionId": 29,
      "starting_bid": 2900,
      "reserve": false
    },
    {
      "title": "Lot Item 422 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/422/400/300",
      "images": ["https://picsum.photos/seed/422-0/800/600", "https://picsum.photos/seed/422-1/800/600"],
      "lotId": 422,
      "auctionId": 29,
      "starting_bid": 4700,
      "reserve": true
    },
    {
      "title": "Lot Item 423 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/423/400/300",
      "images": ["https://picsum.photos/seed/423-0/800/600", "https://picsum.photos/seed/423-1/800/600", "https://picsum.photos/seed/423-2/800/600", "https://picsum.photos/seed/423-3/800/600"],
      "lotId": 423,
      "auctionId": 29,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 424 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/424/400/300",
      "images": ["https://picsum.photos/seed/424-0/800/600", "https://picsum.photos/seed/424-1/800/600", "https://picsum.photos/seed/424-2/800/600", "https://picsum.photos/seed/424-3/800/600"],
      "lotId": 424,
      "auctionId": 29,
      "starting_bid": 4000,
      "reserve": true
    },
    {
      "title": "Lot Item 425 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/425/400/300",
      "images": ["https://picsum.photos/seed/425-0/800/600", "https://picsum.photos/seed/425-1/800/600", "https://picsum.photos/seed/425-2/800/600", "https://picsum.photos/seed/425-3/800/600"],
      "lotId": 425,
      "auctionId": 29,
      "starting_bid": 3400,
      "reserve": true
    },
    {
      "title": "Lot Item 426 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/426/400/300",
      "images": ["https://picsum.photos/seed/426-0/800/600", "https://picsum.photos/seed/426-1/800/600", "https://picsum.photos/seed/426-2/800/600"],
      "lotId": 426,
      "auctionId": 29,
      "starting_bid": 2800,
      "reserve": true
    },
    {
      "title": "Lot Item 427 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/427/400/300",
      "images": ["https://picsum.photos/seed/427-0/800/600", "https://picsum.photos/seed/427-1/800/600", "https://picsum.photos/seed/427-2/800/600", "https://picsum.photos/seed/427-3/800/600"],
      "lotId": 427,
      "auctionId": 29,
      "starting_bid": 800,
      "reserve": false
    },
    {
      "title": "Lot Item 428 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/428/400/300",
      "images": ["https://picsum.photos/seed/428-0/800/600", "https://picsum.photos/seed/428-1/800/600"],
      "lotId": 428,
      "auctionId": 29,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 429 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/429/400/300",
      "images": ["https://picsum.photos/seed/429-0/800/600", "https://picsum.photos/seed/429-1/800/600"],
      "lotId": 429,
      "auctionId": 29,
      "starting_bid": 2500,
      "reserve": true
    },
    {
      "title": "Lot Item 430 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/430/400/300",
      "images": ["https://picsum.photos/seed/430-0/800/600", "https://picsum.photos/seed/430-1/800/600", "https://picsum.photos/seed/430-2/800/600", "https://picsum.photos/seed/430-3/800/600"],
      "lotId": 430,
      "auctionId": 29,
      "starting_bid": 2800,
      "reserve": false
    },
    {
      "title": "Lot Item 431 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/431/400/300",
      "images": ["https://picsum.photos/seed/431-0/800/600", "https://picsum.photos/seed/431-1/800/600", "https://picsum.photos/seed/431-2/800/600"],
      "lotId": 431,
      "auctionId": 29,
      "starting_bid": 4200,
      "reserve": true
    },
    {
      "title": "Lot Item 432 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/432/400/300",
      "images": ["https://picsum.photos/seed/432-0/800/600", "https://picsum.photos/seed/432-1/800/600", "https://picsum.photos/seed/432-2/800/600", "https://picsum.photos/seed/432-3/800/600"],
      "lotId": 432,
      "auctionId": 29,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "Lot Item 433 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/433/400/300",
      "images": ["https://picsum.photos/seed/433-0/800/600", "https://picsum.photos/seed/433-1/800/600", "https://picsum.photos/seed/433-2/800/600", "https://picsum.photos/seed/433-3/800/600"],
      "lotId": 433,
      "auctionId": 29,
      "starting_bid": 900,
      "reserve": false
    },
    {
      "title": "Lot Item 434 - Auction 29",
      "description": "A unique collectible item from auction 29, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/434/400/300",
      "images": ["https://picsum.photos/seed/434-0/800/600", "https://picsum.photos/seed/434-1/800/600"],
      "lotId": 434,
      "auctionId": 29,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 435 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/435/400/300",
      "images": ["https://picsum.photos/seed/435-0/800/600", "https://picsum.photos/seed/435-1/800/600", "https://picsum.photos/seed/435-2/800/600", "https://picsum.photos/seed/435-3/800/600"],
      "lotId": 435,
      "auctionId": 30,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 436 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/436/400/300",
      "images": ["https://picsum.photos/seed/436-0/800/600", "https://picsum.photos/seed/436-1/800/600", "https://picsum.photos/seed/436-2/800/600"],
      "lotId": 436,
      "auctionId": 30,
      "starting_bid": 1000,
      "reserve": true
    },
    {
      "title": "Lot Item 437 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/437/400/300",
      "images": ["https://picsum.photos/seed/437-0/800/600", "https://picsum.photos/seed/437-1/800/600", "https://picsum.photos/seed/437-2/800/600", "https://picsum.photos/seed/437-3/800/600"],
      "lotId": 437,
      "auctionId": 30,
      "starting_bid": 1200,
      "reserve": true
    },
    {
      "title": "Lot Item 438 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/438/400/300",
      "images": ["https://picsum.photos/seed/438-0/800/600", "https://picsum.photos/seed/438-1/800/600", "https://picsum.photos/seed/438-2/800/600", "https://picsum.photos/seed/438-3/800/600"],
      "lotId": 438,
      "auctionId": 30,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 439 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/439/400/300",
      "images": ["https://picsum.photos/seed/439-0/800/600", "https://picsum.photos/seed/439-1/800/600"],
      "lotId": 439,
      "auctionId": 30,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 440 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/440/400/300",
      "images": ["https://picsum.photos/seed/440-0/800/600", "https://picsum.photos/seed/440-1/800/600", "https://picsum.photos/seed/440-2/800/600"],
      "lotId": 440,
      "auctionId": 30,
      "starting_bid": 1800,
      "reserve": true
    },
    {
      "title": "Lot Item 441 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/441/400/300",
      "images": ["https://picsum.photos/seed/441-0/800/600", "https://picsum.photos/seed/441-1/800/600"],
      "lotId": 441,
      "auctionId": 30,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 442 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/442/400/300",
      "images": ["https://picsum.photos/seed/442-0/800/600", "https://picsum.photos/seed/442-1/800/600"],
      "lotId": 442,
      "auctionId": 30,
      "starting_bid": 2700,
      "reserve": false
    },
    {
      "title": "Lot Item 443 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/443/400/300",
      "images": ["https://picsum.photos/seed/443-0/800/600", "https://picsum.photos/seed/443-1/800/600", "https://picsum.photos/seed/443-2/800/600"],
      "lotId": 443,
      "auctionId": 30,
      "starting_bid": 1000,
      "reserve": false
    },
    {
      "title": "Lot Item 444 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/444/400/300",
      "images": ["https://picsum.photos/seed/444-0/800/600", "https://picsum.photos/seed/444-1/800/600"],
      "lotId": 444,
      "auctionId": 30,
      "starting_bid": 4300,
      "reserve": true
    },
    {
      "title": "Lot Item 445 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/445/400/300",
      "images": ["https://picsum.photos/seed/445-0/800/600", "https://picsum.photos/seed/445-1/800/600", "https://picsum.photos/seed/445-2/800/600"],
      "lotId": 445,
      "auctionId": 30,
      "starting_bid": 1600,
      "reserve": true
    },
    {
      "title": "Lot Item 446 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/446/400/300",
      "images": ["https://picsum.photos/seed/446-0/800/600", "https://picsum.photos/seed/446-1/800/600", "https://picsum.photos/seed/446-2/800/600", "https://picsum.photos/seed/446-3/800/600"],
      "lotId": 446,
      "auctionId": 30,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 447 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/447/400/300",
      "images": ["https://picsum.photos/seed/447-0/800/600", "https://picsum.photos/seed/447-1/800/600", "https://picsum.photos/seed/447-2/800/600", "https://picsum.photos/seed/447-3/800/600"],
      "lotId": 447,
      "auctionId": 30,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 448 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/448/400/300",
      "images": ["https://picsum.photos/seed/448-0/800/600", "https://picsum.photos/seed/448-1/800/600"],
      "lotId": 448,
      "auctionId": 30,
      "starting_bid": 4600,
      "reserve": true
    },
    {
      "title": "Lot Item 449 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/449/400/300",
      "images": ["https://picsum.photos/seed/449-0/800/600", "https://picsum.photos/seed/449-1/800/600", "https://picsum.photos/seed/449-2/800/600", "https://picsum.photos/seed/449-3/800/600"],
      "lotId": 449,
      "auctionId": 30,
      "starting_bid": 3200,
      "reserve": true
    },
    {
      "title": "Lot Item 450 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/450/400/300",
      "images": ["https://picsum.photos/seed/450-0/800/600", "https://picsum.photos/seed/450-1/800/600", "https://picsum.photos/seed/450-2/800/600", "https://picsum.photos/seed/450-3/800/600"],
      "lotId": 450,
      "auctionId": 30,
      "starting_bid": 2300,
      "reserve": false
    },
    {
      "title": "Lot Item 451 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/451/400/300",
      "images": ["https://picsum.photos/seed/451-0/800/600", "https://picsum.photos/seed/451-1/800/600", "https://picsum.photos/seed/451-2/800/600", "https://picsum.photos/seed/451-3/800/600"],
      "lotId": 451,
      "auctionId": 30,
      "starting_bid": 4100,
      "reserve": false
    },
    {
      "title": "Lot Item 452 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/452/400/300",
      "images": ["https://picsum.photos/seed/452-0/800/600", "https://picsum.photos/seed/452-1/800/600", "https://picsum.photos/seed/452-2/800/600"],
      "lotId": 452,
      "auctionId": 30,
      "starting_bid": 3600,
      "reserve": true
    },
    {
      "title": "Lot Item 453 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/453/400/300",
      "images": ["https://picsum.photos/seed/453-0/800/600", "https://picsum.photos/seed/453-1/800/600", "https://picsum.photos/seed/453-2/800/600"],
      "lotId": 453,
      "auctionId": 30,
      "starting_bid": 3800,
      "reserve": true
    },
    {
      "title": "Lot Item 454 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/454/400/300",
      "images": ["https://picsum.photos/seed/454-0/800/600", "https://picsum.photos/seed/454-1/800/600"],
      "lotId": 454,
      "auctionId": 30,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 455 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/455/400/300",
      "images": ["https://picsum.photos/seed/455-0/800/600", "https://picsum.photos/seed/455-1/800/600"],
      "lotId": 455,
      "auctionId": 30,
      "starting_bid": 4500,
      "reserve": false
    },
    {
      "title": "Lot Item 456 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/456/400/300",
      "images": ["https://picsum.photos/seed/456-0/800/600", "https://picsum.photos/seed/456-1/800/600", "https://picsum.photos/seed/456-2/800/600", "https://picsum.photos/seed/456-3/800/600"],
      "lotId": 456,
      "auctionId": 30,
      "starting_bid": 2100,
      "reserve": true
    },
    {
      "title": "Lot Item 457 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/457/400/300",
      "images": ["https://picsum.photos/seed/457-0/800/600", "https://picsum.photos/seed/457-1/800/600", "https://picsum.photos/seed/457-2/800/600", "https://picsum.photos/seed/457-3/800/600"],
      "lotId": 457,
      "auctionId": 30,
      "starting_bid": 3300,
      "reserve": true
    },
    {
      "title": "Lot Item 458 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/458/400/300",
      "images": ["https://picsum.photos/seed/458-0/800/600", "https://picsum.photos/seed/458-1/800/600", "https://picsum.photos/seed/458-2/800/600"],
      "lotId": 458,
      "auctionId": 30,
      "starting_bid": 4400,
      "reserve": false
    },
    {
      "title": "Lot Item 459 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/459/400/300",
      "images": ["https://picsum.photos/seed/459-0/800/600", "https://picsum.photos/seed/459-1/800/600", "https://picsum.photos/seed/459-2/800/600", "https://picsum.photos/seed/459-3/800/600"],
      "lotId": 459,
      "auctionId": 30,
      "starting_bid": 3600,
      "reserve": false
    },
    {
      "title": "Lot Item 460 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/460/400/300",
      "images": ["https://picsum.photos/seed/460-0/800/600", "https://picsum.photos/seed/460-1/800/600", "https://picsum.photos/seed/460-2/800/600", "https://picsum.photos/seed/460-3/800/600"],
      "lotId": 460,
      "auctionId": 30,
      "starting_bid": 4900,
      "reserve": false
    },
    {
      "title": "Lot Item 461 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/461/400/300",
      "images": ["https://picsum.photos/seed/461-0/800/600", "https://picsum.photos/seed/461-1/800/600", "https://picsum.photos/seed/461-2/800/600"],
      "lotId": 461,
      "auctionId": 30,
      "starting_bid": 4300,
      "reserve": true
    },
    {
      "title": "Lot Item 462 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/462/400/300",
      "images": ["https://picsum.photos/seed/462-0/800/600", "https://picsum.photos/seed/462-1/800/600"],
      "lotId": 462,
      "auctionId": 30,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 463 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/463/400/300",
      "images": ["https://picsum.photos/seed/463-0/800/600", "https://picsum.photos/seed/463-1/800/600", "https://picsum.photos/seed/463-2/800/600"],
      "lotId": 463,
      "auctionId": 30,
      "starting_bid": 1300,
      "reserve": false
    },
    {
      "title": "Lot Item 464 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/464/400/300",
      "images": ["https://picsum.photos/seed/464-0/800/600", "https://picsum.photos/seed/464-1/800/600"],
      "lotId": 464,
      "auctionId": 30,
      "starting_bid": 3300,
      "reserve": false
    },
    {
      "title": "Lot Item 465 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/465/400/300",
      "images": ["https://picsum.photos/seed/465-0/800/600", "https://picsum.photos/seed/465-1/800/600", "https://picsum.photos/seed/465-2/800/600"],
      "lotId": 465,
      "auctionId": 30,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 466 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/466/400/300",
      "images": ["https://picsum.photos/seed/466-0/800/600", "https://picsum.photos/seed/466-1/800/600"],
      "lotId": 466,
      "auctionId": 30,
      "starting_bid": 1800,
      "reserve": true
    },
    {
      "title": "Lot Item 467 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/467/400/300",
      "images": ["https://picsum.photos/seed/467-0/800/600", "https://picsum.photos/seed/467-1/800/600"],
      "lotId": 467,
      "auctionId": 30,
      "starting_bid": 4300,
      "reserve": false
    },
    {
      "title": "Lot Item 468 - Auction 30",
      "description": "A unique collectible item from auction 30, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/468/400/300",
      "images": ["https://picsum.photos/seed/468-0/800/600", "https://picsum.photos/seed/468-1/800/600"],
      "lotId": 468,
      "auctionId": 30,
      "starting_bid": 2100,
      "reserve": false
    },
    {
      "title": "Lot Item 469 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/469/400/300",
      "images": ["https://picsum.photos/seed/469-0/800/600", "https://picsum.photos/seed/469-1/800/600"],
      "lotId": 469,
      "auctionId": 35,
      "starting_bid": 1500,
      "reserve": false
    },
    {
      "title": "Lot Item 470 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/470/400/300",
      "images": ["https://picsum.photos/seed/470-0/800/600", "https://picsum.photos/seed/470-1/800/600", "https://picsum.photos/seed/470-2/800/600", "https://picsum.photos/seed/470-3/800/600"],
      "lotId": 470,
      "auctionId": 35,
      "starting_bid": 3100,
      "reserve": false
    },
    {
      "title": "Lot Item 471 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/471/400/300",
      "images": ["https://picsum.photos/seed/471-0/800/600", "https://picsum.photos/seed/471-1/800/600", "https://picsum.photos/seed/471-2/800/600", "https://picsum.photos/seed/471-3/800/600"],
      "lotId": 471,
      "auctionId": 35,
      "starting_bid": 700,
      "reserve": false
    },
    {
      "title": "Lot Item 472 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/472/400/300",
      "images": ["https://picsum.photos/seed/472-0/800/600", "https://picsum.photos/seed/472-1/800/600"],
      "lotId": 472,
      "auctionId": 35,
      "starting_bid": 3700,
      "reserve": true
    },
    {
      "title": "Lot Item 473 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/473/400/300",
      "images": ["https://picsum.photos/seed/473-0/800/600", "https://picsum.photos/seed/473-1/800/600", "https://picsum.photos/seed/473-2/800/600"],
      "lotId": 473,
      "auctionId": 35,
      "starting_bid": 3700,
      "reserve": true
    },
    {
      "title": "Lot Item 474 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/474/400/300",
      "images": ["https://picsum.photos/seed/474-0/800/600", "https://picsum.photos/seed/474-1/800/600", "https://picsum.photos/seed/474-2/800/600", "https://picsum.photos/seed/474-3/800/600"],
      "lotId": 474,
      "auctionId": 35,
      "starting_bid": 4900,
      "reserve": true
    },
    {
      "title": "Lot Item 475 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/475/400/300",
      "images": ["https://picsum.photos/seed/475-0/800/600", "https://picsum.photos/seed/475-1/800/600", "https://picsum.photos/seed/475-2/800/600", "https://picsum.photos/seed/475-3/800/600"],
      "lotId": 475,
      "auctionId": 35,
      "starting_bid": 3400,
      "reserve": false
    },
    {
      "title": "Lot Item 476 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/476/400/300",
      "images": ["https://picsum.photos/seed/476-0/800/600", "https://picsum.photos/seed/476-1/800/600"],
      "lotId": 476,
      "auctionId": 35,
      "starting_bid": 1700,
      "reserve": false
    },
    {
      "title": "Lot Item 477 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/477/400/300",
      "images": ["https://picsum.photos/seed/477-0/800/600", "https://picsum.photos/seed/477-1/800/600"],
      "lotId": 477,
      "auctionId": 35,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 478 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/478/400/300",
      "images": ["https://picsum.photos/seed/478-0/800/600", "https://picsum.photos/seed/478-1/800/600"],
      "lotId": 478,
      "auctionId": 35,
      "starting_bid": 4800,
      "reserve": true
    },
    {
      "title": "Lot Item 479 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/479/400/300",
      "images": ["https://picsum.photos/seed/479-0/800/600", "https://picsum.photos/seed/479-1/800/600", "https://picsum.photos/seed/479-2/800/600", "https://picsum.photos/seed/479-3/800/600"],
      "lotId": 479,
      "auctionId": 35,
      "starting_bid": 3300,
      "reserve": true
    },
    {
      "title": "Lot Item 480 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/480/400/300",
      "images": ["https://picsum.photos/seed/480-0/800/600", "https://picsum.photos/seed/480-1/800/600"],
      "lotId": 480,
      "auctionId": 35,
      "starting_bid": 3700,
      "reserve": false
    },
    {
      "title": "Lot Item 481 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/481/400/300",
      "images": ["https://picsum.photos/seed/481-0/800/600", "https://picsum.photos/seed/481-1/800/600"],
      "lotId": 481,
      "auctionId": 35,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "Lot Item 482 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/482/400/300",
      "images": ["https://picsum.photos/seed/482-0/800/600", "https://picsum.photos/seed/482-1/800/600"],
      "lotId": 482,
      "auctionId": 35,
      "starting_bid": 1900,
      "reserve": true
    },
    {
      "title": "Lot Item 483 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/483/400/300",
      "images": ["https://picsum.photos/seed/483-0/800/600", "https://picsum.photos/seed/483-1/800/600"],
      "lotId": 483,
      "auctionId": 35,
      "starting_bid": 1900,
      "reserve": false
    },
    {
      "title": "Lot Item 484 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/484/400/300",
      "images": ["https://picsum.photos/seed/484-0/800/600", "https://picsum.photos/seed/484-1/800/600"],
      "lotId": 484,
      "auctionId": 35,
      "starting_bid": 2500,
      "reserve": false
    },
    {
      "title": "Lot Item 485 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/485/400/300",
      "images": ["https://picsum.photos/seed/485-0/800/600", "https://picsum.photos/seed/485-1/800/600", "https://picsum.photos/seed/485-2/800/600", "https://picsum.photos/seed/485-3/800/600"],
      "lotId": 485,
      "auctionId": 35,
      "starting_bid": 900,
      "reserve": false
    },
    {
      "title": "Lot Item 486 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/486/400/300",
      "images": ["https://picsum.photos/seed/486-0/800/600", "https://picsum.photos/seed/486-1/800/600", "https://picsum.photos/seed/486-2/800/600"],
      "lotId": 486,
      "auctionId": 35,
      "starting_bid": 1000,
      "reserve": false
    },
    {
      "title": "Lot Item 487 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/487/400/300",
      "images": ["https://picsum.photos/seed/487-0/800/600", "https://picsum.photos/seed/487-1/800/600", "https://picsum.photos/seed/487-2/800/600", "https://picsum.photos/seed/487-3/800/600"],
      "lotId": 487,
      "auctionId": 35,
      "starting_bid": 1900,
      "reserve": false
    },
    {
      "title": "Lot Item 488 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/488/400/300",
      "images": ["https://picsum.photos/seed/488-0/800/600", "https://picsum.photos/seed/488-1/800/600", "https://picsum.photos/seed/488-2/800/600"],
      "lotId": 488,
      "auctionId": 35,
      "starting_bid": 1700,
      "reserve": false
    },
    {
      "title": "Lot Item 489 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/489/400/300",
      "images": ["https://picsum.photos/seed/489-0/800/600", "https://picsum.photos/seed/489-1/800/600", "https://picsum.photos/seed/489-2/800/600"],
      "lotId": 489,
      "auctionId": 35,
      "starting_bid": 1100,
      "reserve": true
    },
    {
      "title": "Lot Item 490 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/490/400/300",
      "images": ["https://picsum.photos/seed/490-0/800/600", "https://picsum.photos/seed/490-1/800/600", "https://picsum.photos/seed/490-2/800/600"],
      "lotId": 490,
      "auctionId": 35,
      "starting_bid": 2300,
      "reserve": true
    },
    {
      "title": "Lot Item 491 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/491/400/300",
      "images": ["https://picsum.photos/seed/491-0/800/600", "https://picsum.photos/seed/491-1/800/600", "https://picsum.photos/seed/491-2/800/600"],
      "lotId": 491,
      "auctionId": 35,
      "starting_bid": 3900,
      "reserve": true
    },
    {
      "title": "Lot Item 492 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/492/400/300",
      "images": ["https://picsum.photos/seed/492-0/800/600", "https://picsum.photos/seed/492-1/800/600", "https://picsum.photos/seed/492-2/800/600", "https://picsum.photos/seed/492-3/800/600"],
      "lotId": 492,
      "auctionId": 35,
      "starting_bid": 4400,
      "reserve": false
    },
    {
      "title": "Lot Item 493 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/493/400/300",
      "images": ["https://picsum.photos/seed/493-0/800/600", "https://picsum.photos/seed/493-1/800/600"],
      "lotId": 493,
      "auctionId": 35,
      "starting_bid": 2400,
      "reserve": true
    },
    {
      "title": "Lot Item 494 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/494/400/300",
      "images": ["https://picsum.photos/seed/494-0/800/600", "https://picsum.photos/seed/494-1/800/600"],
      "lotId": 494,
      "auctionId": 35,
      "starting_bid": 3300,
      "reserve": false
    },
    {
      "title": "Lot Item 495 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/495/400/300",
      "images": ["https://picsum.photos/seed/495-0/800/600", "https://picsum.photos/seed/495-1/800/600", "https://picsum.photos/seed/495-2/800/600", "https://picsum.photos/seed/495-3/800/600"],
      "lotId": 495,
      "auctionId": 35,
      "starting_bid": 3500,
      "reserve": false
    },
    {
      "title": "Lot Item 496 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/496/400/300",
      "images": ["https://picsum.photos/seed/496-0/800/600", "https://picsum.photos/seed/496-1/800/600", "https://picsum.photos/seed/496-2/800/600"],
      "lotId": 496,
      "auctionId": 35,
      "starting_bid": 4000,
      "reserve": false
    },
    {
      "title": "Lot Item 497 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/497/400/300",
      "images": ["https://picsum.photos/seed/497-0/800/600", "https://picsum.photos/seed/497-1/800/600", "https://picsum.photos/seed/497-2/800/600", "https://picsum.photos/seed/497-3/800/600"],
      "lotId": 497,
      "auctionId": 35,
      "starting_bid": 900,
      "reserve": true
    },
    {
      "title": "Lot Item 498 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/498/400/300",
      "images": ["https://picsum.photos/seed/498-0/800/600", "https://picsum.photos/seed/498-1/800/600", "https://picsum.photos/seed/498-2/800/600", "https://picsum.photos/seed/498-3/800/600"],
      "lotId": 498,
      "auctionId": 35,
      "starting_bid": 700,
      "reserve": false
    },
    {
      "title": "Lot Item 499 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/499/400/300",
      "images": ["https://picsum.photos/seed/499-0/800/600", "https://picsum.photos/seed/499-1/800/600", "https://picsum.photos/seed/499-2/800/600", "https://picsum.photos/seed/499-3/800/600"],
      "lotId": 499,
      "auctionId": 35,
      "starting_bid": 2000,
      "reserve": true
    },
    {
      "title": "Lot Item 500 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/500/400/300",
      "images": ["https://picsum.photos/seed/500-0/800/600", "https://picsum.photos/seed/500-1/800/600"],
      "lotId": 500,
      "auctionId": 35,
      "starting_bid": 3800,
      "reserve": false
    },
    {
      "title": "Lot Item 501 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/501/400/300",
      "images": ["https://picsum.photos/seed/501-0/800/600", "https://picsum.photos/seed/501-1/800/600", "https://picsum.photos/seed/501-2/800/600", "https://picsum.photos/seed/501-3/800/600"],
      "lotId": 501,
      "auctionId": 35,
      "starting_bid": 2400,
      "reserve": false
    },
    {
      "title": "Lot Item 502 - Auction 35",
      "description": "A unique collectible item from auction 35, carefully curated for discerning collectors.",
      "thumb": "https://picsum.photos/seed/502/400/300",
      "images": ["https://picsum.photos/seed/502-0/800/600", "https://picsum.photos/seed/502-1/800/600", "https://picsum.photos/seed/502-2/800/600", "https://picsum.photos/seed/502-3/800/600"],
      "lotId": 502,
      "auctionId": 35,
      "starting_bid": 2700,
      "reserve": true
    }
  

  const mockAuctionCommons = [
    {
      "auctionId": 1,
      "startDate": "2024-07-01T10:00:00Z",
      "endDate": "2024-07-10T18:00:00Z",
      "info": "Auction held at Kilpatrick Estate, 123 Main St, Springfield."
    },
    {
      "auctionId": 2,
      "startDate": "2024-08-05T09:00:00Z",
      "endDate": "2024-08-15T17:00:00Z",
      "info": "Modern Art Auction at Downtown Gallery, 456 Art St, Metropolis."
    },
    {
      "auctionId": 3,
      "startDate": "2024-09-10T11:00:00Z",
      "endDate": "2024-09-20T19:00:00Z",
      "info": "Vintage Car Auction at Classic Motors, 789 Auto Ave, Gotham."
    },
    {
      "auctionId": 4,
      "startDate": "2024-10-01T10:00:00Z",
      "endDate": "2024-10-10T18:00:00Z",
      "info": "Jewelry and Watch Auction at Luxe Jewelers, 321 Gem St, Star City."
    },
    {
      "auctionId": 5,
      "startDate": "2024-11-15T09:00:00Z",
      "endDate": "2024-11-25T17:00:00Z",
      "info": "Rare Book Auction at Old Books, 654 Read Ln, Central City."
    },
    {
      "auctionId": 6,
      "startDate": "2024-12-01T11:00:00Z",
      "endDate": "2024-12-10T19:00:00Z",
      "info": "Sports Memorabilia Auction at Sports Legends, 987 Sport St, Coast City."
    }
  ,
    {
      "auctionId": 7,
      "startDate": "2025-02-05T10:00:00Z",
      "endDate": "2025-02-15T18:00:00Z",
      "info": "Auction at Heritage Hall, 111 Vintage Rd, Oldtown."
    },
    {
      "auctionId": 8,
      "startDate": "2025-03-05T10:00:00Z",
      "endDate": "2025-03-15T18:00:00Z",
      "info": "Auction at The Cellar, 222 Grape St, Wine Valley."
    },
    {
      "auctionId": 9,
      "startDate": "2025-04-05T10:00:00Z",
      "endDate": "2025-04-15T18:00:00Z",
      "info": "Auction at Orient Gallery, 333 Dynasty Ave, Harbor City."
    },
    {
      "auctionId": 10,
      "startDate": "2025-05-05T10:00:00Z",
      "endDate": "2025-05-15T18:00:00Z",
      "info": "Auction at Melody House, 444 Harmony Ln, Music City."
    },
    {
      "auctionId": 11,
      "startDate": "2025-06-05T10:00:00Z",
      "endDate": "2025-06-15T18:00:00Z",
      "info": "Auction at Silver Screen, 555 Film St, Hollywood."
    },
    {
      "auctionId": 12,
      "startDate": "2025-07-05T10:00:00Z",
      "endDate": "2025-07-15T18:00:00Z",
      "info": "Auction at Numismatic Center, 666 Mint Rd, Capital City."
    },
    {
      "auctionId": 13,
      "startDate": "2025-08-05T10:00:00Z",
      "endDate": "2025-08-15T18:00:00Z",
      "info": "Auction at Couture House, 777 Runway Ave, Fashion District."
    },
    {
      "auctionId": 14,
      "startDate": "2025-09-05T10:00:00Z",
      "endDate": "2025-09-15T18:00:00Z",
      "info": "Auction at Discovery Hall, 888 Science Pkwy, Research Park."
    },
    {
      "auctionId": 15,
      "startDate": "2025-10-05T10:00:00Z",
      "endDate": "2025-10-15T18:00:00Z",
      "info": "Auction at Pop Culture, 999 Hero St, Metropolis."
    },
    {
      "auctionId": 16,
      "startDate": "2025-11-05T10:00:00Z",
      "endDate": "2025-11-15T18:00:00Z",
      "info": "Auction at Nostalgia Center, 1010 Play Ave, Toytown."
    },
    {
      "auctionId": 17,
      "startDate": "2025-12-05T10:00:00Z",
      "endDate": "2025-12-15T18:00:00Z",
      "info": "Auction at Aperture Gallery, 1111 Lens Ln, Photo City."
    },
    {
      "auctionId": 18,
      "startDate": "2026-01-05T10:00:00Z",
      "endDate": "2026-01-15T18:00:00Z",
      "info": "Auction at Veterans Hall, 1212 Honor Rd, Fort City."
    },
    {
      "auctionId": 19,
      "startDate": "2026-02-05T10:00:00Z",
      "endDate": "2026-02-15T18:00:00Z",
      "info": "Auction at Prism House, 1313 Sparkle St, Crystal Bay."
    },
    {
      "auctionId": 20,
      "startDate": "2026-03-05T10:00:00Z",
      "endDate": "2026-03-15T18:00:00Z",
      "info": "Auction at Philatelic Society, 1414 Post Rd, Stamp City."
    },
    {
      "auctionId": 21,
      "startDate": "2026-04-05T10:00:00Z",
      "endDate": "2026-04-15T18:00:00Z",
      "info": "Auction at Estate Grounds, 1515 Manor Dr, Garden City."
    },
    {
      "auctionId": 22,
      "startDate": "2026-05-05T10:00:00Z",
      "endDate": "2026-05-15T18:00:00Z",
      "info": "Auction at World Gallery, 1616 Heritage Ave, Cultural Center."
    },
    {
      "auctionId": 23,
      "startDate": "2026-06-05T10:00:00Z",
      "endDate": "2026-06-15T18:00:00Z",
      "info": "Auction at Tech Museum, 1717 Circuit Rd, Silicon Valley."
    },
    {
      "auctionId": 24,
      "startDate": "2026-07-05T10:00:00Z",
      "endDate": "2026-07-15T18:00:00Z",
      "info": "Auction at Maritime Museum, 1818 Harbor Ln, Port City."
    },
    {
      "auctionId": 25,
      "startDate": "2026-08-05T10:00:00Z",
      "endDate": "2026-08-15T18:00:00Z",
      "info": "Auction at Ranch House, 1919 Prairie Rd, Cowboy Town."
    },
    {
      "auctionId": 26,
      "startDate": "2026-09-05T10:00:00Z",
      "endDate": "2026-09-15T18:00:00Z",
      "info": "Auction at Sterling House, 2020 Shine St, Silver City."
    },
    {
      "auctionId": 27,
      "startDate": "2026-10-05T10:00:00Z",
      "endDate": "2026-10-15T18:00:00Z",
      "info": "Auction at Cartography Center, 2121 Globe Ave, Map City."
    },
    {
      "auctionId": 28,
      "startDate": "2026-11-05T10:00:00Z",
      "endDate": "2026-11-15T18:00:00Z",
      "info": "Auction at Timekeeper Hall, 2222 Tick St, Clock Town."
    },
    {
      "auctionId": 29,
      "startDate": "2026-12-05T10:00:00Z",
      "endDate": "2026-12-15T18:00:00Z",
      "info": "Auction at Weaver's Market, 2323 Thread Ln, Textile City."
    },
    {
      "auctionId": 30,
      "startDate": "2027-01-05T10:00:00Z",
      "endDate": "2027-01-15T18:00:00Z",
      "info": "Auction at Luminaire Gallery, 2424 Glow Rd, Light City."
    },
    {
      "auctionId": 31,
      "startDate": "2027-02-05T10:00:00Z",
      "endDate": "2027-02-15T18:00:00Z",
      "info": "Auction at Fine China House, 2525 Delicate St, Pottery City."
    },
    {
      "auctionId": 32,
      "startDate": "2027-03-05T10:00:00Z",
      "endDate": "2027-03-15T18:00:00Z",
      "info": "Auction at Athletic Center, 2626 Victory Ln, Sports City."
    },
    {
      "auctionId": 33,
      "startDate": "2027-04-05T10:00:00Z",
      "endDate": "2027-04-15T18:00:00Z",
      "info": "Auction at Retro Mall, 2727 Neon Ave, Ad City."
    },
    {
      "auctionId": 34,
      "startDate": "2027-05-05T10:00:00Z",
      "endDate": "2027-05-15T18:00:00Z",
      "info": "Auction at Sacred Gallery, 2828 Divine Rd, Holy City."
    },
    {
      "auctionId": 35,
      "startDate": "2027-06-05T10:00:00Z",
      "endDate": "2027-06-15T18:00:00Z",
      "info": "Auction at Apothecary Hall, 2929 Remedy St, Med City."
    }
  ]
