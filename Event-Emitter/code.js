class EventEmitter {
    events = {};

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        const event = this.events[eventName];
        event.push(callback);
        return {
            unsubscribe: () => {
                const index = event.indexOf(callback);
                if (index !== -1) {
                    event.splice(index, 1)
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }
        const event = this.events[eventName];
        const res = []
        for (const listener of event) {
            res.push(listener(...args))
        }
        return res;
    }
}
