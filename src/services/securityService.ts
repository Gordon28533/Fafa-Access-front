// Security Service - Frontend API Wrapper
import { apiService } from './api'

// Fetch security settings
export const fetchSecuritySettings = async (userId: string) => {
  try {
    const response = await apiService.get(`/users/${userId}/security-settings`)
    return response.data
  } catch (error) {
    console.error('Error fetching security settings:', error)
    throw error
  }
}

// Change password
export const changePassword = async (userId: string, oldPassword: string, newPassword: string) => {
  try {
    const response = await apiService.post(`/users/${userId}/change-password`, {
      oldPassword,
      newPassword,
    })
    return response.data
  } catch (error) {
    console.error('Error changing password:', error)
    throw error
  }
}

// Fetch login sessions
export const fetchLoginSessions = async (userId: string) => {
  try {
    const response = await apiService.get(`/users/${userId}/login-sessions`)
    return response.data
  } catch (error) {
    console.error('Error fetching login sessions:', error)
    throw error
  }
}

// Logout from all devices
export const logoutAllDevices = async (userId: string) => {
  try {
    const response = await apiService.post(`/users/${userId}/logout-all`, {})
    return response.data
  } catch (error) {
    console.error('Error logging out all devices:', error)
    throw error
  }
}

// Toggle 2FA
export const toggle2FA = async (userId: string, enabled: boolean) => {
  try {
    const response = await apiService.post(`/users/${userId}/toggle-2fa`, { enabled })
    return response.data
  } catch (error) {
    console.error('Error toggling 2FA:', error)
    throw error
  }
}

// Enable two-factor authentication
export const enableTwoFactor = async (userId: string) => {
  try {
    const response = await apiService.post(`/users/${userId}/enable-2fa`, {})
    return response.data
  } catch (error) {
    console.error('Error enabling 2FA:', error)
    throw error
  }
}

// Disable two-factor authentication
export const disableTwoFactor = async (userId: string) => {
  try {
    const response = await apiService.post(`/users/${userId}/disable-2fa`, {})
    return response.data
  } catch (error) {
    console.error('Error disabling 2FA:', error)
    throw error
  }
}

// Get security logs
export const getSecurityLogs = async (userId: string) => {
  try {
    const response = await apiService.get(`/users/${userId}/security-logs`)
    return response.data
  } catch (error) {
    console.error('Error fetching security logs:', error)
    throw error
  }
}
