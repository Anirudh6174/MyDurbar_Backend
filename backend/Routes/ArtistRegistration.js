const express = require('express');
const router = express.Router();
const ArtistRegistration = require('../models/ArtistReg.model');
const Artist = require('../models/Artist');


const imageToBase64 = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return data.toString('base64');
  } catch (error) {
    console.error('Error converting image to Base64:', error.message);
    return null;
  }
};

router.post('', async (req, res) => {
  try {
    // Get the data from the request body for Step 1
    const {
      name,
      email,
      artistGender,
      mobileNumber,
      location,
      category,
    } = req.body;

    const existingArtist = await Artist.findOne({ email });

    if (existingArtist) {
      // If the artist already exists, send an error response
      return res.status(409).json({ error: 'Artist with the provided email already exists' });
    }

    // Step 1: Create a new artist registration object for Step 1 and save it to the database
    const newArtistRegistrationStep1 = new ArtistRegistration({
      Step1: {
        name,
        email,
        artistGender,
        mobileNumber,
        location,
        category,
      },
    });

    // Save the new artist registration (Step 1) to the database
    const savedArtistRegistrationStep1 = await newArtistRegistrationStep1.save();

    const selectedCategory = category;
    let Step2Data = {};
    switch (selectedCategory) {
      case 'Singer/Vocalist/Rapper':
        Step2Data = {
          description:req.body.description,
          languageOfPerformance: req.body.languageOfPerformance,
          genresPerformed:req.body.genresPerformed,
          playInstrument:req.body.playInstrument,
          primaryInstrument:req.body.primaryInstrument,
          Other_genresPerformed:req.body.Other_genresPerformed,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
        };
        break;
      case 'Band/Orchestra':
        // Create the schema for Band/Orchestra category
        Step2Data = {
          description:req.body.description,
          bandName: req.body.bandName,
          numBandMembers: req.body.numBandMembers,
          bandExperience: req.body.bandExperience,
          languageOfPerformance: req.body.languageOfPerformance,
          other_languageOfPerformance: req.body.other_languageOfPerformance,
          genresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
        };
        break;
      case 'DJ':
        // Create the schema for DJ category
        Step2Data = {
          description:req.body.description,
          genresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          djExperience: req.body.djExperience,
          outstationGigs: req.body.outstationGigs,
          cityGigs: req.body.cityGigs,
          inHouseDJ: req.body.inHouseDJ,
          howManyClubs: req.body.howManyClubs,
          OtherProp: req.body.OtherProp,
        };
        break;
      case 'Instrument Player':
        // Create the schema for Instrument Player category
        Step2Data = {
          description:req.body.description,
          instruments: req.body.instruments,
          other_instruments: req.body.other_instruments,
          experience: req.body.experience,
          performancePreference: req.body.performancePreference,
          soloShows: req.body.soloShows,
        };
        break;
      case 'Comedian':
        // Create the schema for Comedian category
        Step2Data = {
          description:req.body.description,
          genresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          languageOfPerformance: req.body.languageOfPerformance,
          other_languageOfPerformance: req.body.other_languageOfPerformance,
          experience: req.body.experience,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
          OtherProp: req.body.OtherProp,
        };
        break;
      case 'Magician/Puppeteer':
        // Create the schema for Magician/Puppeteer category
        Step2Data = {
          description:req.body.description,
          genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          experience: req.body.experience,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
          OtherProp: req.body.OtherProp,
        };
        break;
      case 'Dancer/Performer':
        // Create the schema for Dancer/Performer category
        Step2Data = {
          description:req.body.description,
          ggenresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          experience: req.body.experience,
          performancePreference: req.body.performancePreference,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
          OtherProp: req.body.OtherProp,
        };
        break;
      case 'Host/Emcee/Karaoke/Quiz/Games':
        // Create the schema for Host/Emcee/Karaoke/Quiz/Games category
        Step2Data = {
          description:req.body.description,
          languagesKnown: req.body.languagesKnown,
          other_languagesKnown: req.body.other_languagesKnown,
          genresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          experience: req.body.experience,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
          OtherProp: req.body.OtherProp,
        };
        break;
      case 'Entertainer':
        // Create the schema for Entertainer category
        Step2Data = {
          description:req.body.description,
          genresPerformed:req.body.genresPerformed,
          other_genresPerformed: req.body.other_genresPerformed,
          experience: req.body.experience,
          languagesKnown: req.body.languagesKnown,
          other_languagesKnown: req.body.other_languagesKnown,
          privateCorporateShows:req.body.privateCorporateShows,
          clubShows:req.body.clubShows,
          OtherProp: req.body.OtherProp,
        };
        break;
      default:
        console.log(`Invalid category: ${selectedCategory}`);
        // Handle error or set default Step2Data if required
        break;
    }
    
    // Step 2: Update the existing artist registration object with data from Step 2
    savedArtistRegistrationStep1.Step2 = {
      data: Step2Data,
    };


    // Save the updated artist registration (Step 2) to the database
    await savedArtistRegistrationStep1.save();
    // Step 3: Get the data from the request body for Step 3
    const {
      VidLink1,
      VidLink2,
      VidLink3,
      coversrc,
      bannerimg,
      // Add more Step 3 fields as needed
    } = req.body;


    const coversrcBase64 = imageToBase64(coversrc);
    const bannerimgBase64 = imageToBase64(bannerimg);
    
    // Step 3: Update the existing artist registration object with data from Step 3
    savedArtistRegistrationStep1.Step3 = {
      VidLink1,
      VidLink2,
      VidLink3,
      coversrc: coversrcBase64, 
      bannerimg: bannerimgBase64,
      // Add more Step 3 fields as needed
    };
    await savedArtistRegistrationStep1.save();

    // Step 4: Get the data from the request body for Step 4
    const {
      bio,
      youtubeChannel,
      instagramProfile,
      videoProfiles,
      performanceDuration,
      soundSetup,
      price,
      corporateEventFees,
      clubEventFees,
      outstationGigs,
      artistManagement,
      // Add more Step 4 fields as needed
    } = req.body;

    // Step 4: Update the existing artist registration object with data from Step 4
    savedArtistRegistrationStep1.Step4 = {
      bio,
      youtubeChannel,
      instagramProfile,
      videoProfiles,
      performanceDuration,
      soundSetup,
      price,
      corporateEventFees,
      clubEventFees,
      outstationGigs,
      artistManagement,
      // Add more Step 4 fields as needed
    };

    await savedArtistRegistrationStep1.save();


    const savedStep1 = savedArtistRegistrationStep1.Step1;
    const savedStep2 = savedArtistRegistrationStep1.Step2.data;
    const savedStep3 = savedArtistRegistrationStep1.Step3;
    const savedStep4 = savedArtistRegistrationStep1.Step4;
    
    // Combine all the data from Steps 1, 2, 3, and 4 into a single object
    const newArtistData = {
      ...savedStep1,
      ...savedStep2,
      ...savedStep3,
      ...savedStep4,
    };
    
    // Create a new Artist document based on the combined data
    const newArtist = new Artist(newArtistData);
    
    // Save the new Artist to the database
    const savedArtist = await newArtist.save();

    res.json({ message: 'Artist registration successful', artist: savedArtistRegistrationStep1 });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: `Error registering artist: ${err.message}` });
  }
});

module.exports = router;