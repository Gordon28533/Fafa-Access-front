// Support Ticket Service - Frontend API Wrapper
import { apiService } from './api'

// Create support ticket
export const createSupportTicket = async (data: Record<string, unknown>) => {
  try {
    const response = await apiService.post('/support-tickets', data)
    return response.data
  } catch (error) {
    console.error('Error creating support ticket:', error)
    throw error
  }
}

// List my tickets (current user's tickets)
export const listMyTickets = async () => {
  try {
    const response = await apiService.get('/support-tickets/my-tickets')
    return response.data
  } catch (error) {
    console.error('Error fetching support tickets:', error)
    throw error
  }
}

// Get user support tickets
export const getUserSupportTickets = async (userId: string) => {
  try {
    const response = await apiService.get(`/support-tickets/user/${userId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching support tickets:', error)
    throw error
  }
}

// Get support ticket by ID
export const getSupportTicketById = async (ticketId: string) => {
  try {
    const response = await apiService.get(`/support-tickets/${ticketId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching support ticket:', error)
    throw error
  }
}

// Get ticket by ID (alias)
export const getTicketById = async (ticketId: string) => {
  return getSupportTicketById(ticketId)
}

// Update support ticket
export const updateSupportTicket = async (ticketId: string, data: Record<string, unknown>) => {
  try {
    const response = await apiService.put(`/support-tickets/${ticketId}`, data)
    return response.data
  } catch (error) {
    console.error('Error updating support ticket:', error)
    throw error
  }
}

// Reply to ticket
export const replyToTicket = async (ticketId: string, message: string) => {
  try {
    const response = await apiService.post(`/support-tickets/${ticketId}/reply`, { message })
    return response.data
  } catch (error) {
    console.error('Error replying to ticket:', error)
    throw error
  }
}

// Close support ticket
export const closeSupportTicket = async (ticketId: string) => {
  try {
    const response = await apiService.put(`/support-tickets/${ticketId}/close`, {})
    return response.data
  } catch (error) {
    console.error('Error closing support ticket:', error)
    throw error
  }
}

// Close ticket (alias)
export const closeTicket = async (ticketId: string) => {
  return closeSupportTicket(ticketId)
}
