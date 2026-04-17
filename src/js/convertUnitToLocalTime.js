import dayjs from "dayjs";

export function convertTimestamptoTime(unixTimestamp) {

        const result = dayjs.unix(unixTimestamp)
        return result.$d.toString();

    }