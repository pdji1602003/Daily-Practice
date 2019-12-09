const userLeft = true
const userWatchingCatMeme = false

// function watchTutorialCallBack(callback, errorCallack) {
// 	if (userLeft) {
// 		errorCallack({
// 			name: 'User Left',
// 			message: ':('
// 		})
// 	} else if (userWatchingCatMeme) {
// 		errorCallack({
// 			name: 'User Watching Cat Meme',
// 			message: 'WebDevSimplified < Cat'
// 		})
// 	} else {
// 		callback('Thumbs up and Subscribe')
// 	}
// }

// watchTutorialCallBack((message) => {
// 	console.log('Success' + message)
// }, (error) => {
// 	console.log(error.name + '' + error.message)
// })

function watchTutorialPromise() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'User Left',
				message: ':('
			})
		} else if (userWatchingCatMeme) {
			reject({
				name: 'User Watching Cat Meme',
				message: 'WebDevSimplified < Cat'
			})
		} else {
			resolve('Thumbs up and Subscribe')
		}
	})
}

watchTutorialPromise().then((message) => {
	console.log('Success' + message)
}).catch((error) => {
	console.log(error.name + '' + error.message)
})