const debug = require('debug')('Franz:Analytics');

// This file contains deliberately noop functions in order to disable upstream's analytics

export function gaPage(page) {
  debug('noop gaPage', page);
}

export function gaEvent(category, action, label) {
  debug('noop gaEvent', category, action, label);
}

export function statsEvent(key, value) {
  debug('noop statsEvent', key, value);
}
