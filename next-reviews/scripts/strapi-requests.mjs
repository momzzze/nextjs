import {
    writeFileSync
} from 'node:fs';
import qs from 'qs'


const url = 'http://localhost:1337/api/reviews' +
    '?' + qs.stringify({
        filters:{slug:{ $eq: 'hades-2018' }},
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: {
            image: {
                fields: ['url']
            }
        },
        // sort:[
        //     'publishedAt:DESC'
        // ],        
        pagination: {
            pageSize: 1,
            withCount: false
        }
    }, {
        encodeValuesOnly: true
    });


console.log('url: ', url);
const response = await fetch(url);
const body = await response.json();
console.log(JSON.stringify(body, null, 2));
const file = 'scripts/strapi-response.json';
writeFileSync(file, JSON.stringify(body, null, 2));