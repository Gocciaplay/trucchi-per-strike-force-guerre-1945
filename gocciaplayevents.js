/**
 * GocciaplayEvents - Simple DOM Event Helper
 * Author: Gocciaplay
 * License: Custom
 */

const GocciaplayEvents = {
    /**
     * Adds an event listener to a DOM element.
     * @param {string} selector - CSS selector of the target element.
     * @param {string} eventType - Type of the event (e.g., 'click', 'input').
     * @param {Function} callback - Function to execute when the event occurs.
     */
    on(selector, eventType, callback) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[GocciaplayEvents] Element "${selector}" not found.`);
            return;
        }
        element.addEventListener(eventType, callback);
        console.log(`[GocciaplayEvents] Listener added for "${eventType}" on "${selector}".`);
    },

    /**
     * Removes an event listener from a DOM element.
     * @param {string} selector - CSS selector of the target element.
     * @param {string} eventType - Type of the event.
     * @param {Function} callback - The function to remove.
     */
    off(selector, eventType, callback) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[GocciaplayEvents] Element "${selector}" not found.`);
            return;
        }
        element.removeEventListener(eventType, callback);
        console.log(`[GocciaplayEvents] Listener removed for "${eventType}" on "${selector}".`);
    }
};

// Example usage:
// GocciaplayEvents.on('#myButton', 'click', () => console.log('Button clicked!'));
// GocciaplayEvents.off('#myButton', 'click', callbackReference);

module.exports = GocciaplayEvents;
