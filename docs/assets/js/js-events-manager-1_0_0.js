/**
  * JavaScript Component to manage JavaScript events !
  * Author: chris-scientist
  * Version : 1.0.0
 */
class JsEventsManager {
    constructor() {
        this._eventsDb = new EventsDb();
    }

    addTimeoutEvent(aTimeoutEvent) {
        this._eventsDb.addTimeoutEvent(aTimeoutEvent);
    }

    addIntervalEvent(anIntervalEvent) {
        this._eventsDb.addIntervalEvent(anIntervalEvent);
    }

    clearAll() {
        for(const timeoutEvent of this._eventsDb.timeoutEvents) {
            clearTimeout(timeoutEvent);
        }
        for(const intervalEvent of this._eventsDb.intervalEvents) {
            clearInterval(intervalEvent);
        }
    }
}

/**
 * Mémorise de manière ordonné les évènements JavaScript !
 */
class EventsDb {
    constructor() {
        this._timeoutEvents = [];
        this._intervalEvents = [];
    }

    addTimeoutEvent(aTimeoutEvent) {
        this._timeoutEvents.push(aTimeoutEvent);
    }

    addIntervalEvent(anIntervalEvent) {
        this._intervalEvents.push(anIntervalEvent);
    }

    get timeoutEvents() {
        return this._timeoutEvents;
    }

    get intervalEvents() {
        return this._intervalEvents;
    }
}