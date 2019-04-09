const EventEmitter = require('events');

class Plant extends EventEmitter{
    constructor(name){
        super();
        this.plantType = name;
        this.size = 0;
        this.hasBeenPlanted = false;

        this.once('planted', this.plantedSeed);
        this.on('watered', this.water);
        this.on('Bugs!', this.bugAttach);
        this.on('harvested', this.harvest);
        this.on('error', (err) => {console.log(`whoops! there was an error ${err}`);
        });

    }

    plantedSeed(){
        this.hasBeenPlanted = true;
        this.size = 1;
        console.log(`You have planted ${this.plantType} its size is ${this.size}`)
    }
    water(){
        if(this.hasBeenPlanted===true){
            this.size++;
            console.log(`You have watered ${this.plantType} its size is now ${this.size}`)
        }else{
            this.emit('error', 'you must plant before you water');
        }

    }
    bugAttach(){
        if(this.hasBeenPlanted===true){
            this.size--;
            console.log(`Bugs have attacked ${this.plantType} its size is now ${this.size}`)
        }else{
            this.emit('error', 'bugs can not attack a plant that is not there')
        }
    }
    harvest(){
        if(this.hasBeenPlanted === true){
            console.log(`You have harvested ${this.plantType} its size was ${this.size}`);
            this.size = 0;
            this.hasBeenPlanted = false;
            this.removeAllListeners();
        }else{
            this.emit('error', 'you must plant something before you can harvest it')
        }
    }

}

export default Plant;

let corn = new Plant('corn');
let carrots = new Plant('carrots');

corn.emit('planted');
corn.emit('watered');
corn.emit('watered');
corn.emit('watered');
corn.emit('Bugs!');
corn.emit('watered');
corn.emit('harvested');
corn.emit('watered');
corn.emit('watered');

carrots.emit('watered');
carrots.emit('harvested');
carrots.emit('Bugs!');
carrots.emit('planted');
carrots.emit('watered');
carrots.emit('watered');



