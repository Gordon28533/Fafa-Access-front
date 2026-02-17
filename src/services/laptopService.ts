// Laptop Service - Frontend API Wrapper
import { apiService } from './api'

// Get laptops
export const getLaptops = async () => {
  try {
    const response = await apiService.get('/laptops')
    return response.data
  } catch (error) {
    console.error('Error fetching laptops:', error)
    throw error
  }
}

// Get laptop by ID
export const getLaptopById = async (laptopId: string) => {
  try {
    const response = await apiService.get(`/laptops/${laptopId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching laptop:', error)
    throw error
  }
}

// Create laptop service (for admin)
export const createLaptopService = {
  create: async (data: Record<string, unknown>) => {
    try {
      const response = await apiService.post('/laptops', data)
      return response.data
    } catch (error) {
      console.error('Error creating laptop:', error)
      throw error
    }
  },
  update: async (laptopId: string, data: Record<string, unknown>) => {
    try {
      const response = await apiService.put(`/laptops/${laptopId}`, data)
      return response.data
    } catch (error) {
      console.error('Error updating laptop:', error)
      throw error
    }
  },
  delete: async (laptopId: string) => {
    try {
      const response = await apiService.delete(`/laptops/${laptopId}`)
      return response.data
    } catch (error) {
      console.error('Error deleting laptop:', error)
      throw error
    }
  },
}
