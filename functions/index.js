const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true })

const createNotification = (notification) => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => console.log('Notification added', doc));
};

exports.projectCreated = functions
    .firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();

        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);
    });

exports.userJoined = functions
    .auth
    .user()
    .onCreate(user => {
        return admin.firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(doc => {
                const newUser = doc.data();

                const notification = {
                    content: 'New user joined',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                };

                return createNotification(notification);
            });
    });