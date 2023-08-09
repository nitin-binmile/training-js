function MyApi(){
    this.getPosts=()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            console.log('GET Response:', data.slice(0,10));
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
      
      // Function to make a POST request
      this.createPost=(postData)=> {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('POST Response:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    
}
  const api=new MyApi()
  // Usage
  api.getPosts();
  
  const newPost = {
    userId: 1,
    id: 101,
    title: 'Sample Post Title By Nitin Kukreti',
    body: 'This is the body of the sample post.',
  };
   
  api.createPost(newPost);


  // using asynic await
  function MyApiAsyncAwait() {
    this.getPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('GET Response:', data.slice(0, 10));
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    this.createPost = async (postData) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
  
        const data = await response.json();
        console.log('POST Response:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  
  const api1 = new MyApiAsyncAwait();
  
  // Usage
  async function main() {
    await api1.getPosts();
  
    const newPost = {
      userId: 1,
      id: 101,
      title: 'Sample Post Title By Nitin Kukreti',
      body: 'This is the body of the sample post.',
    };
  
    await api1.createPost(newPost);
  }
  
  main();
  