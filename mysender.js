var e131 = require('e131');

var conteur = 1;

console.log(`conteur : `, conteur);

class Mysender{

  constructor(universe1, universe2,size_packet1,size_packet2){
    this.client = new e131.Client(universe1);  // or use a universe
    this.client2 = new e131.Client(universe2);  // or use a universe
    this.packet = this.client.createPacket(size_packet1);  // we want 8 RGB (x3) slots 511
    this.packet2 = this.client.createPacket(size_packet2);  // we want 8 RGB (x3) slots 66

    this.slotsData = this.packet.getSlotsData();
    this.slotsData2 = this.packet2.getSlotsData();

    this.packet.setSourceName('Equipe blockchain V2');
    this.packet.setUniverse(0x01);  // make universe number consistent with the client
    this.packet.setOption(this.packet.Options.PREVIEW, true);  // don't really change any fixture
    this.packet.setPriority(this.packet.DEFAULT_PRIORITY);  // not strictly needed, done automatically

    this.packet2.setUniverse(0x02);  // make universe number consistent with the client
    this.packet2.setSourceName('Equipe blockchain V2');
    this.packet2.setOption(this.packet2.Options.PREVIEW, true);  // don't really change any fixture
    this.packet2.setPriority(this.packet2.DEFAULT_PRIORITY);  // not strictly needed, done automatically

    this.color2 = 0;

  }


  cycleColor() {
    var color = 0;

    for (var idx=0; idx<this.slotsData.length; idx++) {
      this.slotsData[idx] = color % 0xff;
      color = color + 9; //90
     // console.log(slotsData);
    // packet = client.createPacket(conteur);
     // var packet = client.createPacket(510);
      //conteur = conteur + 9;
      //packet.setSequenceNumber(10);
      //console.log(packet);
  
    }

  
    console.log(`My cycle`);  
  }

  send_packet(){
    this.client.send(this.packet, function () {
      setTimeout(function(){cycleColor();}, 125 ); //125
    });
    console.log(`Sendin packet`);  

  }



//console.log(slotsData);


// slotsData is a Buffer view, you can use it directly



new_cycle(){
  for (var bc= 1; bc < 511; bc ++){
    var packet5 = client.createPacket(bc);  // we want 8 RGB (x3) slots
    packet5.setUniverse(0x01);  // make universe number consistent with the client
    client.send(packet5, function () {
      setTimeout(new_cycle, 25); //125
    });
  }
}

cycleColorPacket2(){
  for (var idx2=0; idx2<slotsData2.length; idx2++) {
    slotsData2[idx2] = color2 % 0xff;
    color2 = color2 + 9;
  }

  client2.send(packet2, function () {
    setTimeout(cycleColorPacket2, 3000); //125
    console.log(`My cycle 2`);

  });

}

andomNumber(min, max) { 
  return Math.random() * (max - min) + min;
} 
//new_cycle();
//cycleColor();
//cycleColorPacket2();



}

module.exports = Mysender
