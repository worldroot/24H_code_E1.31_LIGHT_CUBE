const express = require('express')
const app = express()
const port = 3000
const Mysender = require('./mysender.js')
const { Sender } = require('sacn')


app.get('/', (req, res) => {
  res.send('Hello World!');
  let mysender_instance = new Mysender(1,2,511,66);
  mysender_instance.cycleColor();
  //mysender_instance.send_packet();

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  function sender_v2 (mysender_instance){


    console.log("sending");
    setTimeout(function(){mysender_instance.client.send(mysender_instance.packet);}, 2000);
    
  }


//  sender_v2(mysender_instance);


    for (var i= 1; i < 512; i++){
      mysender_instance = new Mysender(1,2,i,66);
      console.log("i :"+ i);
      new Promise(resolve => setTimeout(resolve, 5000));

      sender_v2(mysender_instance);
  //   setTimeout(function(){sender_v2(mysender_instance);}, 3000); 
   //   setInterval(function () {sender_v2(mysender_instance);}, 1000); 

  
    }
 // boucle_sender_v2(mysender_instance);


});

app.get("/send", function (req, res) {

/// methode 2
const sACNServer = new Sender({
  universe: 1,
  universe: 2,
  // see table 3 below for all options
});

async function main() {
  await sACNServer.send({
    payload: { // required. object with the percentages for each DMX channel
      1: 100,
      2: 50,
      3: 0,
    },
    sourceName: "Equipe blockchain NodeJS app",
    priority: 100, // optional. value between 0-200, in case there are other consoles broadcasting to the same universe
  });
  console.log(`sender 2`);

  sACNServer.close(); // terminate the server when your app is about to exit.
}

main(); // wrapped in a main() function so that we can `await` the promise


});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})