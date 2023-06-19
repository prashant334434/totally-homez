import axios from 'axios';

export const getPropertiesTypeUtils= async (property_type, property_for, property_city) => {

  console.log("property_for",replaceHyphensWithSpaces(property_type))
  console.log("getPropertiesTypeUtils")
  console.log(property_type, property_for, property_city)
  try {
    const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/${replaceHyphensWithSpaces(property_type)}/${property_for}`);

    console.log("getPropertiesTypeUtils",response.data)
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch property types.');
  }
};



export const getPropertiesCategoryUtils= async (property_city,property_type,property_for,orignalCommunity) => {
  console.log("orignalCommunity",orignalCommunity)

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalCommunity}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };

  export const getImagesApi= async () => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/img_api`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };




  
  export const getPropertiesSubCommunityUtils= async (property_city,property_type,property_for,orignalSubCommunity) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforsubcomm/${property_type}/${property_for}/${orignalSubCommunity}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };


  export const getPropertiesLevelUtils= async (property_type,property_for,orignalLevel) => {


    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforlevel/${property_type}/${property_for}/${orignalLevel}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };



  export const getSubCommunitiesInaCommunityUtils= async (property_type,property_for,orignalCommunity) => {


    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalCommunity}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };



  export const getLevelsInASubCommunityUtils= async (property_type,property_for,orignalSubCommunity) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalSubCommunity}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };


  export const getagentPropertyUtils= async (id) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/pro_by_agent/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };


 export const capitalizeWords=(str)=> {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  
  // Output: "Hello World! Welcome To Javascript"
  

  export const allEmptyStrings=(arr)=> {
    return arr.every((element) => element === "");
  }
  


  export const  capitalizeWordsInHyphenatedString=(str)=> {
    const words = str.split('-');
    const capitalizedWords = [];
  
    for (let word of words) {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalizedWords.push(capitalizedWord);
    }
  
    const capitalizedString = capitalizedWords.join('-');
    return capitalizedString;
  }

  export const replaceHyphensAndCapitalize=(str)=> {
    const result = str.replace(/-/g, function(match) {
      return ' ';
    }).replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  
    return result;
  }

  
  
 
    export const replaceSpacesWithHyphensAndLowerCase = str => str.replace(/ /g, "-").toLowerCase();

    export const replaceHyphensWithSpaces = (str) => {
      return str.replace(/-/g, " ");
    };
    