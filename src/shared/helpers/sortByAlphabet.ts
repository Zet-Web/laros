import { Option } from "shared/types";

export const sortByAlphabet = (arr: Option[]) => {
    let sortedArr = arr.sort((a, b) => {
        if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
        if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
        return 0;
    })
    return sortedArr;
}