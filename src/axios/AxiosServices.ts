// API Services: interfaces that provide a program with a description of how to interact with a system to retrieve/change data within it.
// Define an API service with pre-defined methods & interceptors
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const API_ENDPOINTS = {
    LOGIN: '/login', // POST
    LOGOUT: '/logout',  // POST
    UPDATE_USER: 'users', // Settings page //POST
    CUSTOMERS: '/customers', // GET
    CUSTOMERS_BY_PAGE: '/customers/page/:skip/:top', 
    // page/0/10 -> 10 first customers
    CUSTOMER_BY_ID: '/customers/:id',   // GET, PUT, DELETE
}

class ApiServices {
  // Get browser info
  browserInfo = navigator.userAgent;

  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.interceptors.request.use((config) => {
        // If the browser info exists/is available
        if(this.browserInfo) {
          // Send browserinfo along with the request
          config.headers['Broswer-Info'] = this.browserInfo;
          // URL encoded
        //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        config.headers['Authorization'] = 'Bearer 39c9b34d40b323d143581cca503d9035';
        // Return the modified request to continue 
        return config;
    });

    axios.interceptors.response.use(
      (response) => {
          // Reponse with 2xx status triggers this
          // Do something with the response
          return response;
      },
      (error) => {
        // Responses that are not 2xx trigger this
        const {config, response} = error;
        if (response.status === 500) {
          alert('Server error');
        }
        return Promise.reject(error);
      }
  );
  }

  // GetUsers
  async getUsers() { 
    try {
        const response = await axios.get(API_ENDPOINTS.USERS);
        return response.data;
    } catch (error) {
        console.log('Failed to fetch users', error);
        throw error;
    }
  }

  // GetUserById
  async getUserById(uid: string) {
    try {
        const response = await axios.get(`${API_ENDPOINTS.USERS}/${uid}`);
        return response.data;
    } catch (error) {
        console.log('Failed to fetch user', error);
        throw error;
    }
  }

  // CreateUser
  async createUser(userData: any) {
    try {
        const response = await axios.post(API_ENDPOINTS.USERS, userData);
        return response.data;
      } catch (error) {
        console.log('Failed to create user', error);
        throw error;
      }
  }

  // Update an existing user
  async updateUser(uid: string, userData: any) {
    try {
      const response = await axios.put(`${API_ENDPOINTS.USERS}/${uid}`, userData);
      return response.data;
    } catch (error) {
        console.log('Failed to update user', error);
        throw error;
    }
  }

  // Delete a user
  async deleteUser(uid: string) {
    try {
      const response = await axios.delete(`${API_ENDPOINTS.USERS}/${uid}`);
      return response.data;
    } catch (error) {
        console.log('Failed to delete user', error);
        throw error;
    }
  }
};

const ApiService = new ApiServices();

export default ApiService;