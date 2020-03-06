const axios = require('axios');

//import vid1 from  '../../videos/all night 2scratch.mp4';




/*    let readDataCallBack = (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    }
    const pushToArray = async (arr, push) => {
        
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].vid)
            let vid = `${arr[i].vid}`
            let name = arr[i].split('.').splice(0, 1).join('');
            push.push({vid: vid, name: name})
        }
    }
   */
const url = 'http://localhost:3005/api/videos'

export const postVideo = async (video) => {
    try {
        const data = video;
        console.log(data);
        const post = axios.post(url, data).then(post => {
            console.log(post);
        })
    } catch (error) {
        console.log(error);
    }
}

export const retrieveVideos = async () => {
    try {
        const response = await fetch(url).then(response => {
            if (response.ok) {
                console.log(response);
                const jsonResponse = response.json();
                return jsonResponse;

            }

            

           console.log(response);

        }).then(videos => {
            console.log(videos);
            let array = [];
            
            for (let i = 0; i < videos.length; i++) {
                let vid = 'http://localhost:3005/api/videos/'+videos[i].name;
                console.log(vid);
                let name = videos[i].name;
            Videos.push({vid: vid, name: name})
                
            }
            
            
            return array;
        })
    } catch(error) {
        console.log(error)
    }
}

export let Videos = [{vid: '', name: ''}];

//pushToArray(videos, Videos);

