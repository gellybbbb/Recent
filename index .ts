const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('GET Error:', error);
  }
}

async function postData() {
  try {
    const data = {
      userId: 1,
      id: 101,
      title: 'Sample Title',
      completed: false
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('POST Error:', error);
  }
}

async function updateData() {
  try {
    const data = {
      title: 'Updated Title',
      completed: true
    };

    const response = await axios.put('https://jsonplaceholder.typicode.com/todos/1', data);
    console.log('PUT/PATCH Response:', response.data);
  } catch (error) {
    console.error('PUT/PATCH Error:', error);
  }
}

async function deleteData() {
  try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
    console.log('DELETE Response Status:', response.status);
  } catch (error) {
    console.error('DELETE Error:', error);
  }
}

// Usage
fetchData();
postData();
updateData();
deleteData();
