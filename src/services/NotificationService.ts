// Notification Service - Frontend API Wrapper (Client-side only)

class NotificationService {
  // Show browser notification
  static async requestPermission() {
    if (!('Notification' in window)) {
      console.warn('Browser does not support notifications')
      return false
    }
    
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }

  // Show notification
  static show(title: string, options?: NotificationOptions) {
    if (!('Notification' in window)) {
      console.warn('Browser does not support notifications')
      return
    }

    if (Notification.permission === 'granted') {
      new Notification(title, options)
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options)
        }
      })
    }
  }

  // Show success notification (UI toast)
  static success(message: string) {
    // This can be replaced with a proper toast library
    console.log('Success:', message)
  }

  // Show error notification (UI toast)
  static error(message: string) {
    // This can be replaced with a proper toast library
    console.error('Error:', message)
  }

  // Show info notification (UI toast)
  static info(message: string) {
    // This can be replaced with a proper toast library
    console.info('Info:', message)
  }

  // Show warning notification (UI toast)
  static warning(message: string) {
    // This can be replaced with a proper toast library
    console.warn('Warning:', message)
  }
}

export default NotificationService
