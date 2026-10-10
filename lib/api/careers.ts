export type CareerItem = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

/**
 * Open roles. Add entries here to list them on /careers — the site is fully
 * static, so this array is the only source.
 */
const careers: CareerItem[] = [];

export async function getCareers(): Promise<CareerItem[]> {
  return careers;
}
