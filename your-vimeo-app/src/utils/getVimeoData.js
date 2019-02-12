// export function vimeoApiServiceCall(query) {

// 	const val = query;
// 	const url = "https://api.vimeo.com/videos?query="+val+"&access_token=85aad4903a5917596e768ee253e6b9ab&sort=likes&per_page=3"

//     return new Promise((resolve, reject) => {
//     	fetch(url, {
// 		    method: 'get',
// 		    headers: {
// 		        'Accept': 'application/json'
// 		    }
// 		}).then((response) => {
// 			return response.json();
// 		}).then((response) => {
// 	        const data = response.data;			
// 	    	resolve(data);
// 	    });
//     }).catch(() => console.log("REJECTED"));
// };
