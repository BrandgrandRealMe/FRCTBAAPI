const baseUrl = "https://www.thebluealliance.com/api/v3";
let token = null;

export function TBAaddToken(newToken) {
  // Store the token in a global variable
  token = newToken;
}

export async function teamInfo(team, year, options = {}) {
  const url = `${baseUrl}/team/frc${team}`;
  console.log(url);
  options.headers = {
    "X-TBA-Auth-Key": token, // Replace with your TBA API key
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function teamLogo(team, options = {}) {
  const date = new Date();
  const year = date.getFullYear();
  const url = `${baseUrl}/team/frc${team}/media/${year}`;
  options.headers = {
    "X-TBA-Auth-Key": process.env.TBATOKEN, // Replace with your TBA API key
  };

  const mediadata = await fetch(url, options);
  const mediajson = await mediadata.json();
  let firstImage = null;
  for (const item of mediajson) {
    if (item.type === "avatar") {
      firstImage = item;
      break;
    }
  }

  if (firstImage) {
    return firstImage;
  } else {
    return null;
  }
}

export async function teamAwards(team, year, options = {}) {
  let url = "";
  if (year) {
    url = `${baseUrl}/team/frc${team}/awards/${year}`;
  } else {
    url = `${baseUrl}/team/frc${team}/awards`;
  }

  console.log(url);
  options.headers = {
    "X-TBA-Auth-Key": token, // Replace with your TBA API key
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function matchInfo(matchkey, options = {}) {
  const url = `${baseUrl}/match/${matchkey}`;
  console.log(url);
  options.headers = {
    "X-TBA-Auth-Key": process.env.TBATOKEN, // Replace with your TBA API key
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function teamRobotImage(team, year, options = {}) {
  const url = `${baseUrl}/team/frc${team}/media/${year}`;
  console.log(url);
  options.headers = {
    "X-TBA-Auth-Key": process.env.TBATOKEN, // Replace with your TBA API key
  };

  const mediadata = await fetch(url, options);
  const mediajson = await mediadata.json();
  let firstImage = null;
  for (const item of mediajson) {
    if (item.type === "image" || item.type === "imgur") {
      firstImage = `https://i.imgur.com/${item.foreign_key}.png`;
      break;
    }
  }

  if (firstImage) {
    console.log(`Found Image in TBA: ${firstImage}`);
    return firstImage;
  } else {
    return null;
  }
}
