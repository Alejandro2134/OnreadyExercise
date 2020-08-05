const concessionaire = {
    vehicles: []
}

function Car (brand, model, doors, price) {
    this.Marca = brand;
    this.Modelo = model;
    this.Puertas = doors;
    this.Precio = price;
}

function Motorcycle (brand, model, cilindrada, price) {
    this.Marca = brand;
    this.Modelo = model;
    this.Cilindrada = cilindrada;
    this.Precio = price;
}

const car1 = new Car('Peugeot', '206', 4, 200.000);
const motorcycle1 = new Motorcycle('Honda', 'Titan', '125c', 60.000);
const car2 = new Car('Peugeot', '208', 5, 250.000);
const motorcycle2 = new Motorcycle('Yamaha', 'YBR', '160c', 80.500);

function addVehicles (vehicle) {
    concessionaire.vehicles.push(vehicle);
}

function getVehicles (vehicles) {
    vehicles.forEach(vehicle => {
        if(vehicle.hasOwnProperty('Puertas')) {
            console.log(`Marca: ${vehicle.Marca} // Modelo: ${vehicle.Modelo} // Puertas: ${vehicle.Puertas} // Precio: ${vehicle.Precio}`);
        } else {
            console.log(`Marca: ${vehicle.Marca} // Modelo: ${vehicle.Modelo} // Cilindrada: ${vehicle.Cilindrada} // Precio: ${vehicle.Precio}`);
        }
    })
}

function getExpensiveVehicle (vehicles) {
    const result = vehicles.sort((a, b) => {
        if(a.Precio > b.Precio) {
            return -1;
        }

        return 0;
    })[0];

    console.log(`Vehículo más caro: ${result.Marca} ${result.Modelo}`);
}

function getCheaperVehicle (vehicles) {
    const result = vehicles.sort((a, b) => {
        if(a.Precio < b.Precio) {
            return -1;
        }

        return 0;
    })[0];

    console.log(`Vehículo más barato: ${result.Marca} ${result.Modelo}`);
}

function getVehicleThatHasModelWithLetter (vehicles, letter) {
    const found = vehicles.find(vehicle => {
        return vehicle.Modelo.includes(letter);
    })

    if(found) {
        console.log(`Vehículo que contiene en el modelo la letra ‘${letter}’: ${found.Marca} ${found.Modelo} ${found.Precio}`);
    } else {
        console.log('No se encontro vehiculo con la letra proporcionada');
    }
}

function getVehiclesSortByPrice (vehicles) {
    const sortVehicles = vehicles.sort((a, b) => {
        if(a.Precio > b.Precio) {
            return -1;
        }

        return 0;
    });

    sortVehicles.forEach(vehicle => {
        console.log(`${vehicle.Marca} ${vehicle.Modelo}`);
    })
}

addVehicles(car1);
addVehicles(motorcycle1);
addVehicles(car2);
addVehicles(motorcycle2);
getVehicles(concessionaire.vehicles);
console.log('=============================');
getExpensiveVehicle(concessionaire.vehicles);
getCheaperVehicle(concessionaire.vehicles);
getVehicleThatHasModelWithLetter(concessionaire.vehicles, 'Y');
console.log('=============================');
console.log('Vehículos ordenados por precio de mayor a menor:');
getVehiclesSortByPrice(concessionaire.vehicles);