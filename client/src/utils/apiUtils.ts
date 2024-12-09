export const handleApiResponse = <T>(
  data: T & { response: boolean; error?: string; message?: string }
): T => {
  if (data.response === false) {
    throw new Error(data.error || data.message || "Unknown API error.");
  }

  return data;
};
