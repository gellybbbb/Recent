
const axios = require('axios'); 
                                        /* GET REQUEST */
// async function fetch() {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }



                                         /* POST REQUEST */
// async function post() {
//     try {
//      const data = {
//            userId: 1,
//             id: 101,
//             title: 'hello world',
//             completed: false
//           };        

//             const response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
//             console.log(response.data);
//           } catch (error) {
//             console.error( error);
//           }
//         }
                            
                    

                                          /* PUT REQUEST*/

async function update() {
  try {
    const data = {
      title: 'HELLO WORLD',
      completed: true
    };
     const response = await axios.put('https://jsonplaceholder.typicode.com/todos/1', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}





                                    /* DELETE REQUEST*/
// async function delete() {
//   try {
//     const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(response.status);
//   } catch (error) {
//     console.error(error);
//   }
// }

  


//fetch();
// post();
update();
// delete();
