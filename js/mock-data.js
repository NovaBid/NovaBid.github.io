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
    }
  ];

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
