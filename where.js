//const { _ } = require('underscore');
import _ from 'underscore';

var goal  = [

    {
        "category" : "education",
        "title" : "Charlie University",
        "description" : "Lorem ipsum dolor sit amet",
        "date" : "01/03/2020",
        "value" : 50000,
        "achievability" : 3,
        "experimental_achievability": 3,
        "suggested": false,
        "accounts": [],
        "articles": [],
        "related_goals": [],
        "id":"1"
    },
    {
        "category" : "education",
        "title" : "Charlie University",
        "description" : "Lorem ipsum dolor sit amet",
        "date" : "01/03/2020",
        "value" : 50000,
        "achievability" : 3,
        "experimental_achievability": 3,
        "suggested": false,
        "accounts": [],
        "articles": [],
        "related_goals": [],
        "id":"2"
    },
    {
        "category" : "education",
        "title" : "Charlie University",
        "description" : "Lorem ipsum dolor sit amet",
        "date" : "01/03/2020",
        "value" : 50000,
        "achievability" : 3,
        "experimental_achievability": 3,
        "suggested": false,
        "accounts": [],
        "articles": [],
        "related_goals": [],
        "id":"3"
    },
    {
        "category" : "education",
        "title" : "Charlie University",
        "description" : "Lorem ipsum dolor sit amet",
        "date" : "01/03/2020",
        "value" : 50000,
        "achievability" : 3,
        "experimental_achievability": 3,
        "suggested": false,
        "accounts": [],
        "articles": [],
        "related_goals": [],
        "id":"4"
    }
]

const filtar = _.where(goal, { id:"1"});
console.log(filtar);