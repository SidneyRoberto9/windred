import moment from 'moment';

function convertToMinutes(durationString: string) {
  let totalDurationInMinutes = 0;
  const hrRegex = /(\d+)\s*hr/;
  const minRegex = /(\d+)\s*min/;

  const horasEncontradas = durationString.match(hrRegex);
  const minutosEncontrados = durationString.match(minRegex);

  if (horasEncontradas) {
    totalDurationInMinutes += parseInt(horasEncontradas[1]) * 60;
  }

  if (minutosEncontrados) {
    totalDurationInMinutes += parseInt(minutosEncontrados[1]);
  }

  return totalDurationInMinutes;
}

export function getDuration(durationString: string, episodes: number) {
  if (episodes > 0) {
    const totalDurationInMinuterForOneEpisode = convertToMinutes(durationString);

    const finalDuration = moment.duration(0);

    for (let i = 0; i < episodes; i++) {
      finalDuration.add(totalDurationInMinuterForOneEpisode, 'minutes');
    }

    return finalDuration;
  }

  return null;
}
