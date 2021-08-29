import { BCRYPT_SALT_ROUND } from "@config/env";
import { hash, compare } from "bcrypt";

const saltRounds = BCRYPT_SALT_ROUND;

/**
 * @Usage Hash string using bcrypt hashing function
 */
export async function hashString(text: string): Promise<string> {
  return hash(text, saltRounds);
}

/**
 * @Usage Compare Hash string with normal string using bcrypt hashing function
 */
export async function compareHashString(
  plainText: string,
  hashText: string,
): Promise<boolean> {
  return compare(plainText, hashText);
}
