// Notification Preferences Service - Frontend API Wrapper
import { apiService } from './api'

// Fetch notification preferences
export const fetchNotificationPreferences = async (userId: string) => {
  try {
    const response = await apiService.get(`/users/${userId}/notification-preferences`)
    return response.data
  } catch (error) {
    console.error('Error fetching notification preferences:', error)
    throw error
  }
}

// Get notification preferences (alias for fetchNotificationPreferences)
export const getNotificationPreferences = async (userId: string) => {
  return fetchNotificationPreferences(userId)
}

// Update notification preferences
export const updateNotificationPreferences = async (userId: string, preferences: Record<string, unknown>) => {
  try {
    const response = await apiService.put(`/users/${userId}/notification-preferences`, preferences)
    return response.data
  } catch (error) {
    console.error('Error updating notification preferences:', error)
    throw error
  }
}

// Reset notification preferences to defaults
export const resetNotificationPreferences = async (userId: string) => {
  try {
    const response = await apiService.post(`/users/${userId}/notification-preferences/reset`, {})
    return response.data
  } catch (error) {
    console.error('Error resetting notification preferences:', error)
    throw error
  }
}

// Toggle all email notifications
export const toggleAllEmailNotifications = async (userId: string, enabled: boolean) => {
  try {
    const response = await apiService.post(`/users/${userId}/notification-preferences/toggle-email`, { enabled })
    return response.data
  } catch (error) {
    console.error('Error toggling email notifications:', error)
    throw error
  }
}

// Toggle all in-app notifications
export const toggleAllInAppNotifications = async (userId: string, enabled: boolean) => {
  try {
    const response = await apiService.post(`/users/${userId}/notification-preferences/toggle-in-app`, { enabled })
    return response.data
  } catch (error) {
    console.error('Error toggling in-app notifications:', error)
    throw error
  }
}
