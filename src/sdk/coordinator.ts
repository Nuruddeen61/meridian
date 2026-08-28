import { prisma } from "./db";

export async function readVaultAdmin(): Promise<string> {
  const token = process.env.VAULT_TOKEN;
  const vaultUrl = process.env.VAULT_ADDR;
  if (!token || !vaultUrl) {
    return process.env.ADMIN_SECRET || "";
  }
  try {
    const res = await fetch(`${vaultUrl}/v1/secret/data/admin`, {
      headers: { "X-Vault-Token": token },
      cache: "no-store",
    });
    const data = await res.json();
    return data.data.secret as string;
  } catch {
    return process.env.ADMIN_SECRET || "";
  }
}
