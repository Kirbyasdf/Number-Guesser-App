Schema


USERS
-name
-email
-passwordhash
-age
-location
-verifed? 
Albums: ref Albums
CERTS: ref CERTS
BADGES ref BADGES
verfified: boolean

followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],




BADGES :{
    name:
    emblem:
    details
}

VENDORS
-name
-email
-passwordhash
-POC_EMAIL
-Activitis ref : Activities

ACTIVITIES = {
    name:
    detail:
    price:
    spots:
    duration:
    SignedUp: [
        ref USERS
    ]
}

RETAILERS
-name
-email
-passwordhash
-POC_EMAIL
-innovatory: ref Sale_Items
-REVIEWS: [
    {
        user: ref USER,
        rating:
        text:
    }
]

SALE_ITEMS {
    name:
    price:
    description
}

POSTS {

}

CERTS ({
    name:,
    details,
    picture:
    expiration:?

})

let userSchema = new mongoose.Schema({

    username: String,
  
    password: { type: String, select: false },
  
    avatarUrl: figure out how to save photo in mongodb
  
    name: String,
  
    bio: String,
  
    followers: [
  
      {
  
        type: mongoose.Schema.Types.ObjectId,
  
        ref: "User"
  
      }
  
    ],
  
    following: [
  
      {
  
        type: mongoose.Schema.Types.ObjectId,
  
        ref: "User"
  
      }
  
    ],
  
    bookmarks: [
  
      {
  
        type: mongoose.Schema.Types.ObjectId,
  
        ref: "Post"
  
      }
  
    ]
  
  });
  


