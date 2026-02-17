// Application Service - Frontend API Wrapper
import { apiService } from './api'

// Application Status Constants
export const APPLICATION_STATUS = {
  DRAFT: 'draft',
  PENDING: 'pending',
  UNDER_REVIEW: 'under_review',
  PENDING_SRC: 'pending_src',
  SRC_APPROVED: 'src_approved',
  SRC_REJECTED: 'src_rejected',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  PAYMENT_PENDING: 'payment_pending',
  PAYMENT_COMPLETED: 'payment_completed',
  DELIVERY_PENDING: 'delivery_pending',
  DELIVERED: 'delivered',
  WITHDRAWN: 'withdrawn',
  CANCELLED: 'cancelled',
}

// Get student applications
export const getStudentApplications = async (studentId: string) => {
  try {
    const response = await apiService.get(`/applications/student/${studentId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching student applications:', error)
    throw error
  }
}

// Get SRC pending applications
export const getSRCPendingApplications = async (srcId: string) => {
  try {
    const response = await apiService.get(`/applications/src/${srcId}/pending`)
    return response.data
  } catch (error) {
    console.error('Error fetching SRC pending applications:', error)
    throw error
  }
}

// Update application
export const updateApplication = async (applicationId: string, data: Record<string, unknown>) => {
  try {
    const response = await apiService.put(`/applications/${applicationId}`, data)
    return response.data
  } catch (error) {
    console.error('Error updating application:', error)
    throw error
  }
}

// Withdraw application
export const withdrawApplication = async (applicationId: string) => {
  try {
    const response = await apiService.put(`/applications/${applicationId}/withdraw`, {})
    return response.data
  } catch (error) {
    console.error('Error withdrawing application:', error)
    throw error
  }
}
