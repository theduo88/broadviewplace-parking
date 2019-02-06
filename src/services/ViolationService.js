export let getResidentVehicles = () => {
    return new Promise(async (resolve) => {
        let data = [
            {
                licensePlateNumber: 'PQQ151',
                state: 'New York',
                vehicle: 'Black VW Jetta',
                unit: '504',
                street: 'Broadview Place',

            },
            {
                licensePlateNumber: 'ABC1234',
                state: 'Georgia',
                vehicle: 'Black BMW X6',
                unit: '508',
                street: 'Broadview Lane',

            }
        ];
        return resolve(data);
    })
};

export let getGuestVehicles = () => {
    return new Promise(async (resolve) => {
        let data = [
            {
                licensePlateNumber: 'ABC4535',
                state: 'New York',
                vehicle: 'Black VW Jetta',
                unit: '504',
                street: 'Broadview Place',

            },
            {
                licensePlateNumber: 'ABC2345',
                state: 'Georgia',
                vehicle: 'Black BMW X6',
                unit: '508',
                street: 'Broadview Lane',

            }
        ];
        return resolve(data);
    })
}

export let getViolations = (newViolation) => {
    return new Promise( async (resolve) =>{
        let data = [
            {
                date: '2019-11-13',
                time: '6:50PM',
                licensePlateNumber: 'GBW7051',
                state: 'New York',
                vehicle: 'Black VW Jetta',
                location: 'In front of Unit 599',
                towingDeadline: '2019-11-13',
                reason: 'PARKED INOPERABLE OR UNACCEPTABLE VEHICLE (FLATS, OIL LEAKS, BROKEN WINDOWS, ETC)',
                recordedBy: 'Troy Zhang',
                otherNotes: 'Left for 2-3 weeks (flat tires)'
            },
            {
                date: '2019-11-13',
                time: '7:50PM',
                licensePlateNumber: '604VWY',
                state: 'Georgia',
                vehicle: 'Green Honda Accord',
                location: 'By the Sales office Lot',
                towingDeadline: '2019-11-13',
                reason: 'PARKED IN VISTORS AREA (WITH NO PASS OR EXPIRED PASS)',
                recordedBy: 'Troy Zhang',
                otherNotes: 'Left community and walked to another development '
            }
        ];

        if (newViolation)   {
            data.push(newViolation);
            console.log(data)
        }
        return resolve(data);

    })
};

export let plateNumberExists = (plateNumber, existingData) => {
    const exists = existingData.reduce((result, item) => {
        if (item.licensePlateNumber === plateNumber) {
            result = 'Plate has already be reported'
        }
        return result
    }, null);
    return exists;
};