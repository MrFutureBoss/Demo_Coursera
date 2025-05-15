export const countParticipant = (participant: string | number) => {
  if (typeof participant === "string") {
    return participant.split(",").length;
  } else {
    return participant;
  }
}