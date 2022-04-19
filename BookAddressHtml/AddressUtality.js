const stringfyDate=(date)=>{
    const options={day:'numeric',month:'short',year:'numeric'};
    const newDate=!date?"undefind":
    new Date(date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
    }