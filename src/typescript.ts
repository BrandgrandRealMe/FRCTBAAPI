const baseUrl: string = "https://www.thebluealliance.com/api/v3";
let token: string | null = null;

export function TBAaddToken(newToken: string): void {
  // Store the token in a global variable
  token = newToken;
}

export async function teamInfo(team: string, year: number, options: any = {}): Promise<any> {
  const url: string = `${baseUrl}/team/frc${team}`;
  options.headers = {
    "X-TBA-Auth-Key": token,
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function teamLogo(team: string, options: any = {}): Promise<any> {
  const date: Date = new Date();
  const currentYear: number = date.getFullYear();
  const url: string = `${baseUrl}/team/frc${team}/media/${currentYear}`;
  options.headers = {
    "X-TBA-Auth-Key": token,
  };

  const mediadata = await fetch(url, options);
  const mediajson = await mediadata.json();
  let firstImage: any = null;
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

export async function teamAwards(team: string, year: number, options: any = {}): Promise<any> {
  let url: string = "";
  if (year) {
    url = `${baseUrl}/team/frc${team}/awards/${year}`;
  } else {
    url = `${baseUrl}/team/frc${team}/awards`;
  }

  options.headers = {
    "X-TBA-Auth-Key": token,
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function matchInfo(matchkey: string, options: any = {}): Promise<any> {
  const url: string = `${baseUrl}/match/${matchkey}`;
  options.headers = {
    "X-TBA-Auth-Key": token,
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
}

export async function teamRobotImage(team: string, year: number, options: any = {}): Promise<any> {
  const url: string = `${baseUrl}/team/frc${team}/media/${year}`;
  options.headers = {
    "X-TBA-Auth-Key": token,
  };

  const mediadata = await fetch(url, options);
  const mediajson = await mediadata.json();
  let firstImage: string | null = null;
  for (const item of mediajson) {
    if (item.type === "image" || item.type === "imgur") {
      firstImage = `https://i.imgur.com/${item.foreign_key}.png`;
      break;
    }
  }

  if (firstImage) {
    return firstImage;
  } else {
    return null;
  }
}