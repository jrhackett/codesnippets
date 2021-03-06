'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Code Schema
 */
var CodeSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill in the name',
    trim: true
  },
  language: {
    type: String,
    default: '',
    required: 'Please fill in the name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill in the description',
    trim: true
  },
  code: {
    type: String,
    default: '',
    required: 'Please fill in the code snippet',
    trim:true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Code', CodeSchema);
