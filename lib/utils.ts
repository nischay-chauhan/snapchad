import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const readFileAsDataURL = (file: File | Blob): Promise<string> => {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			if (typeof reader.result === "string") resolve(reader.result);
		};
		reader.readAsDataURL(file);
	});
};

export const formatData = (inputData : Date): string => {
	const data = new Date(inputData);
	const option : Intl.DateTimeFormatOptions = {month : "short", day : "numeric", };
	const formattedDate : string = data.toLocaleDateString("en-US", option);
	return formattedDate
}