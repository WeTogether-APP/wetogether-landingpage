import { promises as fs } from 'fs';
import path from 'path';

export interface WaitlistEntry {
  email: string;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'waitlist.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read waitlist from file
export async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Save waitlist to file
export async function saveWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), 'utf-8');
}

// Add entry to waitlist
export async function addToWaitlist(email: string): Promise<WaitlistEntry> {
  const entries = await getWaitlist();
  
  // Check if email already exists
  const existing = entries.find(
    (entry) => entry.email.toLowerCase() === email.toLowerCase()
  );
  
  if (existing) {
    throw new Error('Email already registered');
  }
  
  const entry: WaitlistEntry = {
    email: email.toLowerCase().trim(),
    timestamp: new Date().toISOString(),
  };
  
  entries.push(entry);
  await saveWaitlist(entries);
  
  return entry;
}

