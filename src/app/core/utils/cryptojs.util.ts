import * as CryptoJS from 'crypto-js';
import { environment } from '@env/environment';

export const encrypt = (data: string): string => {
	return CryptoJS.AES.encrypt(data, environment.keyEcrypt).toString();
};

export const decrypt = <T>(valueEncrypt: string): T | null => {
	const valueDecrypt = CryptoJS.AES.decrypt(valueEncrypt, environment.keyEcrypt).toString(CryptoJS.enc.Utf8);
	if (!valueDecrypt) {
		return null;
	}
	return JSON.parse(valueDecrypt) as T;
};