class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, [])
        }
        const e = this.events.get(eventName);
        e.push(callback);
        return {
            unsubscribe: () => {
                const index = e.indexOf(callback);
                if (index !== -1) {
                    e.splice(index, 1)
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
        if (!this.events.has(eventName)) {
            return []
        }
        const e = this.events.get(eventName);
        const res = []
        for (const listener of e) {
            res.push(listener(...args))
        }
        return res;
    }
}
