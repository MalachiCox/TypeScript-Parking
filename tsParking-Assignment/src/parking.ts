let tickets: (string | undefined)[] = ['ticket1', 'ticket2', 'ticket3', 'ticket4', 'ticket5', 'ticket6', 'ticket7', 'ticket8'];
let parkingSpaces: (string | undefined)[] = ['space1', 'space2', 'space3', 'space4', 'space5', 'space6', 'space7', 'space8']
let currentTicket: (string | undefined)[] = [];
let currentParking: (string | undefined)[] = [];


class parkingGarage {
    tickets: string[];
    parkingSpaces: string[];
    currentTicket: { paid: boolean };
    // Setup
    constructor(tickets: string[], parkingSpaces: string[]) {
        this.tickets = tickets;
        this.parkingSpaces = parkingSpaces;
        this.currentTicket = {
            paid: false
        };
    }
    
    printInfo() {
        console.log(`Tickets left: ${this.tickets}
         \nParking Spaces left: ${this.parkingSpaces}`);
    }

    takeTicket() {
        let ticketTaken = true;
        if (ticketTaken == true) {
            let takenTicket = tickets.pop();
            let takenParking = parkingSpaces.pop();
            currentTicket.push(takenTicket);
            currentParking.push(takenParking);
            let currentCar = [currentTicket, currentParking];
            console.log(`Tickets left: ${tickets}
            \nParking Spaces left: ${parkingSpaces}`);
            return currentCar
        }
    }

    payForParking() {
        let payment = prompt('Please insert $5 for parking: ');
        if (payment == '5') {
            alert('The ticket has been paid, you have 15 minutes!');
            return this.currentTicket = {paid: true};
        } else {
            return this.currentTicket = {paid: false};
        }
    }

    leaveGarage() {
        let paid = this.currentTicket;
        if (paid.paid) {
            alert('Thank you, have a nice day!');
            let takenTicket = currentTicket.pop();
            let takenParking = currentParking.pop();
            tickets.push(takenTicket);
            parkingSpaces.push(takenParking);
            console.log(`Tickets left: ${tickets}
            \nParking Spaces left: ${parkingSpaces}`);
            return 'Bye'
        } else {
            let payment = prompt('Please insert $5: ');
            if (payment == '5') {
                alert('Thank you, have a nice day!');
                let takenTicket = currentTicket.pop();
                let takenParking = currentParking.pop();
                tickets.push(takenTicket);
                parkingSpaces.push(takenParking);
                console.log(`Tickets left: ${tickets}
                \nParking Spaces left: ${parkingSpaces}`);
                return 'Bye'
            } else {
                alert('Still need to pay');
                return 'You aint leavin yet :/'
            }
        }
    }
}

let car1 = new parkingGarage();
let car2 = new parkingGarage();