import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "Hello", likesCount: 12},
				{id: 2, message: "Buy", likesCount: 11}
			],
				newPostText: "it-kamasutra.com"
		},
		dialogsPage: {
			messagesData: [
				{id: 1, message: "Hello"},
				{id: 2, message: "How are you?"},
				{id: 3, message: "GoodBay"},
				{id: 4, message: "Yo"},
				{id: 5, message: "Yo"}
			],
			dialogsData: [
				{id: 1, name: "Sanya"},
				{id: 2, name: "Igor"},
				{id: 3, name: "Lera"},
				{id: 4, name: "Ira"},
				{id: 5, name: "Nastya"},
				{id: 6, name: "Andrey"}
			],
			newMessageBody: ""
		}
	},
	getState () {
		return this._state;
	},
	_callSubscriber () {
		console.log("State changed");
	},
	addPost () {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = "";
		this._callSubscriber(this._state);
	},
	updateNewPostText  (newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer
	},
	dispatch (action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
}

window.store = store;

export default store;

