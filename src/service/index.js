
export class APIService {   
    baseUrl = 'https://jsonplaceholder.typicode.com/';
    serviceFor =''
  constructor(){
      
  }

  async fetch(serviceFor) {
    const response1 = await fetch(`${this.baseUrl} ${serviceFor}`);
   return response1.json();
    
  }

  async post(serviceFor, data ) {
    const response1 = await fetch(`${this.baseUrl} ${serviceFor}`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
   return response1.json();
    
  }

}

    