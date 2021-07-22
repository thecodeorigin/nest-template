import { hash, compare } from "bcrypt";

const saltRounds = 10;

export async function hashString(text: string): Promise<string> {
  return hash(text, saltRounds);
}

export async function compareHashString(
  plainText: string,
  hashText: string,
): Promise<boolean> {
  return compare(plainText, hashText);
}
