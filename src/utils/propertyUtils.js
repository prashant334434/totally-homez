import axios from 'axios';

export const getPropertiesTypeUtils= async (property_type, property_for, property_city) => {
  try {
    const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/${property_type}/${property_for}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch property types.');
  }
};



export const getPropertiesCategoryUtils= async (property_city,property_type,property_for,orignalCommunity) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalCommunity}`);
      console.log("categoryData",response.data)
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };



  
  export const getPropertiesSubCommunityUtils= async (property_city,property_type,property_for,orignalSubCommunity) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforsubcomm/${property_type}/${property_for}/${orignalSubCommunity}`);
      console.log("subCommunityData",response.data)
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };


  export const getPropertiesLevelUtils= async (property_type,property_for,orignalLevel) => {


    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforlevel/${property_type}/${property_for}/${orignalLevel}`);
      console.log("levelData",response.data)
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };



  export const getSubCommunitiesInaCommunityUtils= async (property_type,property_for,orignalCommunity) => {


    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalCommunity}`);
      console.log("levelData",response.data)
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };



  export const getLevelsInASubCommunityUtils= async (property_type,property_for,orignalSubCommunity) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalSubCommunity}`);
      console.log("levelData",response.data)
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch property types.');
    }
  };


  export const getagentPropertyUtils= async (id) => {

    try {
      const response = await axios.get(`https://totallyhomerealestate.com/API/api/pro_by_agent/${id}`);
      console.log("levelData",response.data)
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
  