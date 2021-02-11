function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max)) + 1
  // }

 levelOfService = 'Noober Pool'

 let passenger_1 = ride[0]
 let passenger_2 = ride[1]
 let passenger_3 = ride[2]
 

 passenger1Name = `${passenger_1.passengerDetails.first} ${passenger_1.passengerDetails.last}`
 passenger1Phone = `${passenger_1.passengerDetails.phoneNumber}`
 passenger1NumberOfPassengers = `${passenger_1.numberOfPassengers}`
 passenger1PickupAddressLine1 = `${passenger_1.pickupLocation.address}`
 passenger1PickupAddressLine2 = `${passenger_1.pickupLocation.city}, ${passenger_1.pickupLocation.state} ${passenger_1.pickupLocation.zip}`
 passenger1DropoffAddressLine1 = `${passenger_1.dropoffLocation.address}`
 passenger1DropoffAddressLine2 = `${passenger_1.dropoffLocation.city}, ${passenger_1.dropoffLocation.state} ${passenger_1.dropoffLocation.zip}`

 passenger2Name =`${passenger_2.passengerDetails.first} ${passenger_2.passengerDetails.last}`
 passenger2Phone = `${passenger_2.passengerDetails.phoneNumber}` 
 passenger2NumberOfPassengers = `${passenger_2.numberOfPassengers}`
 passenger2PickupAddressLine1 = `${passenger_2.pickupLocation.address}`
 passenger2PickupAddressLine2 = `${passenger_2.pickupLocation.city}, ${passenger_2.pickupLocation.state} ${passenger_2.pickupLocation.zip}`
 passenger2DropoffAddressLine1 = `${passenger_2.dropoffLocation.address}`
 passenger2DropoffAddressLine2 = `${passenger_2.dropoffLocation.city}, ${passenger_2.dropoffLocation.state} ${passenger_2.dropoffLocation.zip}`

 passenger3Name = `${passenger_3.passengerDetails.first} ${passenger_3.passengerDetails.last}`
 passenger3Phone = `${passenger_3.passengerDetails.phoneNumber}`
 passenger3NumberOfPassengers = `${passenger_3.numberOfPassengers}`
 passenger3PickupAddressLine1 = `${passenger_3.pickupLocation.address}`
 passenger3PickupAddressLine2 = `${passenger_3.pickupLocation.city}, ${passenger_3.pickupLocation.state} ${passenger_3.pickupLocation.zip}`
 passenger3DropoffAddressLine1 = `${passenger_3.dropoffLocation.address}`
 passenger3DropoffAddressLine2 = `${passenger_3.dropoffLocation.city}, ${passenger_3.dropoffLocation.state} ${passenger_3.dropoffLocation.zip}`


  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}