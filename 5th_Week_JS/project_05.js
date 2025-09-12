async function registerUser(username, password){
    //collect data from frontend
    await collectData()
    validateUserEmail()

    await insertInDb()

    sendEmail()
    sendPushNotification()
}

registerUser()
.then(() => console.log('Done'))
.catch(err => console.log('Error', err))