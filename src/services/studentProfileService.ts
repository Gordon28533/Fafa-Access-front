// Student Profile Service - Frontend API Wrapper
import { apiService } from './api'

// Fetch student profile
export const fetchStudentProfile = async (studentId: string) => {
  try {
    const response = await apiService.get(`/students/${studentId}/profile`)
    return response.data
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error
  }
}

// Save student profile
export const saveStudentProfile = async (studentId: string, data: Record<string, unknown>) => {
  try {
    const response = await apiService.put(`/students/${studentId}/profile`, data)
    return response.data
  } catch (error) {
    console.error('Error saving student profile:', error)
    throw error
  }
}

// Fetch universities
export const fetchUniversities = async () => {
  try {
    const response = await apiService.get('/universities')
    return response.data
  } catch (error) {
    console.error('Error fetching universities:', error)
    throw error
  }
}
