import axios from 'axios';

export const getPropertiesTypeUtils= async (property_type, property_for, property_city) => {
  try {
    const response = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/${property_type}/${property_for}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch property types.');
  }
};

// Other utility functions related to API calls
