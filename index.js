//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

function logAttendeeName(object) {
  console.log(object.name);
}

function logTicketPrice(object) {
  console.log(object.ticketPrice);
}

function updateTicketType(object, type) {
  object.ticketType = type;
}

function updateTicketPrice(object, price) {
  object.ticketPrice = price;
}

function removeEventProperty(object) {
  delete object.event;
}

function addCheckedInProperty(object) {
  object.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};