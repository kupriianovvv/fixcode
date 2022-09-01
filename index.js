class UserService {
	constructor(username, password) {
		this.username = username;
		this.password = password
	}

	get username() {
		return this._username
	}

	get password() {
		throw "you are not allowed to get password"
	}

	set username(value) {
		this._username = value
	}

	set password(value) {
		this._password = value
	}

	authenticate_user() {
		const xhr = new XMLHttpRequest();
		//Я временно заменил ваш url на url фейковой апишки, чтобы потестить
		xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/5', true);
		xhr.responseType = "json";
		xhr.send()

		let result = false;
		xhr.onload = () => {
			result = xhr.status === 200 ? true : xhr.response;
			if (result === true) {
				//document.location.href = "https://www.google.com/"
				alert("success")
				return
			}
			alert("failure")
			//alert(result.error)
		}
		xhr.onerror = () => {
			alert("Запрос не удался");
		}
	}
}

document.getElementById("login").onclick = () => {
	const username = document.getElementById("username").value
	const password = document.getElementById("password").value
	const user = new UserService(username, password)
	user.authenticate_user();
}