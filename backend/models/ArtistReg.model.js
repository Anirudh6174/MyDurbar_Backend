const mongoose = require("mongoose");

const artistRegistrationSchema = new mongoose.Schema({
  Step1: {
    name: { type: String },
    email: { type: String,require:true,unique:true},
    artistGender: { type: String,  },
    mobileNumber: { type: String,},
    location: { type: String, },
    category: { type: String,  },
  },
  Step2: {
    data: mongoose.Schema.Types.Mixed,
  },
  Step3: {
    // Add Step 3 fields here, if any
    VidLink1: { type: String },
    VidLink2: { type: String },
    VidLink3: { type: String },
    coversrc: { type: String },
    bannerimg: { type: String },
    // Add more Step 3 fields as needed
  },
  Step4: {
    // Add Step 4 fields here, if any
    bio:{type:String},
    youtubeChannel: { type: String },
    instagramProfile: { type: String },
    videoProfiles: { type: String },
    performanceDuration: { type: String,},
    soundSetup: { type: String, },
    price: { type: Number, },
    corporateEventFees: { type: Number, },
    clubEventFees: { type: Number, },
    outstationGigs: { type: String,},
    artistManagement: { type: String },
    // Add more Step 4 fields as needed
  },
});

const ArtistRegistration = mongoose.model(
  "ArtistRegistration",
  artistRegistrationSchema
);

module.exports = ArtistRegistration;
