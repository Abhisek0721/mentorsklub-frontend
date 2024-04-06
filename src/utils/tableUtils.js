export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false,
    };
    return date.toLocaleString('UTC', options);
}

export function truncateString(str, limit=20) {
    if (str.length > limit) {
        return str.substring(0, limit) + '...';
    }
    return str;
}

export function isSessionLive(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const currentDate = new Date();
    if(currentDate>=startDate && currentDate<endDate) {
        return true;
    }
    return false;
}