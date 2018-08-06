import "isomorphic-fetch";

const baseUrl = "https://practiceapi.devmountain.com/api";

export class Api {
	getTasks() {
		return fetch(`${baseUrl}/tasks`, {
			method: "GET"
		})
			.then(response => {
				return response.json();
			})
			.catch(err => {
				console.log(err);
			});
	}

	createTask(title) {
		return fetch(`${baseUrl}/tasks`, {
			method: "POST",
			body: JSON.stringify({ title })
		})
			.then(response => response.json())
			.catch(err => console.log(err));
	}

	deleteTask(id) {
		return fetch(`${baseUrl}/tasks/${id}`, {
			method: "DELETE"
		})
			.then(response => response.json())
			.catch(err => console.log(err));
	}

	completeTask(id) {
		return fetch(`${baseUrl}/tasks/${id}`, {
			method: "PUT"
		})
			.then(response => response.json())
			.catch(err => console.log(err));
	}

	updateTask(task) {
		return fetch(`${baseUrl}/tasks/${task.id}`, {
			method: "PATCH",
			body: JSON.stringify(task)
		})
			.then(response => response.json())
			.catch(err => console.log(err));
	}
}
