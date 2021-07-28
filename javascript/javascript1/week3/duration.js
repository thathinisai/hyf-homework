const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
      },
      {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
      },
      {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
      },
  ];
  
  function logOutSeriesText() 
{
 const avgLifespan=80*365*24*60;
 let TotalDuration = 0;
 let Timetoook=[];
for (let i = 0; i<seriesDurations.length;i++)
 {
  Timetoook[i] =  ((seriesDurations[i].days*24*60 + seriesDurations[i].hours*60 + seriesDurations[i].minutes)/avgLifespan*100).toFixed(3);
  console.log(`${seriesDurations[i].title} took ${Timetoook[i]}% of my life`);
  TotalDuration += parseFloat(Timetoook[i]);
}
console.log(`In total that is ${parseFloat (TotalDuration).toFixed(3)}%of my life`);
}
logOutSeriesText();