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
    }
  ];

  const mockLots = [{
      "title": "1920s Silver Coin",
      "description": "A rare silver coin from the 1920s in excellent condition.",
      "thumb": "https://picsum.photos/seed/11/400/300",
      "images": ["https://picsum.photos/seed/11a/800/600", "https://picsum.photos/seed/11b/800/600"],
      "lotId": 101,
      "auctionId": 1
    },
    {
      "title": "Abstract Painting by Jane Doe",
      "description": "A vibrant abstract painting by contemporary artist Jane Doe.",
      "thumb": "https://picsum.photos/seed/12/400/300",
      "images": ["https://picsum.photos/seed/12a/800/600", "https://picsum.photos/seed/12b/800/600"],
      "lotId": 102,
      "auctionId": 2
    },
    {
      "title": "1965 Ford Mustang",
      "description": "A classic 1965 Ford Mustang, fully restored and in running condition.",
      "thumb": "https://picsum.photos/seed/13/400/300",
      "images": ["https://picsum.photos/seed/13a/800/600", "https://picsum.photos/seed/13b/800/600", "https://picsum.photos/seed/13c/800/600"],
      "lotId": 103,
      "auctionId": 3
    },
    {
      "title": "Rolex Submariner Watch",
      "description": "A luxury Rolex Submariner watch with original box and papers.",
      "thumb": "https://picsum.photos/seed/14/400/300",
      "images": ["https://picsum.photos/seed/14a/800/600", "https://picsum.photos/seed/14b/800/600"],
      "lotId": 104,
      "auctionId": 4
    },
    {
      "title": "First Edition 'The Great Gatsby'",
      "description": "A first edition copy of F. Scott Fitzgerald's 'The Great Gatsby'.",
      "thumb": "https://picsum.photos/seed/15/400/300",
      "images": ["https://picsum.photos/seed/15a/800/600", "https://picsum.photos/seed/15b/800/600"],
      "lotId": 105,
      "auctionId": 5
    },
    {
      "title": "Signed Baseball by Babe Ruth",
      "description": "A baseball signed by the legendary Babe Ruth.",
      "thumb": "https://picsum.photos/seed/16/400/300",
      "images": ["https://picsum.photos/seed/16a/800/600", "https://picsum.photos/seed/16b/800/600"],
      "lotId": 106,
      "auctionId": 6
    },
    {
      "title": "Antique Wooden Doll",
      "description": "A beautifully crafted antique wooden doll from the early 1900s.",
      "thumb": "https://picsum.photos/seed/17/400/300",
      "images": ["https://picsum.photos/seed/17a/800/600", "https://picsum.photos/seed/17b/800/600"],
      "lotId": 107,
      "auctionId": 1
    },
    {
      "title": "Contemporary Sculpture",
      "description": "A striking contemporary sculpture made from mixed media.",
      "thumb": "https://picsum.photos/seed/18/400/300",
      "images": ["https://picsum.photos/seed/18a/800/600", "https://picsum.photos/seed/18b/800/600"],
      "lotId": 108,
      "auctionId": 2
    },
    {
      "title": "1970s Chevrolet Camaro",
      "description": "A vintage 1970s Chevrolet Camaro in excellent condition.",
      "thumb": "https://picsum.photos/seed/19/400/300",
      "images": ["https://picsum.photos/seed/19a/800/600", "https://picsum.photos/seed/19b/800/600"],
      "lotId": 109,
      "auctionId": 3
    },
    {
      "title": "Diamond Necklace",
      "description": "An exquisite diamond necklace with a platinum setting.",
      "thumb": "https://picsum.photos/seed/20/400/300",
      "images": ["https://picsum.photos/seed/20a/800/600", "https://picsum.photos/seed/20b/800/600"],
      "lotId": 110,
      "auctionId": 4
    },
    {
      "title": "Signed Copy of '1984' by George Orwell",
      "description": "A signed first edition of George Orwell's dystopian novel '1984'.",
      "thumb": "https://picsum.photos/seed/21/400/300",
      "images": ["https://picsum.photos/seed/21a/800/600", "https://picsum.photos/seed/21b/800/600"],
      "lotId": 111,
      "auctionId": 5
    },
    {
      "title": "Game-Worn Jersey by Michael Jordan",
      "description": "An authentic game-worn jersey from basketball legend Michael Jordan.",
      "thumb": "https://picsum.photos/seed/22/400/300",
      "images": ["https://picsum.photos/seed/22a/800/600", "https://picsum.photos/seed/22b/800/600"],
      "lotId": 112,
      "auctionId": 6
    },
    {
      "title": "Antique Wooden Chair",
      "description": "A finely crafted antique wooden chair from the Victorian era.",
      "thumb": "https://picsum.photos/seed/23/400/300",
      "images": ["https://picsum.photos/seed/23a/800/600", "https://picsum.photos/seed/23b/800/600"],
      "lotId": 113,
      "auctionId": 1
    },
    {
      "title": "Landscape Painting by John Smith",
      "description": "A serene landscape painting by renowned artist John Smith.",
      "thumb": "https://picsum.photos/seed/24/400/300",
      "images": ["https://picsum.photos/seed/24a/800/600", "https://picsum.photos/seed/24b/800/600"],
      "lotId": 114,
      "auctionId": 2
    },
    {
      "title": "1950s Cadillac",
      "description": "A classic 1950s Cadillac in mint condition.",
      "thumb": "https://picsum.photos/seed/25/400/300",
      "images": ["https://picsum.photos/seed/25a/800/600", "https://picsum.photos/seed/25b/800/600"],
      "lotId": 115,
      "auctionId": 3
    },
    {
      "title": "Emerald Ring",
      "description": "A stunning emerald ring set in gold.",
      "thumb": "https://picsum.photos/seed/26/400/300",
      "images": ["https://picsum.photos/seed/26a/800/600", "https://picsum.photos/seed/26b/800/600"],
      "lotId": 116,
      "auctionId": 4
    },
    {
      "title": "First Edition 'To Kill a Mockingbird'",
      "description": "A first edition copy of Harper Lee's 'To Kill a Mockingbird'.",
      "thumb": "https://picsum.photos/seed/27/400/300",
      "images": ["https://picsum.photos/seed/27a/800/600", "https://picsum.photos/seed/27b/800/600"],
      "lotId": 117,
      "auctionId": 5
    },
    {
      "title": "Signed Football by Tom Brady",
      "description": "A football signed by NFL star Tom Brady.",
      "thumb": "https://picsum.photos/seed/28/400/300",
      "images": ["https://picsum.photos/seed/28a/800/600", "https://picsum.photos/seed/28b/800/600"],
      "lotId": 118,
      "auctionId": 6
    },
    {
      "title": "Vintage Pocket Watch",
      "description": "A beautifully engraved vintage pocket watch from the early 1900s.",
      "thumb": "https://picsum.photos/seed/29/400/300",
      "images": ["https://picsum.photos/seed/29a/800/600", "https://picsum.photos/seed/29b/800/600"],
      "lotId": 119,
      "auctionId": 1
    },
    {
      "title": "Modern Art Print",
      "description": "A limited edition modern art print by a famous artist.",
      "thumb": "https://picsum.photos/seed/30/400/300",
      "images": ["https://picsum.photos/seed/30a/800/600", "https://picsum.photos/seed/30b/800/600"],
      "lotId": 120,
      "auctionId": 2
    },
    {
      "title": "1980s BMW M3",
      "description": "A classic 1980s BMW M3 in excellent condition.",
      "thumb": "https://picsum.photos/seed/31/400/300",
      "images": ["https://picsum.photos/seed/31a/800/600", "https://picsum.photos/seed/31b/800/600"],
      "lotId": 121,
      "auctionId": 3
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
  ]